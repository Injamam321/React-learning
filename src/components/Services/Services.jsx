import React from 'react'
import './Services.css'

const Services = () => {
    function update(){
        const serviceCompo = document.getElementById('service-compo');
        serviceCompo.innerText = 'Hello this is imjamam from would be software engineer';
    }

  return (
    <div>
        <h1 id='service-compo'>This is imjamam software engineer</h1>
        <button onClick={update} className='click-btn'>Click me</button>
    </div>
  )
}

export default Services;
