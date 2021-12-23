import React, { useEffect, useState } from 'react'
import { makeStyles, InputAdornment } from '@material-ui/core'
import useJsSearch from '@hooks/useJsSearch'
import { EInputBase } from '@themes/components/ETextField'
import SearchIcon from '@images/icons/search.svg'
import { navigate } from 'gatsby'

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
}))

const Search = ({
  data,
  location,
  setSearchResult,
  setSearching,
  setPageList,
  isFAQ,
}) => {
  const classes = useStyles()
  const { search } = useJsSearch(data, isFAQ)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const q = params.get('q') || ''
    setSearching && setSearching(Boolean(q))
    if (!q) return setPageList && setPageList()
    const results = search(q) || []
    setSearchResult && setSearchResult(results)
    setQuery(q)
  }, [location, data])

  const handleSearch = (e) => setQuery(e.target.value)

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    try {
      navigate(query ? `${location.pathname}?q=${query}` : location.pathname)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <form noValidate onSubmit={handleSearchSubmit}>
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
    </form>
  )
}

export default Search
