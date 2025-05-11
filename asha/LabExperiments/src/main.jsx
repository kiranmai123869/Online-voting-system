import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExTwo from './components/ExTwo.jsx'
import Parent from './components/Ex3/Parent.jsx'
import Content from './components/Ex4/Content.jsx'
import NavReducer from './components/Ex4/Reducer/NavReducer.jsx'
import { createStore } from 'redux'

import Ex6 from './components/Ex6/Users.jsx'
import Weather from './components/EX6/Weather.jsx'
import All from './components/All.jsx'
import Application from './components/Ex9/Application.jsx'


const store = createStore(NavReducer)

const customer = () => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ExTwo/>} />
          <Route path='/ex3' element={<Parent/>} />
          <Route path='/q' element={<Content store={store}/>} />
          <Route path='/6' element={<Ex6 store={store}/>} />
          <Route path='/w' element={<Weather/>} />
          <Route path='/r' element={<All/>}/>
          <Route path='/a' element={<Application/>}/>
        
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

customer()
store.subscribe(customer)