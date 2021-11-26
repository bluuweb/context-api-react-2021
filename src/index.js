import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './routes/Home';
import Blog from './routes/Blog';
import Post from './routes/Post';
import Contact from './routes/Contact';
import NoEncontrada from './routes/NoEncontrada';

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<Post />}/>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoEncontrada />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
