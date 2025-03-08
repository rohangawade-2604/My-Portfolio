import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ome/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}


