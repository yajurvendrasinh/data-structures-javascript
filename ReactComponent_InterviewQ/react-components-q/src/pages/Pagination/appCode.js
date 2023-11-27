import "./styles.css";
import { useEffect, useState } from "react";
import Posts from "./Posts";
import Paginate from "./Paginate";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [postPerPage, setPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  // Get posts per currentPage
  let indexOfLastPostOfPage = currentPage * postPerPage; // Page 1 - LastPost = 10, Page 2 - LastPost = 20...
  let indexOfFirstPostOfPage = indexOfLastPostOfPage - postPerPage;
  let currentPost = posts.slice(indexOfFirstPostOfPage, indexOfLastPostOfPage);

  // Get Page number
  paginate = (number) => setCurrentPage(number);

  // Add next & prev funcationality
  const next = () => setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="App">
      <Posts posts={currentPost} />
      <Pagination
        totalPages={posts.length}
        postPerPage={postPerPage}
        paginate={paginate}
        currentPage={currentPage}
        next={next}
        prev={prev}
      />
    </div>
  );
}
