import React from 'react';
import { useNavigate } from 'react-router';
import './Nav.css';

function Nav() {
  const navigate = useNavigate()
  return (
    <div className='nav'>
        <h1 className='nav-logo' onClick={()=>navigate('/')}>ANI<span>LOFI</span></h1>
    </div>
  )
}

export default Nav