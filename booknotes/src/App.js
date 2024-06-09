import { useEffect,useState } from "react";
import axios from 'axios'
import Book from "./components/Book";
import { Routes, Route,Link } from "react-router-dom";
import SortingBtn from "./components/SortingBtn";
// import SortBooksbyAuthor from "./components/SortBooksbyAuthor";

function App() {
  const [bookData,setBookData] = useState([])
  const [sortByAuthorData, setsortByAuthorData] = useState([])
  const [sortByTitleData,setSortByTitleData] = useState([])
 
  useEffect(()=>{
   async function fetchBook(){
      try {
        const response = await axios.get("http://localhost:3001/")
        setBookData(response.data)
        // console.log(response.data)
      } catch (error) {
        console.error(error)
      }
   }

   async function sortBooksbyAuthor(){
    try {
      const response = await axios.get('http://localhost:3001/api-sortbyauthor')
      setsortByAuthorData(response.data)
      
    } catch (error) {
      console.error(error)
    }
   }
   async function sortBooksbyTitle(){
    try {
      const response = await axios.get('http://localhost:3001/api-sortbytitle')
      setSortByTitleData(response.data)

      
    } catch (error) {
      console.error(error)
    }
   }
   fetchBook()
   sortBooksbyAuthor();
   sortBooksbyTitle();
  },[])

  return (
    
    <div className="p-5 container App">
      <h1 className="text-left fst-italic fw-lighter">BOOK NOTES</h1> <br />
      <h2 className="fw-light fst-italic">BOOKS I'VE READ</h2> <br />
      <div className="container p-3 d-flex justify-content-center align-items-center column-gap-3 ">
      
     <span className="text-white fst-italic fs-4 ">Sort By </span>
      <span>
       <Link to={'/sortbyauthor'}><SortingBtn sortTitle='Author'/></Link> 
        
      </span>
      <span>
       <Link to={"/sortbytitle"}><SortingBtn sortTitle='Title'/></Link>
     </span>
      </div>
      {/* <Book data={bookData} /> */}
      
   
      <Routes>
        <Route path="/" element={<Book data={bookData} />} />
        <Route path="/sortbyauthor" element={<Book data={sortByAuthorData} />}/>
        <Route path="/sortbytitle" element={<Book data={sortByTitleData} />}/>
      </Routes>
    
     
      
    </div>
  );
}
export default App;
