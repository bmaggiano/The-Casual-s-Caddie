import React from 'react'
import LoginForm from '../components/loginForm'
import '../App.css'
import grass from '../images/grass.jpg'
import Carousel from '../components/carousel'
import auth from '../utils/auth'
import { Link } from 'react-router-dom'
function Home() {


  return (
    <>
      <div className='mb-4'>
        <div className="mainHome relative bg-black-800 mx-4 mt-4 rounded-md">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover rounded-md"
              src={grass}
              alt="Well maintained golf grass"
            />
            <div className="absolute inset-0 bg-green-600 mix-blend-multiply rounded-md" aria-hidden="true" />
          </div>
          <div className="relative mx-auto flex flex-col py-12 max-w-7xl px-4 sm:py-12 sm:px-6 lg:px-8">
            <h1 className="title text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">The Casual’s Caddie</h1>
            <p className="contentFont mt-6 text-xl tracking-tight text-indigo-100 text-center">
              Conveniently monitor and optimize your golf performance!
            </p>
          </div>
        </div>
        <Carousel />
        {!auth.loggedIn() ? (<LoginForm />) : (<>
        <h4 className='contentFont text-center mt-16'>You're currently logged in, click below to visit your profile</h4>
        <br/>
        <div className='flex justify-center'>
        <Link
        to={`/Profile`}
        className="mx-2 rounded-md border border-transparent bg-green-700 my-2 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >Profile</Link>
        </div>
        </>) }
      </div>
    </>
  )
}

export default Home
