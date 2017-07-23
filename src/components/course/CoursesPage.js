import React, { PropTypes } from "react";
import { connect } from "react-redux";
import {loadCourses} from '../../actions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCourses();
  }

  render() {
    const {courses} = this.props;
     return(
      <div>
        <CourseList courses={courses}/>
        </div>
    )
  }
}

function mapStateToProps(state, ownProps) {

  return {
    courses: state.courses
  };
}



export default connect(mapStateToProps,{loadCourses})(CoursesPage);
