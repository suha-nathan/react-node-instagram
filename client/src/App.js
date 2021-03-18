import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'
import axios from "axios";


function App() {
  const [isAuth, setAuth] = React.useState(false)

  useEffect(()=> {
    loadUser()
  },[])

  function register(email, password){
    axios.post("http://localhost:4000/api/register")
        .then(res => {
          console.log(res.data.user.apiKey)
          setAuth(true)
          localStorage.setItem("apiKey", res.data.user.apiKey)
        }).catch(er => {
      console.log(er.data)
    })
  }

  function login(email, password){
    axios.post("http://localhost:4000/api/signin", {email, password})
        .then(res => {
          console.log(res.data.user.apiKey)
          setAuth(true)
          localStorage.setItem("apiKey", res.data.user.apiKey)
        }).catch(er => {
      console.log(er.data)
    })
  }
  function logout(){
    setAuth(false)
    localStorage.removeItem("apiKey")
  }
  function loadUser(){
    let key = localStorage.getItem("apiKey")
    // localStorage.apiKey
    axios.get(`http://localhost:4000/api?apiKey=${key}`)
        .then(res => {
          console.log(res.data)
          setAuth(true)
        }).catch(er => {
      console.log(er.data)
    })
  }
  return (
      <div className="App">
        {isAuth ? "You are signed in" : "not signed in pls sign in"}
        {!isAuth &&
        <>
          <button onClick={() => register("email", "password")}>Register</button>
          <button onClick={() => login("test", "test")}>Login</button>
        </>}
        {isAuth &&
        <button onClick={logout}>Logout</button>}
      </div>
  );
}
export default App;