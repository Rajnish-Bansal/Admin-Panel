import React, { useState } from "react";
import "./input.css";

function Input(props) {
  const [title, setTitle] = useState();
  const [description, setdescription] = useState();
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("Books");
  const [quantity, setquantity] = useState("1");

  const handleClick = () => {
    const newTransaction = {
      Title: title,
      Description: description,
      Price: price,
      Category: category,
      Quantity: quantity,
    };

    if (title === "" || description === "" || price === "") {
      alert("Please fill details !!");
    } else {
      props.setTransactions([...props.transactions, newTransaction]);
      alert("Item Added !!");
    }

    setTitle("");
    setdescription("");
    setprice("");
    setcategory("Books");
    setquantity("1");
  };

  return (
    <div className="input-div">
      <h2 className="input-div-heading">Add Item</h2>
      <label className="Title input-heading">
        Title: <nbsp />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label className="category input-heading">
        Category: <nbsp />
        <select
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          className="category-options"
        >
          <option>Books</option>
          <option>Gifts</option>
          <option>Clothes</option>
          <option>Cosmetics</option>
          <option>Furniture</option>
        </select>
      </label>

      <label className="description input-heading">
        Description: <nbsp />
        <input
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
      </label>

      <label className="price input-heading">
        Price: <nbsp />
        <input
          type="number"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
      </label>

      <label className="quantity input-heading">
        Quantity: <nbsp />
        <select
          value={quantity}
          onChange={(e) => setquantity(e.target.value)}
          className="quantity-options"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </label>
      <button className="add-button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default Input;

// return (
//   <>
//     if(props.isLoggedIn === true)
//     {
//       <div className="input-div">
//         <h2 className="input-div-heading">Add Item</h2>
//         <label className="Title input-heading">
//           Title: <nbsp />
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           ></input>
//         </label>

//         <label className="category input-heading">
//           Category: <nbsp />
//           <select
//             value={category}
//             onChange={(e) => setcategory(e.target.value)}
//             className="category-options"
//           >
//             <option>Books</option>
//             <option>Gifts</option>
//             <option>Clothes</option>
//             <option>Cosmetics</option>
//             <option>Furniture</option>
//           </select>
//         </label>

//         <label className="description input-heading">
//           Description: <nbsp />
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setdescription(e.target.value)}
//           ></input>
//         </label>

//         <label className="price input-heading">
//           Price: <nbsp />
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setprice(e.target.value)}
//           ></input>
//         </label>

//         <label className="quantity input-heading">
//           Quantity: <nbsp />
//           <select
//             value={quantity}
//             onChange={(e) => setquantity(e.target.value)}
//             className="quantity-options"
//           >
//             <option>1</option>
//             <option>2</option>n<option>3</option>
//             <option>4</option>
//             <option>5</option>
//             <option>6</option>
//           </select>
//         </label>
//         <button className="add-button" onClick={handleClick}>
//           Add
//         </button>
//       </div>
//     }
//     else{alert("Please Login")}
//   </>
// );
