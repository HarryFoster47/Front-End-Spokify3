import React from 'react'
import Songcard from '../components/songcard';
import Searchbar from '../components/searchbar'
import Navbar from '../components/navbar'
import Albumcard from '../components/albumcard';
function Albums() {
  return (  
    <div className="Albums">

    {/* Navigation */}
<Navbar />
 
 {/* The Cards */}
<div class='flex-container'>
<Albumcard />

</div>

 {/* The Searchbar */}
 <Searchbar />

  </div>
  );
}

export default Albums;
