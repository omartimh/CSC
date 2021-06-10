import express from 'express';
import { getCourses, createCourse, updateCourse, deleteCourse } from '../controllers/course.js';

const router = express.Router();

router.get('/', getCourses);
router.post('/', createCourse);
// router.get('/:id', getCourse);
router.patch('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;