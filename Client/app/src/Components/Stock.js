import React, { useEffect } from 'react';
import StockInfo from './StockInfo'
import { useSelector, useDispatch } from 'react-redux';


const Stock = () => {
  const product = useSelector((state => state.inputs));
  const dispatch = useDispatch();

  const modifyStock = (status, code) => {
    fetch(`http://localhost:5000/stockb/${status}/${code}`)
      .then(res => res.json())
      .then(res => dispatch({type:'STOCK', payload: res}))
  }

  useEffect(() => {
    if (product.status !== '' && product.code !== '') {
      modifyStock(product.status, product.code);
    }
  },[product])
  return(
    <div>
      <StockInfo />
    </div>
  )
}

export default Stock;