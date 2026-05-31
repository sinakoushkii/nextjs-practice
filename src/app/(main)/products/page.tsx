import { Metadata } from "next";
import Link from "next/link";
import React from "react";


export const metadata:Metadata = {
  title: "Products Page Of E-commerce App",
  description: "This is the list of products page for our e-commerce app built with Next.js 15 and React",
}

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
