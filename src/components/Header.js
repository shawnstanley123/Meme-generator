import React from 'react'
import './Header.css'
export default function Header(){
  return (
    <div className="header">
      <img src="/images/troll-face.png" alt="" className="header--image"/>
      <h1 className="header--title">Header Component</h1>
      <h4 className="header--project">React Course-Project 3</h4>
    </div>
  )
}
