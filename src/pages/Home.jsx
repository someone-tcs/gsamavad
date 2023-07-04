import React, { useEffect, useState } from 'react'
import { auth } from '../server/server'
import GsamavadIndiual from '../components/gSamavadIndividual/GsamavadIndiual'
import Uploader from '../components/Uploader/Uploader'

const Home = () => {
  const [response, setResponse] = useState()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user.photoURL) {
        user.updateProfile({
          photoURL: 'https://api.dicebear.com/6.x/notionists-neutral/svg'
        })
      }
      setResponse(user.displayName)
    })

  }, [response])
  return (
    <>
      <center>
        <h1 className="f13"><b>Jay Swaminarayan 🙏!</b></h1>
        <br />
        <Uploader />
        <br />
        <GsamavadIndiual gSamavadName="Rajugouda" gSamavadDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
        <br />
        <GsamavadIndiual gSamavadName="Rajugouda" gSamavadDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
        <br />
      </center>
    </>
  )
}

export default Home