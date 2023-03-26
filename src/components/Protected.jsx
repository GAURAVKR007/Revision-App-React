import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Protected(props) {
    const {Component} = props
    const navigate = useNavigate();
    React.useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login) {
            navigate('/')
        }
    })
  return (
    <Component />
  )
}

export default Protected