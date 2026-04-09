import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



export const ListStocks = () => {
    const [stocks, setStocks] = useState([]);
    


    function getStocks() {
        axios.get('http://localhost/api/api.php')
        .then(response => {
            console.log(response.data);
            setStocks(response.data);
        }).catch((err) => {
            console.log(err)    
        })
    }

    useEffect(() => {
        getStocks();
    }, []);

  return (
    <div className='maincontent'>
        <div className='liststock'>
          <h1>Stocks List</h1>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Product</th>
                      <th>SKU</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    stocks.map((stock) => (
                      <tr key={stock.id}>
                        <td>{stock.id}</td>
                        <td>{stock.product}</td>
                        <td>{stock.sku}</td>
                        <td>{stock.category}</td>
                        <td>{stock.price}</td>
                        <td>{stock.stock}</td>
                        <td>{stock.status}</td>
                      </tr>
                    ))
                  }
              </tbody>
          </table>
      </div>
      </div>

  )

    }

export default ListStocks
