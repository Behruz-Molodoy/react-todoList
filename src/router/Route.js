import MainPage from "../mainPage/MainPage";
import Error from "../mainPage/ErrorPage/Error";
import Game from "../navigationPage/Game/Game";
import Login from "../navigationPage/Login/Login";


export const privateRoutes = [
  {path: '/game' , element: Game},
  {path: '/posts' , element: MainPage},
  {path: '/' , element: MainPage},
  {path: '/*' , element: Error},
]
export const publicRoutes = [
  {path: '/' , element: Login},
  {path: '/*' , element: Error},
]