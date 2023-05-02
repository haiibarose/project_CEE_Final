// const { get } = require("./routes/coursevilleRoutes.js");

const backendIPAddress = "127.0.0.1:3000";

let itemsData;
const currentDate = new Date();
const firstDate = new Date(2023, 0, 9);
const lastDateOfSemester = new Date(2023, 4, 5);

var numberOfCheckBox = 0;

const updateProgress = async (name, progress) => {
  const studentId = await getUserProfile();
  console.log(studentId);
  const options = {
    method: "PUT",
    credentials: "include",
    body: JSON.stringify({
      "prog": progress | 0,
      "subject": name,
      "student_id": studentId + name
    }),
    headers: {
      "Content-Type": "application/json"
    }
  };
  await fetch(`http://${backendIPAddress}/items`, options).catch((error) => console.error(error));
};

const getSubjectProgress = async (uniqID) => {
  const options = {
    method: "GET",
    credentials: "include",
  };
  const res = await fetch(
    `http://${backendIPAddress}/items`, options).then((response) => response.json())

  console.log(res);
  const v = res.find(x => x.student_id == uniqID);
  if (v != undefined) {
    return v.prog;
  } else {
    return 0;
  }
};

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
  var student_id;
  const res = await fetch(
    `http://${backendIPAddress}/courseville/get_profile_info`,
    options
  )
  const data = await res.json();
  student_id = data.user.id;
  return student_id;
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
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}


// adding new subject and progressBar

function generateNewSubject(subjectName) {


  const subjectDiv = document.createElement('div');
  subjectDiv.classList.add(subjectName);
  subjectDiv.style.marginBottom = "20px";

  const subj = document.createElement('span');
  subj.innerHTML = subjectName;
  subj.style.padding = '10px';
  subj.style.color = "#454545";
  subj.style.fontSize = "2em";
  subj.style.fontFamily = "'Bebas Neue', cursive";
  subj.style.fontWeight = "500";
  subj.style.position = "flex";
  subj.style.borderRadius = "10px";
  subj.style.top = "50%";
  subj.style.left = "50%";
  subj.style.transform = "translate(-50%,-50%)";
  subj.style.backgroundImage = "linear-gradient(#FF6000, #FF6000)";
  subj.style.backgroundSize = "100% 10px";
  subj.style.backgroundRepeat = "no-repeat";
  subj.style.backgroundPosition = "100% 0%";
  subj.style.transition = "background-size .7s, background-position .5s ease-in-out";

// Add hover style to the new div
  subj.addEventListener("mouseover", function() {
  subj.style.backgroundSize = "100% 100%";
  subj.style.backgroundPosition = "0% 100%";
  subj.style.transition = "background-position .7s, background-size .5s ease-in-out";
  subj.style.color = "#FFE6C7"

  
});

  subjectDiv.appendChild(subj);

  return subjectDiv
}

function generateTeacherBar() {

  const diffTimeFirstLast = Math.ceil(Math.abs(lastDateOfSemester - firstDate) / (1000 * 60 * 60 * 24));
  const diffTimeFirstCurrent = Math.ceil(Math.abs(firstDate - currentDate) / (1000 * 60 * 60 * 24));
    
  const teacherProgress = parseInt(diffTimeFirstCurrent / diffTimeFirstLast * 100);

  const teacher = document.createElement("div");
  teacher.classList.add("teacher");

  const teacherBarName = document.createElement('h2');
  teacherBarName.innerHTML = "teacher-progress"
  teacherBarName.classList.add("barName");
  teacherBarName.style.fontFamily = "monospace";
  teacher.appendChild(teacherBarName);

  const progressBar = document.createElement('div');
  progressBar.classList.add("progressBar");
  teacher.appendChild(progressBar);

  const teacherProgressBar = document.createElement("div");
  teacherProgressBar.classList.add('teacherProgressBar');
  progressBar.appendChild(teacherProgressBar);
  teacherProgressBar.style.width = "0%";
  teacherProgressBar.style.background = "#7C9070";
  teacherProgressBar.style.height = "10px";
  teacherProgressBar.style.borderRadius = "5px";

  // adding animantion

  const keyframes = `
      @keyframes teacherMoving {
          100% {
              width: ${teacherProgress + "%"};
          }
      }
  `;

  const style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule(keyframes, 0);
  teacherProgressBar.style.animation = 'teacherMoving 1s linear forwards';
  // teacherProgressBar.style.width = teacherProgress + "%";
  // teacherProgressBar.style.transition = "width 1s linear";

  // adding animation finished

  const teacherProgressBox = document.createElement("span");
  teacherProgressBox.classList.add("progressBox");
  teacherProgressBox.innerHTML = teacherProgress;
  teacherProgressBar.appendChild(teacherProgressBox);

  return teacher;
}

