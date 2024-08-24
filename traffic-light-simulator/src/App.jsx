import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/noPage';
import Layout from "./pages/layout";
import Home from "./pages/landingPage";
import Exercises from './pages/exercises';
import TrafficLight from './pages/trafficLight';
import Contact from './pages/contact';
import MyMoviesPage from './pages/myMoviesPage';
import MovieView from './pages/movieView';

export default function App() {

  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='exercises' element={<Exercises />} />
          <Route path='traffic' element={<TrafficLight />} />
          <Route path='contact' element={<Contact />} />
          <Route path='movies'  >
          <Route index element={<MyMoviesPage />} />
          <Route path=':id' element={<MovieView />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

