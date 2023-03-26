import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Protected(props) {
    const {Component} = props
    console.log('worked');
    const navigate = useNavigate();
    React.useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login) {
            console.log('worked');
            navigate('/')
        }
    },[])

    
  return (<>
    <Component />
    </>
    )
}

export default Protected