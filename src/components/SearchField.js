import React from 'react';
import Icon from './Icons';


const SearchField = ({className,handleChange,handleSearch , ...rest}) => {
    return ( 
        <div className={`flex px-4 py-2 border border-grey-line my-8 ${className ? className : ""}`}>
            <input
                placeholder="Search"
                type="text"
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                {...rest}
            />
            <button className="cursor-pointer outline-none" onClick={handleSearch}>
                <Icon id="search-icon" width="16" height="16" />
            </button>
        </div>
     );
}
 
export default SearchField;