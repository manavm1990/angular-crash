import * as express from 'express';
import { Application } from 'express';
import { getAllCourses } from './routes/get-courses.route';
import { saveCourse } from './routes/save-course.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').put(saveCourse);

const httpServer = app.listen(9000, () => {
  console.log(`Listening on port 9000`);
});
