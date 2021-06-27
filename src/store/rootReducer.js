import { combineReducers } from 'redux';
import taskReducer from './tasks/taskReducer';
import userReducer from './user/userReducer';
import redirectReducer from './redirect/redirectReducer';
import createTaskReducer from './createTask/createTaskReducer'

const rootReducer = combineReducers({
    task: taskReducer,
    user: userReducer,
    redirect: redirectReducer,
    createTask: createTaskReducer
});

export default rootReducer;
