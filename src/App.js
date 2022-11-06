import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/homePage/HomePage';
import AppProvider from './context/AppContext';
import UsersPage from './pages/usersPage/UsersPage';
import MoviesPage from './pages/moviesPage/MoviesPage';
import SelectedMovie from './components/selectedMovie/SelectedMovie';
import SelectedUser from './components/selectedUser/SelectedUser';
import React from 'react';

const router=createBrowserRouter(
  createRoutesFromElements(
      <Route path='' element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/user' element={<UsersPage/>}/>
        <Route path='/user/:userId' element={<SelectedUser/>}/>
        <Route path='/movie' element={<MoviesPage/>}/>
        <Route path='/movie/:movieId' element={<SelectedMovie/>}/>
      </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
