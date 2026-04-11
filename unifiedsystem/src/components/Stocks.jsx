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
      <h1>Stocks</h1>

      <form className="addstock" onSubmit={handleSubmit}>

        <label>Product</label>
        <input type="text" name="product" onChange={handleChange}/>

        <label>SKU</label>
        <input type="text" name="sku" onChange={handleChange} />

        <label>Category</label>
        <input type="text" name="category" onChange={handleChange} />

        <label>Price</label>
        <input type="text" name="price" onChange={handleChange} />

        <label>Stock</label>
        <input type="text" name="stock" onChange={handleChange} />

        <label>Status</label>
        <input type="text" name="status" onChange={handleChange} />

        <button type="save">Save</button>


      </form>
    </div>
  )
}


export default Stocks
