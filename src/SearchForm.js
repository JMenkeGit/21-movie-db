import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()
  return (
    <form
      className='search-form'
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <h1>search movies</h1>
      <input
        type='text'
        name='query'
        id='query'
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  )
}

export default SearchForm
