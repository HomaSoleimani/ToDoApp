import React, { Fragment } from "react";

import Task from "./../components/tasks/Task";
import AddTask from "../components/tasks/AddTask";
import CleanAllTasks from "./../components/tasks/CleanAllTasks";

const App = () => {
  return (
    <Fragment>
      <header>
        <h1 className="header-text">
          <span>ToDo</span> List App
        </h1>
        <AddTask />
      </header>
      <main>
        <Task />
        <CleanAllTasks />
      </main>
    </Fragment>
  );
};

export default App;