function generateStudentBar(subjectName, studentProgress) {

  const student = document.createElement("div");
  student.classList.add("student");


  const studentBarName = document.createElement('h2');
  studentBarName.innerHTML = "student-progress";
  studentBarName.style.fontFamily = "monospace";
  studentBarName.classList.add("barName");
  student.appendChild(studentBarName);

  const progressBar = document.createElement('div');
  progressBar.classList.add("progressBar");
  student.appendChild(progressBar);

  const studentProgressBar = document.createElement("div");
  studentProgressBar.classList.add('studentProgressBar_' + subjectName);
  progressBar.appendChild(studentProgressBar);
  studentProgressBar.style.width = "0%";
  studentProgressBar.style.background = "#e91e63";
  studentProgressBar.style.height = "10px";
  studentProgressBar.style.borderRadius = "5px";

  // adding animantion

  const keyframes = `
    @keyframes studentMoving_${subjectName} {
        100% {
            width: ${studentProgress + "%"};
        }
    }
  `;

  const style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule(keyframes, 0);
  // studentProgressBar.style.animation = `studentMoving_${subjectName} 1s linear forwards`;
  studentProgressBar.style.width = 0 + "%";
  // studentProgressBar.style.transition = "width 1s linear";
  studentProgressBar.style.transition = "width 1s cubic-bezier(0, -3.23, 0, 1.64";

  setTimeout(() => {
    studentProgressBar.style.width = studentProgress + "%";
  }, 500);


  // adding animation finished

  const studentProgressBox = document.createElement("span");
  studentProgressBox.classList.add("progressBox");
  studentProgressBox.innerHTML = studentProgress;
  studentProgressBar.appendChild(studentProgressBox);

  return student;
}
  // studentProgress = parseInt(studentProgress, 10);

  // const student = document.createElement("div");
  // student.classList.add("student");


  // const studentBarName = document.createElement('h2');
  // studentBarName.innerHTML = "student-progress"
  // studentBarName.classList.add("barName");
  // student.appendChild(studentBarName);

  // const progressBar = document.createElement('div');
  // progressBar.classList.add("progressBar");
  // student.appendChild(progressBar);

  // const studentProgressBar = document.createElement("div");
  // studentProgressBar.classList.add('studentProgressBar');
  // progressBar.appendChild(studentProgressBar);
  // studentProgressBar.style.width = "0%";
  // studentProgressBar.style.background = "#e91e63";
  // studentProgressBar.style.height = "10px";
  // studentProgressBar.style.borderRadius = "5px";

  // // adding animantion

  // const keyframes = `
  //     @keyframes studentMoving {
  //         100% {
  //             width: ${studentProgress + "%"};
  //         }
  //     }
  // `;

  // const style = document.createElement('style');
  // document.head.appendChild(style);
  // style.sheet.insertRule(keyframes, 0);
  // studentProgressBar.style.animation = 'studentMoving 1s linear forwards';

  // // adding animation finished

  // const studentProgressBox = document.createElement("span");
  // studentProgressBox.classList.add("progressBox");
  // studentProgressBox.innerHTML = studentProgress;
  // studentProgressBar.appendChild(studentProgressBox);

  // return student;


