import React from 'react';
import { Header } from './components';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './constants';
import { MainPage, ToysPage, TreePage } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage />} />
        <Route path={AppRoutes.TOYS} element={<ToysPage />} />
        <Route path={AppRoutes.TREE} element={<TreePage />} />
      </Routes>
    </>
  );
}

export default App;
