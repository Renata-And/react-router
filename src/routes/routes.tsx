import { createBrowserRouter, Navigate, Outlet, RouteObject } from "react-router-dom";
import App from '../App';
import { Abibas } from '../components/pages/Abibas';
import { Adidas } from '../components/pages/Adidas';
import { Error404 } from '../components/pages/Error404';
import { Login } from "../components/pages/Login";
import { Model } from '../components/pages/Model';
import { Prices } from '../components/pages/Prices';
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { Puma } from '../components/pages/Puma';

export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  PRICES: '/prices',
  ERROR: 'error',
  MODEL: '/:maker/:id',
  PROTECTED: '/protected',
  LOGIN: '/login'
} as const;

const publicRoutes: RouteObject[] = [
  {
    path: PATH.ADIDAS,
    element: <Adidas />
  },
  {
    path: PATH.PUMA,
    element: <Puma />
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas />
  },
  {
    path: PATH.PRICES,
    element: <Prices />
  },
  {
    path: PATH.MODEL,
    element: <Model />
  },
  {
    path: PATH.ERROR,
    element: <Error404 />
  },
  {
    path: PATH.LOGIN,
    element: <Login />
  }
]

const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTED,
    element: <ProtectedPage />
  },
]

export const PriveteRoutes = () => {
  const isAuth = false
  return isAuth ? <Outlet /> : <Navigate to={'/login'} />
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR} />,
    children: [
      {
        path: '/',
        element: <Navigate to={PATH.ADIDAS} />
      },
      {
        element: <PriveteRoutes />,
        children: privateRoutes
      },
      ...publicRoutes,
    ],
  },
]);