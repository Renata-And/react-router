import { NavLink, Outlet } from 'react-router-dom';
import { S } from './components/pages/_styles';
import { PATH } from './routes/routes';

function App() {
  return (
    <div>
      <S.Header><h1>HEADER</h1></S.Header>
      <S.Body>
        <S.Nav>
          <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PRICES}>Prices</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PROTECTED}>Protected page</NavLink></S.NavWrapper>
        </S.Nav>
        <S.Content>
          <Outlet />
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

