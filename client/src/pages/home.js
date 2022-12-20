import React from 'react'
import LoginForm from '../components/loginForm'
import '../App.css'
import SignupForm from '../components/signupForm'

function Home() {


  return (
    <div className="home-background-image mh-100">
      <br/>
      <h1 className='title text-center pt-5'>The Casual's Caddie</h1>
      <br />
      <div className='pt-5 d-flex justify-content-center justify-content-around align-items-center flex-column'>
        <p className='descAppOne col-xs-6 col-sm-9 col-md-8 p-3'>This app provides golf enthusiasts with a simple and convenient way to track and improve their game. With The Casual’s Caddie users can input their average iron, wedge, wood, and driver distances (in yards) based on an average of 5 strokes. This allows them to easily monitor their progress and identify areas for improvement.
        </p>
        <br/>
        <div className='row justify-content-around col-xs-9 col-sm-9 col-md-9'>
          <div className='loginContainer '>
            <h3 className='text-white'>Login</h3>
          <LoginForm />
          </div>
          <div className='signupContainer'>
            <h3 className='text-white'>Signup</h3>
          <SignupForm />
          </div>
        </div>
      </div>
      <div className='pt-5 d-flex justify-content-center justify-content-around align-items-center flex-column'>
        <p className='descAppTwo col-xs-6 col-sm-9 col-md-8 p-3'>Whether you're a beginner looking to improve your skills or a seasoned pro looking to fine-tune your game, The Casual’s Caddie has something for everyone. With its user-friendly interface and comprehensive range of features, it's the perfect companion for golfers of all levels. Try it out today and start improving your game!
        </p>
      </div>
    </div>
  )
}

export default Home
