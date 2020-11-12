import React from 'react';
import { useSelector } from 'react-redux';
import Car from '../Images/car.jpg';
import '../Style/StockInfo.css'

const StockInfo = () => {
  const stock = useSelector((state => state.stock));
  return(
    <div>
      {stock.length !== 0 ?
        <div className="stock-info-wrapper">
          {stock.map((item, i) =>
        <div key={i} >
          {item.message ? <p>{item.message}</p>:
          <div className="stock-cards">
            <div className ="card-image">
              <img src={Car} alt="image" />
            </div>
            <div className="card-info">
              <p className="info-title">{item.product}</p>
              <p>Code: {item.code}</p>
              <p>Sold: {item.sold}</p>
              <p>delivred: {item.delivred}</p>
            </div>
            
          </div>
        }
        </div>
        )}
        </div>
      :null}
    </div>
  )
}

export default StockInfo;