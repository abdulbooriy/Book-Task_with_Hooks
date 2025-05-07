import { useState } from "react";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import Popup from "./components/popup/Popup";

function App() {
  const [bookList, setBookList] = useState([]);

  const handleAddBook = (newbook) => {
    setBookList((prev) => [...prev, newbook]);
  };
  return (
    <div>
      <Header addBook={handleAddBook} />
      <Table books={bookList} />
    </div>
  );
}

export default App;
