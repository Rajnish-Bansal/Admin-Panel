import React, { useState, useEffect } from "react";
import "./list.css";

function List(props) {
  const [filter, setFilter] = useState("nosort");
  const [search, setSearch] = useState("");
  const [searchOption, setsearchOption] = useState("Title");
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const handleSort = (e) => {
    setFilter(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const deleteItem = (index) => {
    let deletedList = [...props.transactions];
    deletedList.splice(index, 1);
    props.setTransactions(deletedList);
  };

  useEffect(() => {
    let sorted = [...props.transactions];
    if (filter === "LTH") {
      sorted = sorted.sort((a, b) => a.Price - b.Price);
    } else if (filter === "HTL") {
      sorted = sorted.sort((a, b) => b.Price - a.Price);
    } else if (filter !== "nosort") {
      sorted = sorted.filter((item) => item.Category === filter);
    }

    if (search.trim() !== "") {
      if (searchOption === "Title") {
        sorted = sorted.filter(
          (item) =>
            item.Title &&
            item.Title.toLowerCase().includes(search.toLowerCase())
        );
      } else if (searchOption === "Description") {
        sorted = sorted.filter(
          (item) =>
            item.Description &&
            item.Description.toLowerCase().includes(search.toLowerCase())
        );
      }
    }

    setSortedTransactions(sorted);
  }, [props.transactions, filter, search, searchOption]);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = sortedTransactions.slice(startIndex, endIndex);

  return (
    <>
      <div className="list-component">
        
        <div className="filter-div">
          <div className="search-div">
            <select
              value={searchOption}
              onChange={(e) => setsearchOption(e.target.value)}
            >
              <option value="Title">Title</option>
              <option value="Description">Description</option>
            </select>
            <input
              type="text"
              placeholder="Type here to search"
              className="search-bar"
              value={search}
              onChange={handleSearch}
            ></input>
            <button className="search-button">Search</button>
          </div>

          <div className="price-sort">
            <select value={filter} onChange={handleSort}>
              <option value="nosort">Sort by Price</option>
              <option value="LTH">Price Low to High</option>
              <option value="HTL">Price High to Low</option>
            </select>
          </div>

          <div className="category-sort">
            <select value={filter} onChange={handleSort}>
              <option value="nosort">Sort by Category</option>
              <option value="Books">Books</option>
              <option value="Gifts">Gifts</option>
              <option value="Clothes">Clothes</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>
        </div>

        <div className="list-div">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "3%" }}>Sl No.</th>
                  <th style={{ width: "8%" }}>Title</th>
                  <th style={{ width: "8%" }}>Category</th>
                  <th style={{ width: "10%" }}>Description</th>
                  <th style={{ width: "5%" }}>Price</th>
                  <th style={{ width: "2%" }}>Quantity</th>
                  <th style={{ width: "5%" }}>Action</th>
                </tr>
              </thead>

              <tbody>
                {currentPageData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.Title}</td>
                    <td>{item.Category}</td>
                    <td>{item.Description}</td>
                    <td>{item.Price}</td>
                    <td>{item.Quantity}</td>
                    <td>
                      {
                        <button onClick={() => deleteItem(index)}>
                          Delete
                        </button>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination-controls">
            <button onClick={handlePreviousClick} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              onClick={handleNextClick}
              disabled={
                currentPage ===
                Math.ceil(sortedTransactions.length / itemsPerPage)
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
