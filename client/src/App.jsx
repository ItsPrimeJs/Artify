import React from 'react'
import { BrowserRouter ,Link ,Route ,Router, Routes } from 'react-router-dom'
import { Home ,CreatePost } from './pages'
import { logo } from './assets'

const App = () => {
  return (
    <BrowserRouter>
        <header className='w-full justify-between flex items-center bg-white sm:px-8 px-4 py-4 border-b  border-b-[#e6ebf4]'>
      <Link to="/">
      <img src={logo} alt="logo" className="object-contain w-28" />
      </Link>

      <Link to="/create-post" className='font-inter font-medium  bg-[#6469ff] text-white px-4 py-2 rounded-md'>
        Create
      </Link>


        </header>
      <main className=' sm:px-8 px-4 py-8 w-full bg-[#fbf0f0] min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create-post' element={<CreatePost/>} />
          </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
