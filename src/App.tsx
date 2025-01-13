import React from 'react';
import {Adidas} from './components/pages/Adidas';
import {Puma} from './components/pages/Puma';
import {Abibas} from './components/pages/Abibas';
import {Navigate, NavLink, Outlet, Route, Routes} from 'react-router-dom';
import {Error404} from './components/pages/Error404';
import {S} from './components/pages/_styles'
import {Model} from './components/pages/Model';
import {Prices} from './components/pages/Prices';

const PATH = {
  PAGE1: '/adidas',
  PAGE2: '/puma',
  PAGE3: '/abibas',
  PRICES: '/prices',
  ERROR: 'page/error',
  MODEL: '/:maker/:id',
} as const;

function App() {
  return (
    <div>
      <S.Header><h1>HEADER</h1></S.Header>
      <S.Body>
        <S.Nav>
          <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PRICES}>Prices</NavLink></S.NavWrapper>
        </S.Nav>
        <S.Content>
          <Outlet/>
{/*          <Routes>
            <Route element={<Navigate to={PATH.PAGE1}/>} path="/"/>
            <Route element={<Adidas/>} path={PATH.PAGE1}/>
            <Route element={<Puma/>} path={PATH.PAGE2}/>
            <Route element={<Abibas/>} path={PATH.PAGE3}/>
            <Route element={<Model/>} path={PATH.MODEL}/>
            <Route element={<Error404/>} path={'/*'}/>
            <Route element={<Prices/>} path={PATH.PRICES}/>

            <Route element={<Error404/>} path={PATH.ERROR}/>
            <Route element={<Navigate to={PATH.ERROR}/>} path="/*"/>
          </Routes>*/}
        </S.Content>
      </S.Body>
      <S.Footer>abibas 2023</S.Footer>
    </div>
  );
}

export default App;

