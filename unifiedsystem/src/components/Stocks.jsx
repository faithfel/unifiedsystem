import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Stocks = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 

    axios.post('http://localhost/api/api.php', inputs).then(function(response){
      console.log(response.data);
      navigate('/liststocks');
    });
  }
  const handleCancel = (event) => {
    event.preventDefault(); 
    navigate('/liststocks');
  }

  return (
    <div className='maincontent'>
      
    
    <div className='addstock'>
      <a href="/liststocks" ><button className='backbutton'>X</button></a>
      
      <form onSubmit={handleSubmit}>
        
        <div className='addstockrow'>
          <label className='addstocklabel' >Product:</label>
          <input type="text" name="product" onChange={handleChange} placeholder="product name"/>
        </div>

        <div className='addstockrow'>
          <label className='addstocklabel'>SKU:</label>
          <input type="text" name="sku" onChange={handleChange} placeholder="sku"/>
        </div>

        <div className='addstockrow'>
          <label className='addstocklabel'>Category:</label>
          <input type="text" name="category" onChange={handleChange} placeholder="item label"/> 
        </div>

        <div className='addstockrow'>
          <label className='addstocklabel'>Price:</label>
          <input type="text" name="price" onChange={handleChange} placeholder="set price"/>
        </div>
        <div className='addstockrow'>
          <label className='addstocklabel'>Stock:</label>
          <input type="text" name="stock" onChange={handleChange} placeholder="stock count"/>
        </div>

        <div className='addstockrow'>
          <label className='addstocklabel' >Status:</label> <br />
          <select className="dropdown" onChange={handleChange} name="status">
              <optgroup label="Select Status">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </optgroup>
          </select>
        </div>

        <div className='addbuttonrow'>
          <button className='addstockbutton' type="save" onClick={handleCancel}>Cancel</button>
          <button className='addstockbutton' type="save">Save</button>
        </div>
        
        

      </form>
      </div>
    </div>
  )
}


export default Stocks
