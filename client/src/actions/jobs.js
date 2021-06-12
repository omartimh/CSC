import * as api from '../api';
import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export const getJobs = () => async  (dispatch) => {
    try {
        const { data } = await api.fetchJobs();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createJob = (job) => async  (dispatch) => {
    try {
        const { data } = await api.createJob(job);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};