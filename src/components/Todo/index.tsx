import React from "react";
import { IoMdCreate, IoIosTrash } from "react-icons/io";
import "./todo.css";

export default function Todo() {
  return (
    <div className="todo-container">
      <label htmlFor="todoCheckbox" className="checkbox-container">
        <input id="todoCheckbox" type="checkbox" />
        <span className="check-mark" />
      </label>
      <div className="todo-text-container">
        <span className="todo-text">content</span>
      </div>
      <div className="action-buttons-group">
        <button>
          <IoMdCreate />
        </button>
        <button>
          <IoIosTrash />
        </button>
      </div>
    </div>
  );
}
