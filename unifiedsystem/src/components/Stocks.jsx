import React from 'react'

export const Stocks = () => {
  return (
    <div className='maincontent'>
      <h1>Stocks</h1>

      <form>

        <label>Product</label>
        <input type="text" name="product" />

        <label>SKU</label>
        <input type="text" name="sku" />

        <label>Category</label>
        <input type="text" name="category" />

        <label>Price</label>
        <input type="text" name="price" />

        <label>Stock</label>
        <input type="text" name="stock" />

        <label>Status</label>
        <input type="text" name="status" />

        <button type="save">Save</button>


      </form>
    </div>
  )
}

export default Stocks