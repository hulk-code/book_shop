import { useState } from "react";
import "./App.css";
import Blogs from "./Component/blogs/Blogs";

import Nabver from "./Component/Nerver/Nabver";

function App() {
  const [bookMarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmarked = (blog) => {
    setBookmarked([...bookMarked, blog]);
  };

  const handleReadingTime = (time ,id ) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    removeBookMarker(id)
    // console.log(time);
    // console.log(id);
  };

  const removeBookMarker=(id)=>{
const removeBookmark=bookMarked.filter((mark)=> mark.id !== id)
  setBookmarked(removeBookmark)
  }
  // console.log(bookMarked);
  return (
    <>
      <Nabver></Nabver>
      <div className="mainContainer flex">
        <div className="blogsContainer w-[70%]">
          <Blogs
            handleBookmarked={handleBookmarked}
            handleReadingTime={handleReadingTime}
          ></Blogs>
        </div>
        <div className="bookContainer text-center bg-amber-200 border border-amber-800 w-[30%]">
          <p className="text-xl m-1 font-bold">Reading Time {readingTime}</p>
          <p className="text-xl m-1 font-bold">Book Marked Count {bookMarked.length}</p>
          {bookMarked.map((marked) => (
            <p className="text-xl m-1 font-bold border border-red-500 bg-amber-100 p-2">{marked.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