// function makeCheckBox(data) {
//   const details = document.createElement('div');
//   details.classList.add('progressDetails');
//   details.style.display = 'none';

//   for (let i = 0; i < data['data'].length; i++) {
//     const cb = document.createElement("input");
//     cb.type = "checkbox";
//     cb.classList.add("checkBox");
//     // adding style to checkBox


//     // adding style to checkbox finished
//     const sp = document.createElement('span');
//     if (data['data'][i]['weekno'] == undefined) {
//       sp.innerHTML = data['data'][i]['title'];
//     }
//     else {
//       sp.innerHTML = data['data'][i]['weekno'] + " " + data['data'][i]['title'];
//     }
//     sp.style.margin = "5px";
//     cb.style.marginright = "30px";
//     details.appendChild(sp);
//     if (i <= data['data'].length - 2) {
//       details.appendChild(cb);
//     }
//   }
//   return details;
// }

// <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!edit by Rose, if(error): uncomment the code above !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function makeCheckBox(data) {
  const details = document.createElement('section');
  details.classList.add('progressDetails');
  details.style.display = 'none';

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');
  details.appendChild(gridContainer);

  for (let i = 0; i < data['data'].length; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.classList.add("checkBox");
    cb.id = `checkbox-${numberOfCheckBox}`; // Use a unique id for each checkbox
    numberOfCheckBox++;

    // Load the checked status from localStorage
    const checkedStatus = localStorage.getItem(cb.id);
    if (checkedStatus === 'true') {
      cb.checked = true;
    }

    // Save the checked status to localStorage when the checkbox is clicked
    cb.addEventListener('change', () => {
      localStorage.setItem(cb.id, cb.checked);
    });

    const sp = document.createElement('span');
    if (data['data'][i]['weekno'] == undefined) {
      sp.innerHTML = data['data'][i]['title'];
    } else {
      sp.innerHTML = data['data'][i]['weekno'] + " " + data['data'][i]['title'];
    }

    gridItem.appendChild(cb); // Move this line before appending the span
    gridItem.appendChild(sp);
    gridContainer.appendChild(gridItem);
  }

  return details;
}


document.addEventListener('DOMContentLoaded', function () {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    (function (index) {
      var key = 'checkbox-' + index;
      checkboxes[index].addEventListener('change', function () {
        if (this.checked) {
          localStorage.setItem(key, 'true');
        } else {
          localStorage.removeItem(key);
        }
      });

      if (localStorage.getItem(key) === 'true') {
        checkboxes[index].checked = true;
      } else {
        checkboxes[index].checked = false;
      }
    })(i);
  }
});


function createDetailsButton(scheduleData) {
  const detailsContainer = document.createElement('div');

  const detailsButton = document.createElement('button');
  detailsButton.classList.add('Details');
  detailsButton.innerText = 'Details';
  detailsButton.style.fontFamily = "monospace";
  detailsButton.style.fontWeight = 800;
  detailsButton.onclick = function () {
    expandDetails(details);
  };

  const details = makeCheckBox(scheduleData);

  detailsContainer.appendChild(detailsButton);
  detailsContainer.appendChild(details);

  return detailsContainer;

}

function createSubmitButton(name) {
  const submitContainer = document.createElement('div');
  let progress = 0;
  const submitButton = document.createElement('button');
  submitButton.classList.add('Submit');
  submitButton.id = name;
  submitButton.innerText = 'Submit';
  submitButton.style.fontFamily = "monospace";
  submitButton.style.fontWeight = 800;
  submitButton.onclick = function () {
    var subject = document.querySelector("[class=" + CSS.escape(name) + "]");
    var checkboxes = subject.querySelectorAll(".checkBox");
    console.log(checkboxes);
    var c = 0;
    for (var i = 0; i != checkboxes.length; i++) {
      //console.log(checkboxes[i].checked);
      if (checkboxes[i].checked === true) {
        c++;
      }
    }
    console.log(c / checkboxes.length * 100);
    let progress = c / checkboxes.length * 100;
    progress = parseInt(progress);
    updateProgress(name, progress);

    const studentProgressBar = document.querySelector('.studentProgressBar_' + name);
    studentProgressBar.style.width = progress + "%";
    studentProgressBar.style.transition = "width 1s ease-in";

    const studentProgressBox = studentProgressBar.children[0];
    studentProgressBox.innerHTML = progress;
  };


  submitContainer.appendChild(submitButton);

  return submitContainer;

}

