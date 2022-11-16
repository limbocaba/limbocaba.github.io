import React from 'react'
import huluSS from "../images/hulucloneSS.png"
import "../comp-css/Landing.css"
import PetLyfeSS from "../images/petlyfe.png"

function Landing() {

  const handleClickHulu = () => {
  window.open("https://sandys-clone.surge.sh/", "_blank")
  }
  
  const handleClickPet = () => {
    window.open("https://pet-lyfe.netlify.app/", "_blank")
  }

  return (
    <div className='landing' >
      <div className="hulu-project">
        <img className='hulu-pic' alt='Project-1' src={huluSS} onClick={handleClickHulu} />
        <p>Utilizing React and a third-party API, I created a project to resemble the landing page of the popular streaming service Hulu! You can browse through different categories and see the hottest movies out right now. The API used is constantly being updated, so the site will always be refreshed with the newest movies and TV series! </p>
      </div>
      <div className='petlyfe'>
        <img className='petlyfe-img' alt='Project 2' src={ PetLyfeSS} onClick={handleClickPet} /> 
      </div>
    </div>
  )
}

export default Landing