import React, { useEffect, useState } from 'react'
import { makeStyles, InputAdornment } from '@material-ui/core'
import { EInputBase } from '@themes/components/ETextField'
import SearchIcon from '@images/icons/search.svg'

const useStyles = makeStyles((theme) => ({
  root: {},
  searchInput: {
    width: '100%',
    maxWidth: 273,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'none',
      marginBottom: theme.spacing(1.5),
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

const Search = ({ data, setSearchResult, isFAQ }) => {
  const classes = useStyles()
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!query) setSearchResult(data)
  }, [data, query])

  const handleSearch = (e) => setQuery(e.target.value)

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = query
        ? data?.filter(
            (item) =>
              item.question.includes(query) || item.content.includes(query)
          ) || []
        : data
      setSearchResult(result)
    } catch (err) {
      console.error(err)
    }
  }

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
    </form>
  )
}

export default Search
