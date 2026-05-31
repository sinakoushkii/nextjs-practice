import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div>
      <ul>
        {[1, 2, 3, 4].map((productId) => {
          return (
            <li key={productId}>
              <Link
                className="text-blue-500 font-bold mr-4"
                href={`/products/${productId}`}
              >
                Product - {productId}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
