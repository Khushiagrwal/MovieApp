import React from 'react'
import { useNavigate } from 'react-router-dom'

function Upgrade()
{
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/upgradeplans')
    }
    return (
    <>
        <h1>Upgrade to SyncSketch</h1>
        <button onClick={handleClick}>Upgrade</button>
    </>
  )
}

export default Upgrade