import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles/global.css'

import App from './App'
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Search from './pages/Search';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home/>} />
          <Route path='movie/:id' element={<MovieDetail id={0} title={''} overview={''} poster_path={''} release_date={''}/>}/>
          <Route path='search' element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
