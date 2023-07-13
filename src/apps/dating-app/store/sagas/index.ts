import {put} from "redux-saga/effects";
import users from "./users";
import {Actions} from "../reducers";

export default function* rootSaga() {
    yield users;
    yield put(Actions.users.list.request());
}
