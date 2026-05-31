import formatDate from "@/app/_utils/formatDate";
import React from "react";

const BlogContent = ({ blogId }: { blogId: string }) => {
    const date:string="2026-01-15"
    return (
    <div>
        <p className="mb-1 text-gray-600">Published on :{formatDate(date)}</p>
      <h1 className="text-2xl text-green-900 font-bold">
        Detail of blog number - {blogId}
      </h1>
      <br /><br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,<br />
        accusantium officia. Accusamus quas minima atque, tenetur quasi laborum<br />
        adipisci aperiam nesciunt illum, sint fugit deserunt hic laboriosam<br />
        consequuntur quo animi rem error. Voluptas consequuntur reprehenderit<br />
        cupiditate eum aut, enim eveniet?
      </p>
    </div>
  );
};

export default BlogContent;
