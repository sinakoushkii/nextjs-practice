import Link from "next/link";
import React from "react";
import Reviews from "./reviews/page";
import { Metadata } from "next";

export function generateMetadata({params}:{params:{productId:string}}): Metadata {
  return {
    title:`Product ${params.productId} Detail Page Of E-commerce App`,
    description: `This is the detail page of product ${params.productId} `,
  }
}



const Product = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Detail of product - {params.productId}</h1>

      <hr />
      <h1 className="text-3xl font-bold">Reviews of product - {params.productId}</h1>
      <Reviews productId={params.productId}/>

      <hr />

      <Link className="text-blue-500 font-bold mr-4" href="/products">
        Products Page
      </Link>
    </div>
  );
};

export default Product;
