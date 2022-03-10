import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context'

export default function Navbar() {
  const {isAuth , setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(true)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to='/posts'>
          <i className='bx bx-home-alt-2 mx-1'></i>
          <strong>Behruz</strong>
        </Link>
        <ul className='d-flex justify-content-center align-items-center m-0 py-2 list-unstyled'>
          <li><Link to='/posts' className='text-decoration-none nav-link fw-bold text-white btn btn-outline-danger'>Posts</Link></li>
          <li><Link to='/game' className='mx-4 text-decoration-none nav-link fw-bold text-white btn btn-outline-danger'>Game</Link></li>
          <li><Link to='/'><button className="btn btn-info" onClick={() => logout()}>LogOut</button></Link></li>
        </ul>
      </div>
    </div>
  )
}
