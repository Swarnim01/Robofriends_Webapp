import React from 'react';

const Searchbox = ({searchChange}) =>
{
    return(<div className = 'ma2'>
        <input className = 'pa3 bg-light-green b--light-purple br3 shadow-4' 
        type = 'Search' placeholder = 'Search Robots' onChange = {searchChange}/>
    </div>
    
    );
}
export default Searchbox;