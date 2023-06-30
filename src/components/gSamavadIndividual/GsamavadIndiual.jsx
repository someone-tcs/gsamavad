import React from 'react'

const GsamavadIndiual = (props) => {
  return (
    <div style={{width: '90%', padding:'14px', background:'#fff', color: 'black', textAlign: 'left',borderRadius: '10px'}} className='f13 boxW'>
        <h2><b>{props.gSamavadName}</b></h2>
        <p>{props.gSamavadDesc}</p>
        <button style={{background: '#ffff00', padding: '7px', border: 'none', borderRadius: '10px'}} className='f13'><b>Join gSamavad</b></button>
    </div>
  )
}

export default GsamavadIndiual