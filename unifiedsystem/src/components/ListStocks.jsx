import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



export const ListStocks = () => {
    const [stock, setStocks] = useState([]);
    


    function getStocks() {
        axios.get('http://localhost/api/api.php')
        .then(response => {
            console.log(response.data);
            setStocks(response.data.stocks); 
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
                    stock?.map((stocks, key) => 
                    <tr key={key}>
                        <td>{stocks.id}</td>
                        <td>{stocks.product}</td>
                        <td>{stocks.sku}</td>
                        <td>{stocks.category}</td>
                        <td>{stocks.price}</td>
                        <td>{stocks.stock}</td>
                        <td>{stocks.status}</td>
                        <td>
                            <Link to={`stock/${stocks.id}/edit`}><button>Edit</button></Link>    
                            <button>Delete</button>
                        </td>
                    </tr>
                    )}
              </tbody>
          </table>
      </div>
      </div>

  )

    }

export default ListStocks
