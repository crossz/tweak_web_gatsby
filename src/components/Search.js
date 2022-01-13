import React, { useEffect, useState, useRef } from 'react'
import {
  makeStyles,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
} from '@material-ui/core'
import useJsSearch from '@hooks/useJsSearch'
import { EInputBase } from '@themes/components/ETextField'
import SearchIcon from '@images/icons/search.svg'
import { navigate } from 'gatsby'
import { CAREER_REGIONS } from '@utils/constant'
import { useLocation } from '@reach/router'
import scrollTo from 'gatsby-plugin-smoothscroll'

const useStyles = makeStyles((theme) => ({
  root: {},
  searchInput: {
    width: '100%',
    maxWidth: 273,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'none',
      marginBottom: theme.spacing(4),
    },
  },
  regionWrapper: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
  },
  regionItem: {
    color: theme.palette.primary.main,
  },
}))

const Search = ({
  data,
  setSearchResult,
  setSearching,
  setPageList,
  isFAQ,
}) => {
  const classes = useStyles()
  const { search } = useJsSearch(data, isFAQ)
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('')
  const location = useLocation()
  const searchRef = useRef(null)

  useEffect(() => {
    if (!search) return
    searchRef.current = search
  }, [search])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const q = params.get('q') || ''
    setSearching && setSearching(Boolean(q || region))
    if (q) scrollTo('#search-box', 'center')
    if (!q && !region) return setPageList && setPageList()
    const results =
      (q && searchRef.current ? searchRef?.current(q) : data) || []
    setSearchResult &&
      setSearchResult(
        !isFAQ && region && results.length
          ? results.filter((item) => item.frontmatter?.region === region)
          : results
      )
    setQuery(q)
  }, [location, data, region])

  const handleSearch = (e) => setQuery(e.target.value)

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    try {
      await navigate(`${query ? `?q=${query}` : location.pathname}`)
    } catch (err) {
      console.error(err)
    }
  }

  const handleRegionChange = (e) => setRegion(e.target.value)

  return (
    <form id='search-box' noValidate onSubmit={handleSearchSubmit}>
      <EInputBase
        className={classes.searchInput}
        placeholder='Search'
        value={query}
        onChange={handleSearch}
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon color='disabled' />
          </InputAdornment>
        }
      ></EInputBase>
      {!isFAQ && (
        <Box className={classes.regionWrapper}>
          <RadioGroup value={region} onChange={handleRegionChange}>
            {CAREER_REGIONS.map((region) => (
              <FormControlLabel
                className={classes.regionItem}
                key={region.value}
                value={region.value}
                control={<Radio />}
                label={region.label}
              />
            ))}
          </RadioGroup>
        </Box>
      )}
    </form>
  )
}

export default Search
