import Link from "next/link";
import React from "react";

const OptionalCatchAllRoutes = ({
  params,
}: {
  params: { slug?: string[] };
}) => {
  return (
    <div>
      {params.slug && (
        <ul>
          {params.slug.map((segment, index) => (
            <li key={segment}>
             {segment}
            </li>
          ))}
        </ul>
      )}

      {!params.slug && (
        <h1 className="text-red-500 font-bold">No additional segment is provided .</h1>
      )}
    </div>
  );
};

export default OptionalCatchAllRoutes;
