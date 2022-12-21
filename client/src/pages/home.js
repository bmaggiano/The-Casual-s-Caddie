import React from 'react'
import LoginForm from '../components/loginForm'
import '../App.css'
import grass from '../images/grass.jpg'
import Carousel from '../components/carousel'

function Home() {


  return (
    <>
      <div className=' bg-neutral-50'>
        <div className="mainHome relative bg-black-800 mx-4 mt-4 rounded-md">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover rounded-md"
              src={grass}
              alt="picture of well maintained golf grass"
            />
            <div className="absolute inset-0 bg-green-600 mix-blend-multiply rounded-md" aria-hidden="true" />
          </div>
          <div className="relative mx-auto max-w-7xl py-12 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="title text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">The Casual’s Caddie</h1>
            <p className="mt-6 max-w-3xl text-xl text-indigo-100 text-center">
              Conveniently monitor and optimize your golf performance!
            </p>
          </div>
        </div>
        <Carousel />
        <LoginForm />
      </div>

    </>
  )
}

export default Home
