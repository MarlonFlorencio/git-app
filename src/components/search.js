'use strict'

import React from 'react'

const Search = ({isDisabled, handleSearch}) => (
    <div className='search'>
        <input disabled={isDisabled} type='search' placeholder='Digite o nome do usuário' 
        onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    handleSearch : React.PropTypes.func.isRequired,
    isDisabled:PropTypes.bool.isRequired
}

export default Search
