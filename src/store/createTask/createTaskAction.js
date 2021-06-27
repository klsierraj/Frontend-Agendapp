import { TASKS } from "../../constants/HttpEndpoints";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest"
import { CREATE_TASK_FAILURE, CREATE_TASK_REQUEST, CREATE_TASK_SUCCESS } from "./createTaskTypes";
import { redirect } from '../index';


export const createTask = (dataTask = {}) => {

    return async (dispatch) => {
        const callHttp = async (dataTask) => {
            try {
                const response = await requestHttp ({
                    method: HTTP_VERBS.POST,
                    endpoint: TASKS.createTask,
                    data: dataTask
                });
                dispatch(CreateTaskSuccess(response.data));
                alert("Task created Successfully");
                dispatch(redirect('/'));


            } catch (error) {
                dispatch(createTaskFailure(error.response.statusText));
            }
        };
        await callHttp(dataTask);
    }
}


export const createTaskRequest = () => {
    return {
        type: CREATE_TASK_REQUEST,
    }
}

export const CreateTaskSuccess = (create) => {
    return {
        type: CREATE_TASK_SUCCESS,
        payload: create
    }
}

export const createTaskFailure = (error) => {
    return {
        type: CREATE_TASK_FAILURE,
        payload:error
    }
}