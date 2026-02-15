import React from "react";
import { LuBookMarked } from "react-icons/lu";

const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            {blog.title}
            <figure>
              <img src={blog.author_img} alt="Shoes" className="w-15" />
            </figure>

           
            <div className=""> <LuBookMarked size={30} /></div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-soft btn-primary">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
