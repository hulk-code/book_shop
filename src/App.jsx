import { useState } from "react";
import "./App.css";
import Blogs from "./Component/blogs/Blogs";
import Booklist from "./Component/BookList/Booklist";
import Nabver from "./Component/Nerver/Nabver";

function App() {
  const [bookMarked, setBookmarked] = useState([]);
  const handleBookmarked = (blog) => {
    setBookmarked([...bookMarked, blog]);
  };
  // console.log(bookMarked);
  return (
    <>
      <Nabver></Nabver>
      <div className="mainContainer flex">
        <div className="blogsContainer w-[70%]">
          <Blogs handleBookmarked={handleBookmarked}></Blogs>
        </div>
        <div className="bookContainer text-center bg-amber-200 border border-amber-800 w-[30%]">
          <p>Reading Time
             </p>
          {bookMarked.map((marked)=> <p>{marked.title}</p> )}
        </div>
      </div>
    </>
  );
}

export default App;
