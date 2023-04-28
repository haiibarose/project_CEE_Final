// const { get } = require("./routes/coursevilleRoutes.js");

const backendIPAddress = "127.0.0.1:3000";

let itemsData;


// TODO #2.3: Send Get items ("GET") request to backend server and store the response in itemsData variable
const getItemsFromDB = async () => {
  const options = {
    method: "GET",
    credentials: "include",
  };
  await fetch(`http://${backendIPAddress}/items`, options)
    .then((response) => response.json())
    .then((data) => {
        itemsData = data;
        // console.log(itemsData);
    })
    .catch((error) => console.error(error))
  console.log(
    "This function should fetch 'get items' route from backend server."
  );
};

 // Example: Send Get user profile ("GET") request to backend server and show the response on the webpage
 const getUserProfile = async () => {
  const options = {
    method: "GET",
    credentials: "include",
  };
  await fetch(
    `http://${backendIPAddress}/courseville/get_profile_info`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
    //   console.log(data);
    // console.log("getUserProfileTest");
    })
};

// getUserCourse
const getUserCourse = async () => {
  const options = {
    method: "GET",
    credentials: "include",
  };
  const response = await fetch(
    `http://${backendIPAddress}/courseville/get_courses`,
    options
  );
  const data = await response.json();
  return data;
};

// getCouresMaterials 

async function getCourseMaterials(cv_cid) {
  const options = {
    method: "GET",
    credentials: "include",
  };
  const res = await fetch(
    `http://${backendIPAddress}/courseville/get_course_materials/` + cv_cid,
    options
  );
  const data = await res.json();
  // console.log(data);
  // console.log("getCourseMaterialstest")
  return data;
}


// getCourseSchedule

async function getCourseSchedule(cv_cid) {
  const options = {
    method: "GET",
    credentials: "include",
  };
  const res = await fetch(
    `http://${backendIPAddress}/courseville/get_course_schedule/` + cv_cid,
    options
  );
  const data = await res.json();
  // console.log(data);
  // console.log("getCourseScheduletest")
  return data;
}

// getCouresInfo

async function getCourseInfo(cv_cid) {
  const options = {
    method: "GET",
    credentials: "include",
  };
  const res = await fetch(
    `http://${backendIPAddress}/courseville/get_course_info/` + cv_cid,
    options
  );
  const data = await res.json();
  // console.log(data);
  // console.log("getCourseInfotest")
  return data;
}


// adding scroll on webpage
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

   
// adding new subject and progressBar

function generateNewSubject(subjectName) {
  

  const subjectDiv = document.createElement('div');
  subjectDiv.classList.add(subjectName);

  const subj = document.createElement('h2');
  subj.innerHTML = subjectName;
  subjectDiv.appendChild(subj);

  return subjectDiv
}

function generateTeacherBar(teacherProgress) {

  const teacher = document.createElement("div");
  teacher.classList.add("teacher");

  const teacherBarName = document.createElement('h2');
  teacherBarName.innerHTML = "teacher-progress"
  teacherBarName.classList.add("barName");
  teacher.appendChild(teacherBarName);

  const progressBar = document.createElement('div');
  progressBar.classList.add("progressBar");
  teacher.appendChild(progressBar);

  const teacherProgressBar = document.createElement("div");
  teacherProgressBar.classList.add('teacherProgressBar');
  progressBar.appendChild(teacherProgressBar);
  teacherProgressBar.style.width = teacherProgress + "%";
  teacherProgressBar.style.background = "goldenrod";
  teacherProgressBar.style.height = "10px";
  teacherProgressBar.style.borderRadius = "5px";

  const teacherProgressBox = document.createElement("span");
  teacherProgressBox.classList.add("progressBox");
  teacherProgressBox.innerHTML = teacherProgress;
  teacherProgressBar.appendChild(teacherProgressBox);

  return teacher;
}

