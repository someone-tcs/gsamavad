import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import ProfilePage from '../pages/Profile'

const Router = () => {
  return (
    <>
        <BrowserRouter>
        
                <Routes>
                    <Route path='/' exact element={<App />} />
                    <Route path='/home' exact element={<Home />} />
                    <Route path='/profile' element={<ProfilePage />} />
                </Routes>

        </BrowserRouter>
    </>
  )
}

export default Router