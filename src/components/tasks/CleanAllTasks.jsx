import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanAllTasks } from "../../actions/tasks";

const CleanAllTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state);
  return (
    <Fragment>
      {tasks.length > 0 ? (
        <button
          className="cleaner-btn"
          onClick={() => dispatch(cleanAllTasks(tasks))}
        >
          پاک کردن همه
        </button>
      ) : null}
    </Fragment>
  );
};

export default CleanAllTasks;
