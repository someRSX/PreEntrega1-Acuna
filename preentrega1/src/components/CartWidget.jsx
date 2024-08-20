import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={24} />
      <span className="badge bg-primary text-white ml-2"> 5 </span> {}
    </div>
  );
};

export default CartWidget;