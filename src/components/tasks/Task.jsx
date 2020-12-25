import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTask, deleteSingleTask } from "./../../actions/tasks";

const Task = () => {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="row">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} className="col-11 col-sm-8">
              <span>{task.completed ? <del>{task.text}</del> : task.text}</span>
              <div>
                <button
                  className="btn btn-outline-success ml-1"
                  type="button"
                  onClick={() => dispatch(completeTask(task.id))}
                >
                  <i className="fa fa-check" />
                </button>
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={() => dispatch(deleteSingleTask(task.id))}
                >
                  <i className="fa fa-trash" />
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="task-null-text col-12">
            هیچ کاری برای امروز ثبت نشده دوست من
          </p>
        )}
      </ul>
    </div>
  );
};

export default Task;
