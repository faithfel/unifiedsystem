import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



export const ListStocks = () => {

    function getStocks() {
        axios.get('http://localhost/api/api.php')
        .then(response => {
            console.log(response.data);
            setStocks(Array.isArray(response.data.stocks) ? response.data.data : []);
        }).catch((err) => {
            console.log(err)    
        })
    }


    const [stocks, setStocks] = useState([]);


    useEffect(() => {
        getStocks();
    }, []);

  return (
    <div className='maincontent'>
        <div className='liststock'>
          <h1 className="pagetitle">Stocks List</h1>

            <a href="/stocks" ><button className='addstockinlist'>Add Stock</button></a>

          <table className='stocktable'>
              <thead>
                  <tr>
                      <th className='tablelabel'>ID</th>
                      <th className='tablelabel'>Product</th>
                      <th className='tablelabel'>SKU</th>
                      <th className='tablelabel'>Category</th>
                      <th className='tablelabel'>Price</th>
                      <th className='tablelabel'>Stock</th>
                      <th className='tablelabel'>Status</th>
                  </tr>
              </thead>
                <tbody>
                    {stocks && stocks.map((stock) => (
                        <tr key={stock.id}>
                            <td className='tabledata'>{stock.id}</td> 
                            <td className='tabledata'>{stock.product}</td>
                            <td className='tabledata'>{stock.sku}</td>
                            <td className='tabledata'>{stock.category}</td>
                            <td className='tabledata'>{stock.price}</td>
                            <td className='tabledata'>{stock.stock}</td>
                            <td className='tabledata'>{stock.status}</td>  
                       </tr>
                    ))}
              </tbody>
          </table>
      </div>

      </div>

  )

}

export default ListStocks
