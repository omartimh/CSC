import { combineReducers } from 'redux';

import auth from './auth';
import posts from './posts';
import courses from './courses';
import jobs from './jobs';

export default combineReducers({ auth, posts, courses, jobs });