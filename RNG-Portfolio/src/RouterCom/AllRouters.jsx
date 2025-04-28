import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../AboutComponent/About'
import { Contact } from '../HeaderPart/Contact' 
import {Home} from '../HomeComponent/Home'
import { Projects } from '../HeaderPart/Projects'

export const AllRouter = () => {
  return (
    <>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}


