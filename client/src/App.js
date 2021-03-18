import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import axios from "axios";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {Row, Col, Card, Container, Button} from 'react-bootstrap'
import mockUserData from './lib/mockUserData'
import Post from "./components/Post";

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
          <Header />
          <Container>
              <Row>
                  <Col md={3}>
                      <Sidebar userData={mockUserData[0]}/>
                  </Col>

                  <Col md={9}>
                      <Row>
                          {
                              mockUserData[0].posts.map(post => (
                                  <Post post={post} username={mockUserData[0].username}/>
                              ))
                          }

                      </Row>

                  </Col>
              </Row>
          </Container>


        {/*{isAuth ? "You are signed in" : "not signed in pls sign in"}*/}
        {/*{!isAuth &&*/}
        {/*<>*/}
        {/*  <button onClick={() => register("email", "password")}>Register</button>*/}
        {/*  <button onClick={() => login("test", "test")}>Login</button>*/}
        {/*</>}*/}
        {/*{isAuth &&*/}
        {/*<button onClick={logout}>Logout</button>}*/}
      </div>
  );
}
export default App;