function generateStudentBar(studentProgress) {

  const student = document.createElement("div");
  student.classList.add("student");


  const studentBarName = document.createElement('h2');
  studentBarName.innerHTML = "student-progress"
  studentBarName.classList.add("barName");
  student.appendChild(studentBarName);

  const progressBar = document.createElement('div');
  progressBar.classList.add("progressBar");
  student.appendChild(progressBar);

  const studentProgressBar = document.createElement("div");
  studentProgressBar.classList.add('studentProgressBar');
  progressBar.appendChild(studentProgressBar);
  studentProgressBar.style.width = studentProgress + "%";
  studentProgressBar.style.background = "#e91e63";
  studentProgressBar.style.height = "10px";
  studentProgressBar.style.borderRadius = "5px";

  const studentProgressBox = document.createElement("span");
  studentProgressBox.classList.add("progressBox");
  studentProgressBox.innerHTML = studentProgress;
  studentProgressBar.appendChild(studentProgressBox);
  
  return student;
}
function makeCheckBox(scheduleData) {
  const details = document.createElement('div');
  details.classList.add('progressDetails');
  details.style.display = 'none';

  for (let i = 0 ;i < scheduleData['data'].length; i++) {
    const cb = document.createElement("input");
    cb.type = "checkbox";
    const sp = document.createElement('span');
    sp.innerHTML = scheduleData['data'][i]['title'];
    sp.style.margin = "5px";
    cb.style.marginright = "30px";
    details.appendChild(sp);
    if (i < scheduleData['data'].length - 1) {
      details.appendChild(cb);
    }
  }
  return details;

}
function createDetailsButton(scheduleData) {
  const detailsContainer = document.createElement('div');

  const detailsButton = document.createElement('button');
  detailsButton.classList.add('Details');
  detailsButton.innerText = 'Details';
  detailsButton.onclick = function() {
    expandDetails(details);
  };
  
  const details = makeCheckBox(scheduleData);

  detailsContainer.appendChild(detailsButton);
  detailsContainer.appendChild(details);

  return detailsContainer;

}
function expandDetails(detailsDiv) {
  if (detailsDiv.style.display === 'none') {
    detailsDiv.style.display = 'block';
  } else {
    detailsDiv.style.display = 'none';
  }
}


function combineSubject(name, teacherProgress, studentProgress, scheduleData) {
  const subj = generateNewSubject(name);
  const subjTeacher = generateTeacherBar(teacherProgress);
  const subjStudent = generateStudentBar(studentProgress);
  const subjDetails = createDetailsButton(scheduleData);

  subj.appendChild(subjTeacher);
  subj.appendChild(subjStudent);
  subj.appendChild(subjDetails);
  
  document.querySelector('.subjects').appendChild(subj);
}

// createBarFromCV_CID

function createBarFromCV_CID(userCourses) {
  let cv_cidList = [];
  for (let i = 0; i < userCourses["data"]["student"].length; i++) {
    if (userCourses["data"]["student"][i]["semester"] == 1) {
      continue;
    }
    else {
      cv_cidList.push(userCourses["data"]["student"][i]["cv_cid"]);
    }
  }
  console.log(cv_cidList);
  cv_cidList.sort();
  for (let i = 0; i < cv_cidList.length; i++) {
    (async() =>{
    const scheduleData = await getCourseSchedule(cv_cidList[i]);
    const materialsData = await getCourseMaterials(cv_cidList[i]);
    const courseName = await getCourseInfo(cv_cidList[i]);
    let subjectName = courseName["data"]["title"];
    let newSubjectName = "";
    for (let char of subjectName) {
      if (char == " ") {
        newSubjectName += "_";
      }
      else {
        newSubjectName += char;
      }
    }
    if (scheduleData["data"].length < 10) {
      combineSubject(newSubjectName, "80", "40", materialsData);
    }
    else {
      combineSubject(newSubjectName, "80", "40", scheduleData)
    }
    })();
  }
}

// function changeStudentBar(subjectName, changed) {
//   const subj = document.querySelector(subjectName);
//   console.log(subj);
//   const student = subj.querySelector("student");
//   const progressBar = student.querySelector("progressBar");
//   progressBar.style.width = changed + "%";

// }

//createAllBar
// function createAllBar(userCourses, scheduleData) {
//   for (let i = 0; i < userCourses["data"]["student"].length; i++) {
//     if (userCourses["data"]["student"][i]["semester"] == 1) {
//       continue;
//     }
//     else {
//     combineSubject(userCourses["data"]["student"][i]["course_no"], "80", "40", scheduleData);
//     }
//   }
// }


// createAllBar(userCourses, scheduleData);
(async () => {
  const userCourses = await getUserCourse();
  createBarFromCV_CID(userCourses);
})();

// changeStudentBar("General_Chemistry__[Section_1-2]", 70);
let a = document.getElementsByClassName("General_Chemistry__[Section_1-2]");
console.log(a);