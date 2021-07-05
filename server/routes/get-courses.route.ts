import { Request, Response } from 'express';
import { COURSES } from '../../src/db';

export function getAllCourses(req: Request, res: Response) {
  if (req.query['id']) {
    getCourseById(req, res);
  } else {
    res.status(200).json({ payload: Object.values(COURSES) });
  }
}

export function getCourseById(req: Request, res: Response) {
  const courseId = req.query['id'];

  const courses: any = Object.values(COURSES);

  const course = courses.find((course) => course.id == courseId);

  res.status(200).json(course);
}
