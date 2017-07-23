

let courses = [
  {
    "name":"BROADPATH INC",
    "fein":"611685800",
    "dept":["RUN","RET"]
  }, {
    "name":"DAVIDS AUTOBODY",
    "fein":"611685801",
    "dept":"RUN"
  }, {
    "name":"DAVID'S PIZZA",
    "fein":"611685802",
    "dept":["RUN","IS"]
  }, {
    "name":"BROADPATH COMPANY",
    "fein":"611685803",
    "dept":"RUN"
  }, {
    "name":"STARWARS INC",
    "fein":"611685804",
    "dept":"RUN"
  }, {
    "name":"STARWARS & CO",
    "fein":"611685805",
    "dept":["RUN","IS","RET"]
  }, {
    "name":"COOPER INDUSTRIES",
    "fein":"611685806",
    "dept":["RUN","IS","RET"]
  }, {
    "name":"BRADLEY COOPER",
    "fein":"611685807",
    "dept":"RUN"
  }, {
    "name":"AMAZON INC",
    "fein":"611685808",
    "dept":["RUN","IS","RET"]
  }, {
    "name":"CAMARON MOTORS",
    "fein":"611685809",
    "dept":"RUN"
  }, {
    "name":"GOLDSTAR STUDIO",
    "fein":"611685810",
    "dept":["RUN","IS"]
  }, {
    "name":"JOE'S PIZZA",
    "fein":"611685811",
    "dept":"RUN"
  }, {
    "name":"COLDSTONE ICECREAM",
    "fein":"611685812",
    "dept":"RUN"
  }, {
    "name":"HAGGENDAZ",
    "fein":"611685813",
    "dept":["RUN","RET"]
  }, {
    "name":"DICKS SPORTING GOODS",
    "fein":"611685814",
    "dept":["RUN","IS","RET"]
  }, {
    "name":"SPORTS ACADEMY",
    "fein":"611685815",
    "dept":["RUN","IS","RET"]
  }
];





function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generatefein = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, 500);
    });
  }

  
   static getAllPolicies(course) {
   let filteredCourses = [];
    let arrNewResults = [];
    let searchKeyword = course.title.toLowerCase();
     filteredCourses = courses.filter(function(obj){
       if (obj.name.toLowerCase().indexOf(searchKeyword) !== -1) {
        return  Object.assign(arrNewResults, obj);
      }
    }
    );
   return new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve(Object.assign([], filteredCourses));
      }, 500);
    });
  }

  
  
}

export default CourseApi;
