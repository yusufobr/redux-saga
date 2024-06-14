import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  REMOVE_TASK_REQUEST,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
} from "../actions/taskActions";

const URL_BASE = "https://qalqul-task-manager-b9f4556a856f.herokuapp.com/api/tasks";

function* fetchTasks() {
  try {
    const response = yield call(() =>
      axios.get(URL_BASE)
    );
    yield put({ type: FETCH_TASKS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_TASKS_FAILURE, payload: error });
  }
}

function* addTask(action) {
  try {
    const response = yield call(() =>
      axios.post(
        URL_BASE,
        action.payload
      )
    );
    yield put({ type: ADD_TASK_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_TASK_FAILURE, payload: error });
  }
}

function* updateTask(action) {
  // console.log("action.payload", action.payload);
  try {
    const response = yield call(() =>
      axios.put(
        `${URL_BASE}/${action.payload._id}`,
        action.payload
      )
    );
    yield put({ type: UPDATE_TASK_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_TASK_FAILURE, payload: error });
  }
}

function* removeTask(action) {
  try {
    yield call(() =>
      axios.delete(
        `${URL_BASE}/${action.payload}`
      )
    );
    yield put({ type: REMOVE_TASK_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: REMOVE_TASK_FAILURE, payload: error });
  }
}

function* taskSaga() {
  yield takeEvery(FETCH_TASKS_REQUEST, fetchTasks);
  yield takeEvery(ADD_TASK_REQUEST, addTask);
  yield takeEvery(UPDATE_TASK_REQUEST, updateTask);
  yield takeEvery(REMOVE_TASK_REQUEST, removeTask);
}

export default taskSaga;
