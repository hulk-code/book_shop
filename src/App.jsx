import "./App.css";
import Blogs from "./Component/blogs/Blogs";
import Booklist from "./Component/BookList/Booklist";
import Nabver from "./Component/Nerver/Nabver";

function App() {
  return (
    <>
      <Nabver></Nabver>
      <div className="mainContainer flex">
        <div className="blogsContainer w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="bookContainer text-center bg-amber-200 border border-amber-800 w-[30%]">
          <Booklist></Booklist>
        </div>
      </div>
    </>
  );
}

export default App;
