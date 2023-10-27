import React, { useState } from 'react';

export default function Form({ onItemAdded }) {
  const [newItem, setNewItem] = useState('');
  function handleItemAdded(event) {
    event.preventDefault();
    console.log(newItem)
    onItemAdded(newItem);
    
    setNewItem('');
  }
  return (
    <form onSubmit={handleItemAdded}>
      <h3>Shopping cart</h3>
      <div className="mb-3">
        <label>Item</label>
        <input
          type="text"
          className="form-control"
          placeholder="item"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}
