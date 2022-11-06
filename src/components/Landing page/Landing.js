import React from 'react'
import "./Landing.css"

const Landing = () => {

  return (
    <div className='container'>
      <div className='container__text'>
        <h1>Hi! I'm Camilo,</h1>
        <h1>a fullstack developer! </h1> <br/>
        <h2>Passionate about technology, learning new skills and working on new cool projects.</h2>
        <a href={require('/Users/PC GAMER/Documents/Bootcamp/portfolio/my-app/src/imgs/CV.pdf')} download>Download CV</a>
      </div>
      <div className='container__img'>
        <img src={require('/Users/PC GAMER/Documents/Bootcamp/portfolio/my-app/src/imgs/photo.jpg')}></img>
      </div>
    </div>
  )
}

export default Landing