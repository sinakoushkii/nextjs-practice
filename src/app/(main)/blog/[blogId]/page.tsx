import { notFound } from "next/navigation";
import React from "react";
import BlogContent from "./BlogContent";

const Blog = ({ params }: { params: { blogId: string } }) => {
  if (+params.blogId > 100) {
    notFound();
  }

  return (
    <div>
     <BlogContent blogId={params.blogId} />
    </div>
  );
};

export default Blog;
