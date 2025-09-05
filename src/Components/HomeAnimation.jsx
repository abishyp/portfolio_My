import React from 'react'
import Lottie from "lottie-react";
import animation from '../Assets/home_design.json'

const HomeAnimation = () => {
  return (
    <>
     <div style={{ width: 550, height: 500 }}>
      <Lottie animationData={animation} loop={true} />
    </div>
    </>
  )
}

export default HomeAnimation