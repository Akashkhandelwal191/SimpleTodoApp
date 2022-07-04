import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import List from "./List";



//To Get Data From LocalStorage
const getDataFromLocalStorage = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const ToDoList = () => {
  const [item, setItem] = useState("");
  const [items, updateList] = useState(getDataFromLocalStorage);

  const itemEvent = (e) => {
    document.getElementById("message").innerText = "";
    setItem(e.target.value);
  };

  const AddList = () => {
    if (item !== "") {
      updateList([...items, item]);
      setItem("");
    } else {
      document.getElementById("message").innerText =
        "Please fill out this field!";
    }
  };

  const DeleteHandler = (id) => {
    console.log(id);
    updateList((olditems) => {
      return olditems.filter((element, index) => {
        return index !== id;
      });
    });
  };

  //add data to localstorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="center_div">
        <h1> To Do App </h1>
        <br />

        <input
          type="text"
          placeholder="Add an item"
          value={item}
          onChange={itemEvent}
        />
        <Button className="newbtn" onClick={AddList}>
          <AddCircleSharpIcon style={{ fontSize: 50 }} />
        </Button>
        <p id="message"> </p>
        <br />
        <ol>
          {items.map((val, i) => {
            return (
              <List key={i} text={val} id={i} OnDeleteHandler={DeleteHandler} />
            );
          })}
        </ol>
        <br />
      </div>
    </>
  );
};

export default ToDoList;
