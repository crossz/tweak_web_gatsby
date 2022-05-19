import React, { useEffect, useState } from 'react'
import { makeStyles, InputAdornment, IconButton } from '@material-ui/core'
import { EInputBase } from '@themes/components/ETextField'
import SearchIcon from '@images/icons/search.svg'
import CancelIcon from '@images/icons/cancel.svg'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { useI18next } from 'gatsby-plugin-react-i18next'
import useObjectTranslation from '@hooks/useObjectTranslation'

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
  cancelIcon: {
    '& path': {
      fill: theme.palette.secondary.main,
    },
  },
}))

const Search = ({ data, setSearchResult, isFAQ }) => {
  const classes = useStyles()
  const { t } = useI18next()
  const [query, setQuery] = useState('')
  const { tB } = useObjectTranslation()

  useEffect(() => {
    if (!query) setSearchResult(data)
  }, [data, query])

  const handleSearch = (e) => setQuery(e.target.value)

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    scrollTo('#section-tabs')

    const regex = new RegExp(query, 'i')

    try {
      const result = query
        ? data?.filter(
            (item) =>
              regex?.test(tB('question', item)) ||
              regex?.test(tB('content', item))
            // item.question.includes(query) || item.content.includes(query)
          ) || []
        : data
      setSearchResult(result)
    } catch (err) {
      console.error(err)
    }
  }

  const handleCancel = () => setQuery('')

  return (
    <form id='search-box' noValidate onSubmit={handleSearchSubmit}>
      <EInputBase
        className={classes.searchInput}
        placeholder={t('form.placeholder.search')}
        value={query}
        onChange={handleSearch}
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon color='disabled' />
          </InputAdornment>
        }
        endAdornment={
          query ? (
            <InputAdornment position='end'>
              <IconButton size='small' color='secondary' onClick={handleCancel}>
                <CancelIcon className={classes.cancelIcon}></CancelIcon>
              </IconButton>
            </InputAdornment>
          ) : null
        }
      ></EInputBase>
    </form>
  )
}

export default Search
