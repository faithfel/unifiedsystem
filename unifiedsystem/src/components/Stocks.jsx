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

  return (
    <div className='maincontent'>
      
    
    <div className='addstock'>
      <form onSubmit={handleSubmit}>

        <label className='addstocklabel'>Product:</label><br></br>
        <input type="text" name="product" onChange={handleChange} placeholder="product name"/><br></br>

        <label className='addstocklabel'>SKU:</label><br></br>
        <input type="text" name="sku" onChange={handleChange} placeholder="sku"/><br></br>

        <label className='addstocklabel'>Category:</label><br></br>
        <input type="text" name="category" onChange={handleChange} placeholder="item label"/><br></br>

        <label className='addstocklabel'>Price:</label><br></br>
        <input type="text" name="price" onChange={handleChange} placeholder="set price"/><br></br>

        <label className='addstocklabel'>Stock:</label><br></br>
        <input type="text" name="stock" onChange={handleChange} placeholder="stock count"/><br></br>

        <label className='addstocklabel' >Status:</label><br></br>
        <input type="text" name="status" onChange={handleChange} placeholder="set status"/><br></br>

        <button className='addstockbutton' type="save">Save</button>


      </form>
      </div>
    </div>
  )
}


export default Stocks
