import React from 'react'
import Hero from '../../components/Hero/Hero'
import Remedies from '../../components/Remedies/Remedies'
import Seeds from '../../components/Seeds/Seeds'
import Tour from '../../components/Tour/Tour'

function HomePage() {
  return (
    <div>
        <Hero/>
        <Tour/>
        <Remedies/>
        <Seeds/>
        
    </div>
  )
}

export default HomePage