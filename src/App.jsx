import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, modaBox } from "./features/counter/userSlice";
import List from "./components/List";
import InputForm from "./components/InputForm";
function App() {
  let inputRef1 = useRef();
  let inputRef2 = useRef();
  let inputRef3 = useRef();
  const { user, modalSlice } = useSelector((state) => state.user);
  let dispetch = useDispatch();
  let modalClose = () => {
    if (modalSlice) {
      dispetch(modaBox(false));
    } else {
      dispetch(modaBox(true));
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let newObj = {
      item1: inputRef1.current.value,
      item2: inputRef3.current.value,
      item3: inputRef2.current.value,
    };
    dispetch(addUser(newObj));

    inputRef1.current.value = "";
    inputRef3.current.value = "";
    inputRef2.current.value = "";
  };
  return (
    <div className="flex flex-col items-center h-full justify-center ">
      {!modalSlice && (
        <div className=" shadow-lg p-5 rounded-xl flex flex-col w-96 max-w-xs">
          <div className="flex justify-between items-end ">
            <button
              onClick={modalClose}
              className=" btn btn-circle mb-2 text-end"
            >
              ✖
            </button>
            <h3 className="text-info font-bold text-base pb-5">Add user</h3>
          </div>
          <form onSubmit={handleSubmit} className=" form-control">
            <InputForm refs={inputRef1} name="Name" />
            <InputForm refs={inputRef3} name="Descroption" />
            <InputForm refs={inputRef2} name="Photo" />
            <button className="btn btn-success mt-4">Submit</button>
          </form>
        </div>
      )}
      <button
        onClick={() => {
          modalClose();
        }}
        className="btn btn-neutral fixed lg:-left-8 sm:-left-8 rotate-90 max-[620px]:-top-2 max-[620px]:rotate-180"
      >
        Add user
      </button>
      <List user={user} modalSlice={modalSlice} />
    </div>
  );
}

export default App;
