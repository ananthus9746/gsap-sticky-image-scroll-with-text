import React from 'react'
import Gallery from '../../Gallery';


function Home() {
  return (
    <div>
      <div className='one'>
        <p className='head'>Section One</p>
        <p className='disc'>Find solace, relaxation, and rejuvenation</p>
      </div>
      <Gallery />

      <div className='one'>
        <p className='head'>Section Two</p>
        <p className='disc'>Break free from the monotony of urban lifestyles</p>
      </div>

    </div>
  );
}

export default Home;