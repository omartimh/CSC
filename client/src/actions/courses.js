import * as api from '../api';
import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export const getCourses = () => async  (dispatch) => {
    try {
        const { data } = await api.fetchCourses();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createCourse = (course) => async  (dispatch) => {
    try {
        const { data } = await api.createCourse(course);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};