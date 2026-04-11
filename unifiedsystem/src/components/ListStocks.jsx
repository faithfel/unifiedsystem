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
