import React, { useEffect } from 'react';
import StockInfo from './StockInfo'
import { useSelector, useDispatch } from 'react-redux';


const Stock = () => {
  const product = useSelector((state => state.inputs));
  const switcher = useSelector((state => state.switchReducer));
  const dispatch = useDispatch();

  const modifyStock = (status, code, boolean) => {
    fetch(`http://localhost:5000/stock/a/${status}/${code}/${boolean}`)
      .then(res => res.json())
      .then(res => dispatch({type:'STOCK', payload: res}))
  }

  useEffect(() => {
    if (product.status !== '' && product.code !== '') {
      modifyStock(product.status, product.code, switcher);
    }
  },[product])
  return(
    <div>
      <StockInfo />
    </div>
  )
}

export default Stock;