"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-col gap-1.5 justify-center items-center">
      <h1>Page Is Not Available</h1>
      <p>Sorry, the page <span className="text-red-600 font-bold">{pathName}</span> you're looking for is not available</p>
      <Link href="/" className="px-3 py-2 bg-blue-700 text-white rounded-md">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
