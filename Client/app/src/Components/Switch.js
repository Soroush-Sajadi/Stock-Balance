import React from 'react';
import { useDispatch } from 'react-redux';
import '../Style/Switch.css'

const Switch = () => {
  const dispatch = useDispatch();
  return(
    <div>
      <label className="switch">
        <input type="checkbox" onChange={e =>dispatch({type:"SWITCH", payload:e.target.checked})}  />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default Switch;