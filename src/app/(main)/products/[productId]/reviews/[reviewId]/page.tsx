import Link from "next/link";
import React from "react";

const Review = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Details of Review - {params.reviewId} from product {params.productId}
      </h1>
      <Link className="text-blue-500 font-bold mr-4" href="/products">
        Products Page
      </Link>
    </div>
  );
};

export default Review;
