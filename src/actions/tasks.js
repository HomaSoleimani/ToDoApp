import { v4 as uuidv4 } from "uuid";
export const addTask = (text) => {
  return async (dispatch, getState) => {
    if (text !== "" && text !== " ") {
      const task = {
        id: uuidv4(),
        text,
        completed: false,
      };
      await dispatch({
        type: "ADD_TASK",
        payload: [...getState(), task],
      });
    } else {
      await dispatch({
        type: "ADD_TASK",
        payload: [...getState()],
      });
    }
  };
};
export const cleanAllTasks = (tasks) => {
  return async (dispatch) => {
    tasks = [...[]];
    await dispatch({ type: "CLEAN_ALL_TASKS", payload: tasks });
  };
};
export const deleteSingleTask = (taskId) => {
  return async (dispatch, getState) => {
    const tasks = [...getState()];
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    await dispatch({ type: "DELETE_TASK", payload: [...filteredTasks] });
  };
};
export const completeTask = (taskId) => {
  return async (dispatch, getState) => {
    const tasks = [...getState()];
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const task = tasks[taskIndex];
    task.completed = !task.completed;
    tasks[taskIndex] = task;
    await dispatch({ type: "COMPLETE_TASK", payload: [...tasks] });
  };
};
