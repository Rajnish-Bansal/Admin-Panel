import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Input from "./components/Input";
import List from "./components/List";
import Login from "./components/Login";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("transactions", JSON.stringify(transactions));
  // }, [transactions]);

  // function getStoredValue() {
  //   const getValue = JSON.parse(localStorage.getItem("transactions"));
  //   if (getValue) {
  //     return getValue;
  //   }
  // }

  return (
    <Router>
      <div className="container">
        <Menu />
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route
                exact
                path="/"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
            </>
          ) : (
            <Route exact path="/" element={<Navigate to="/List" />} />
          )}
          {isLoggedIn && (
            <>
              <Route
                path="/Create"
                element={
                  <Input
                    transactions={transactions}
                    setTransactions={setTransactions}
                  />
                }
              />
              <Route
                path="/List"
                element={
                  <List
                    transactions={transactions}
                    setTransactions={setTransactions}
                  />
                }
              />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
