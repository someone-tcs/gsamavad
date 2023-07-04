import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import ProfilePage from '../pages/Profile'
import Create from '../pages/Create'

const Router = () => {
  return (
    <>
        <BrowserRouter>
        
                <Routes>
                    <Route path='/' exact element={<App />} />
                    <Route path='/home' exact element={<Home />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/create' element={<Create />} />
                </Routes>

        </BrowserRouter>
    </>
  )
}

export default Router