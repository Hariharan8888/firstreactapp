import React from "react";

const Searchbox = ({Searchfield,SearchChange}) => {
    return(
       <div className="pa2">
        <input className="pa3 ba b--green bg-lightest-blue" type="search" 
        placeholder="Search Robot" 
        onChange={SearchChange}
        />
       </div>
    );
}

export default Searchbox;