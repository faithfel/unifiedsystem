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
          <h1 className="stocktitle">Stocks List</h1>
          <table className='stocktable'>
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
                {stock?.map((item, key) => 
                    <tr key={key}>
                        <td>{item.id}</td>
                        <td>{item.product}</td>
                        <td>{item.sku}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td>{item.status}</td>
                        <td>
                            <Link to={`stock/${item.id}/edit`}><button>Edit</button></Link>    
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
