import React from 'react'

const NavDisplay = () => {
  return (
    <div>
        <header className="banner">
        <div className="bannercontents">
          <h1 className="bannertitle">Money Heist</h1>
          <div className="bannerbuttons">
            <button className="bannerbutton">Play</button>
            <button className="bannerbutton">My List</button>
          </div>
          <h1 className="bannerDescription">
            To carry out the biggest heist in history, a mysterious man called
            The Professor recruits a band of eight robbers who have a single
            characteristic: n...
          </h1>
        </div>
        <div className="bannerfadeBottom"></div>
      </header>
    </div>
  )
}

export default NavDisplay