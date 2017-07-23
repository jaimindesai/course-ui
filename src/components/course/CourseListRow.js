import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
debugger;
  
  let courseString = "";
  if(course.dept[0].length > 1){
    courseString = course.dept[0];
    for (let i=1; i<course.dept.length; i++){
      courseString = courseString + ", " + course.dept[i];
    }
  } else {
    courseString = course.dept;
  }
  return (
    <tr>
      <td>{course.name}</td>
      <td>{course.fein}</td>
      <td>{courseString}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
