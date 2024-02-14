// import React, { useState } from "react";
// import "./filter.css";

// function Filter(props) {
//   const [priceFilter, setPriceFilter] = useState("");
// //   const [sortedTransaction, setSortedTransaction] = useState([]);

//   const handlePriceSort = (e) => {
//     const newSelectedOption = e.target.value;
//     setPriceFilter(newSelectedOption);
//     // priceSort();
//   };

//   const sortTransactions = [...props.transactions];
//     // props.setSortedTransaction(sortTransactions);

//     const priceSort = () => {
//   if (selectedOption === "Price Low to High") {
//     // props.setSortedTransaction(
//       sortTransactions.sort((a, b) => a.Price - b.Price)
//     // );
//   } else if (selectedOption === "Price High to Low") {
//     // props.setSortedTransaction(
//       sortTransactions.sort((a, b) => b.Price - a.Price)
//     // );
//   } else {
//     props.setSortedTransaction(sortTransactions);
//   }
//     };

//   return (
//     <div>
//       <div className="filter-div">
//         <div className="search-div">
//           <select>
//             <option>Title</option>
//             <option>Description</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Type here to search"
//             className="search-bar"
//           ></input>
//           <button className="search-button">Search</button>
//         </div>

//         <div className="price-sort">
//           <select value={priceFilter} onChange={handlePriceSort}>
//             <option>Sort by Price</option>
//             <option value="Price Low to High">Price Low to High</option>
//             <option value="Price High to Low">Price High to Low</option>
//           </select>
//         </div>

//         <div className="category-sort">
//           <select>
//             <option>Sort by Category</option>
//             <option>Books</option>
//             <option>Gifts</option>
//             <option>Clothes</option>
//             <option>Cosmetics</option>
//             <option>Furniture</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Filter;

// {
//   /* <Filter
//         transactions={props.transactions}
//         // setTransactions={props.setTransactions}
//         setSortedTransaction={setSortedTransaction}
//       /> */
// }