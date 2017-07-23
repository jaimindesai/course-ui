/**
 * Created by sadagopa on 7/13/2017.
 */
import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  debugger;
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Business Name</th>
        <th>FEIN</th>
        <th>SOR</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.fein} course={course}/>
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
