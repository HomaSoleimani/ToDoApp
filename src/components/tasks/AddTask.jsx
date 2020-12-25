import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./../../actions/tasks";

const AddTask = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const focusInput = useRef(null);
  useEffect(() => {
    focusInput.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(text));
    setText("");
  };
  return (
    <div className="form-wrapper">
      <form>
        <button type="submit" onClick={handleSubmit}>
          <i className=" fa fa-plus d-block"></i>
        </button>
        <input
          type="text"
          ref={focusInput}
          placeholder="کارهایی که میخوای انجام بدی رو بهم بگو..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddTask;