function expandDetails(detailsDiv) {
  if (detailsDiv.style.display === 'none') {
    detailsDiv.style.display = 'block';
  } else {
    detailsDiv.style.display = 'none';
  }
}

// function combineSubject(name, teacherProgress, studentProgress, scheduleData) {
//   const subj = generateNewSubject(name);
//   const subjTeacher = generateTeacherBar();
//   const subjStudent = generateStudentBar(studentProgress);
//   const subjDetails = createDetailsButton(scheduleData);
//   const subjSubmitButton = createSubmitButton();

//   subj.appendChild(subjTeacher);
//   subj.appendChild(subjStudent);
//   subj.appendChild(subjDetails);
//   subj.appendChild(subjSubmitButton);

//   document.querySelector('.subjects').appendChild(subj);
// }

function combineSubject(name, studentProgress, scheduleData) {
  const subj = generateNewSubject(name);
  const subjTeacher = generateTeacherBar();
  const subjStudent = generateStudentBar(name, studentProgress);
  const subjDetails = createDetailsButton(scheduleData);
  const subjSubmitButton = createSubmitButton(name);

  subj.appendChild(subjTeacher);
  subj.appendChild(subjStudent);
  subj.appendChild(subjDetails);
  subj.appendChild(subjSubmitButton);

  document.querySelector('.subjects').insertAdjacentElement('beforeend', subj);
}

// createBarFromCV_CID

function createBarFromCV_CID(userCourses) {
  let cv_cidList = [];
  for (let i = 0; i < userCourses["data"]["student"].length; i++) {
    if (userCourses["data"]["student"][i]["semester"] == 1 || userCourses["data"]["student"][i]["year"] == "2021") {
      continue;
    }
    else if (userCourses["data"]["student"][i]["course_no"].includes("CU")) {
      continue;
    }
    else {
      cv_cidList.push(userCourses["data"]["student"][i]["cv_cid"]);
    }
  }
  cv_cidList.sort();
  console.log(cv_cidList);

  const promises = cv_cidList.map(async (cid) => {
    const scheduleData = await getCourseSchedule(cid);
    const materialsData = await getCourseMaterials(cid);
    const courseName = await getCourseInfo(cid);
    const subjectName = courseName["data"]["title"].replace(/[()]/g, '');
    let newSubjectName = "";
    for (const char of subjectName) {
      if (char == " ") {
        newSubjectName += "_";
      }
      else if (char == "[" || char == "]") {
        continue;
      }
      else {
        newSubjectName += char;
      }

    }


    const data = scheduleData["data"].length < 10 ? materialsData : scheduleData;
    return { newSubjectName, data };
  });

  Promise.all(promises).then(async (results) => {
    results.sort((a, b) => a.newSubjectName.localeCompare(b.newSubjectName));
    for (const result of results) {
      const studentId = await getUserProfile();
      console.log(studentId + result.newSubjectName);
      const studentProgress = await getSubjectProgress(studentId + result.newSubjectName);
      console.log(studentProgress);
      combineSubject(result.newSubjectName, studentProgress, result.data);
      const studentProgressBar = document.querySelector('.studentProgressBar_' + result.newSubjectName);
      studentProgressBar.style.transition = "width 1s ease-in";
      studentProgressBar.style.width = 0 + "%";
    }
  });
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



// document.addEventListener("DOMContentLoaded", async function () {
//   const userCourses = await getUserCourse();
//   createBarFromCV_CID(userCourses);
// });


// createAllBar(userCourses, scheduleData);
(async () => {
  const userCourses = await getUserCourse();
  createBarFromCV_CID(userCourses);
  //updateBars(userCourses);
})();
