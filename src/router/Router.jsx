import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import ProfilePage from '../pages/Profile'
import Create from '../components/Uploader/Create'
import { db } from '../server/server'
import Samvad from '../pages/Samvad/Samvad'


const Router = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // pulling data
    const unsubscribe = db
      .collection('samavads')
      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((data) => data.data()))
      });
    return unsubscribe;
  }, [data]);


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' exact element={<App />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/create' element={<Create />} />
          {data.map((item) => {
            <Route path={`/samavad/${item.title}/`} element={<Samvad data={item} />} />
          })}
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default Router
