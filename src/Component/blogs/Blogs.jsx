import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleBookmarked}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

//   console.log(blogs);
  return (
    <div className="grid grid-cols-2">
        {
            blogs.map(blog => <Blog handleBookmarked={handleBookmarked} blog={blog}></Blog>)
        }
    </div>
  );
};

export default Blogs;
