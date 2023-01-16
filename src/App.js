import React, {createContext, useState} from 'react'
import { v4 as uuid} from 'uuid'
import SignIn from './components/registration/SignIn'
import SignUp from './components/registration/SignUp'
import Home from './components/Home'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'

export let UserInfo = createContext([
  {
  nickname: '',
  name: '',
  surname: '',
  password: null,
  loggedIn: false,
  id: uuid(),
  posts: [''],
  favorite: [''],
}
]) 

export default function App() {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let user = useSelector(function(store) {
    return store.map((item => {return item}))
  })
  let [oneUser, setOneUser] = useState({})
  const signIn = (nickname, password) => {
    dispatch({
      type: 'user-signIn',
      payload: {
        nickname: nickname,
        password: password
      }
    });
    setOneUser(user.find((item => {return item.nickname == nickname })))
    if(localStorage.length) {
      navigate('/', {state: 'logged', replace: true})
    }
  } 

  const signUp = (newNickname, newUserName, newSurname, newUserPassword) => {
    dispatch({
      type: 'user-signUp',
      payload: { 
          nickname: newNickname,
          name: newUserName,
          surname: newSurname,
          password: newUserPassword
        } 
    })
    navigate('/signin')
  }
  const logout = () => {
   return localStorage.removeItem('userLoggedIn'),
    window.location.reload()
  }

  return (
    <div>
        <Routes>
            <Route path='/*' element={
              <UserInfo.Provider value={{oneUser: oneUser, user: user, logout: logout}}>
                 <Home />  
              </UserInfo.Provider>} > 
                Home
            </Route>
          <Route path='signin'  element={<SignIn signIn={signIn} />}>  Sign In</Route> 
          <Route path='signup' element={<SignUp username={user} signUp={signUp} /> }> Sign Up</Route>
        </Routes>
    </div>
  )
} 
