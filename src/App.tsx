import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { S } from './components/pages/_styles';
import { PATH } from './routes/routes';
import styles from './components/Site.module.css'

function App() {
  const navigate = useNavigate()
  const navigateHandler = () => navigate(-1)

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
          <div className={styles.HorizontalNavigation}>
            <Link to={PATH.ADIDAS} className={styles.LinkLikeButton}>НА ГЛАВНУЮ</Link>
            <button onClick={navigateHandler} className={styles.ButtonLikeLink}>НАЗАД</button>
          </div>
          <Outlet />
        </S.Content>
      </S.Body>
      <S.Footer>abibas 2023</S.Footer>
    </div>
  );
}

export default App;

