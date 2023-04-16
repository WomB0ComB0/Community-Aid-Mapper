import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route} from 'react-router-dom'
import App from './App'
import Sidebar from './sidebar/SideBar';
import './assets/Styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<Sidebar/>}/>
    </Routes>
  </React.StrictMode>,
)