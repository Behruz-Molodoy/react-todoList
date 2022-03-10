import React, { useContext } from 'react'
import MyInput from '../../components/UI/MyInput'
import { AuthContext } from '../../context'
import './Login.css'

export default function Login() {
  const {isAuth , setIsAuth} = useContext(AuthContext)
  const login = (e) =>{
    setIsAuth(false)
    localStorage.setItem('auth' , 'true')
    e.preventDefault()
  }

  return (
    <div className='w-100 vh-100 Login'>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12 login-title">
              ADMIN PANEL
            </div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form onSubmit={login}>
                  <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <MyInput required type="text" className="form-control text-input"  placeholder='enter your username'/>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <MyInput required type="password" className="form-control text-input" placeholder='enter your password' />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text">
                    </div>
                    <div className="col-lg-6 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
