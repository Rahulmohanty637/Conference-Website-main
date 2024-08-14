import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const CallForTutorials = () => {
    const TutorialsData=[
        {
            id:1,    
        }
    ]

  return (
    <div className='"bg-white text-black overflow-x-hidden'>
    <Navbar/>
    <div className="container my-16 heading space-y-4">
        <div className="text-center mx-auto space-y-2">
          <h1 className="text-2xl font-bold text-dark">Call for Tutorials</h1>

    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default CallForTutorials
