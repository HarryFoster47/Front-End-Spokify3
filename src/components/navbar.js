import React from "react";
import { Link, Router } from "react-router-dom";
// Card Component
function Navbar () {
    return(

      <div className='nav'>   
  <Link to="songs">Click to view our songs page</Link>
  <Link to="albums">Click to view our albums page</Link>

<img src='spokify/src/assets/albumicon.png' className='navimage'></img>
<img src='spokify/src/assets/musicicon.png' className='navimage'></img>
 </div>

    )
  }
  
  export default Navbar