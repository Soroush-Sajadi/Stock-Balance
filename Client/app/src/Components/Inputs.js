import React, { useReducer } from 'react';
import Stock from './Stock';
import Switch from './Switch'
import { useDispatch } from 'react-redux';
import '../Style/Inputs.css';

const Inputs = () => {
  const [ product, setProduct ] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
    status:'',
    code: '',
    }
  );
  const dispatch = useDispatch();

  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setProduct({[name]: newValue});
}

const submitProduct = () => {
  if (product.status !== '' && product.code !== '') {
    dispatch({type:"INPUTS", payload: product})
    setProduct({["status"]: '', ["code"]: ''})
  }
}
  return(
    <div className="inputs-wrapper">
      <Switch />
      <div className="inputs">
        <input type="text" name="status" value={product.status} placeholder="Status" onChange={ handleChange } />
        <input type="text" name="code" value={product.code} placeholder="Product code" onChange={ handleChange } />
      </div>
      <div className="button">
        <input type="submit" value="Submit" onClick={submitProduct}/>
      </div>
       <Stock />
       
    </div>
  )
}

export default Inputs;