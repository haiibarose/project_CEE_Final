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
        console.log(itemsData);
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
    .then((data) => console.log(data));
    console.log("kuays");
    // .then((data) => {
    //   document.getElementById(
    //     "eng-name-info"
    //   ).innerHTML = `${data.user.title_en} ${data.user.firstname_en} ${data.user.lastname_en}`;
    //   document.getElementById(
    //     "thai-name-info"
    //   ).innerHTML = `${data.user.title_th} ${data.user.firstname_th} ${data.user.lastname_th}`;
    // })
    // .catch((error) => console.error(error));
};

// getCourseInfo

const getUserCourse = async () => {
  const options = {
    method: "GET",
    credentials: "include",
  };
  await fetch(
    `http://${backendIPAddress}/courseville/get_profile_info`,
    options
  )
  .then((response) => response.json())
  .then((data) => console.log(data));
  console.log("test"); 
};



// adding scroll on webpage
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}


userCourses = {
  "data": {
    "student": [
      {
        "cv_cid": 29667,
        "course_no": "2110101.05",
        "year": "2022",
        "semester": 1,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 29362,
        "course_no": "2100111",
        "year": "2022",
        "semester": 1,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 29665,
        "course_no": "2110101",
        "year": "2022",
        "semester": 1,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 29880,
        "course_no": "2301107",
        "year": "2022",
        "semester": 1,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 30880,
        "course_no": "2304103",
        "year": "2022",
        "semester": 1,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 28924,
        "course_no": "CU.CP.101",
        "year": "2022",
        "semester": 1,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 28925,
        "course_no": "CU.CP.101.PART2",
        "year": "2022",
        "semester": 1,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 30644,
        "course_no": "2304183",
        "year": "2022",
        "semester": 1,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 31179,
        "course_no": "2304103.04",
        "year": "2022",
        "semester": 1,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 31315,
        "course_no": "ESC.PSN",
        "year": "2022",
        "semester": 1,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 32200,
        "course_no": "2110215",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 32873,
        "course_no": "2301108.06",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 31887,
        "course_no": "2304184",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 31543,
        "course_no": "SHECU.026",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 32201,
        "course_no": "2110221",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 33808,
        "course_no": "2302127",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 33985,
        "course_no": "2302163",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 34095,
        "course_no": "2304104",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 31531,
        "course_no": "SHECU.012",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 31927,
        "course_no": "SHECU.004.MOOC",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 31574,
        "course_no": "SHECU.003.MOOC",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 34406,
        "course_no": "ESC.PSN",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      },
      {
        "cv_cid": 34598,
        "course_no": "CUVIPC009",
        "year": "2022",
        "semester": 2,
        "section": "0",
        "role": "student"
      }
    ]
  },
  "status": 1
}

// comengess scheduleData
scheduleData = {"status": 1,
"data": [
  {
    "itemid": 69337,
    "type": "schedule_item",
    "status": 1,
    "title": "Basic Java",
    "description": "",
    "comment": "",
    "datetime": "2023-01-11",
    "weekno": "Lecture 0",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69338,
    "type": "schedule_item",
    "status": 1,
    "title": "OOP + Exception + Exercise 1",
    "description": "",
    "comment": "",
    "datetime": "2023-01-18",
    "weekno": "Lecture 1",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69339,
    "type": "schedule_item",
    "status": 1,
    "title": "OOP + Exception",
    "description": "",
    "comment": "",
    "datetime": "2023-02-01",
    "weekno": "Lab1",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69340,
    "type": "schedule_item",
    "status": 1,
    "title": "Inheritance + JUnit+ Exercise 2 ",
    "description": "",
    "comment": "",
    "datetime": "2023-02-08",
    "weekno": "Lecture 2",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69341,
    "type": "schedule_item",
    "status": 1,
    "title": "Inheritance + JUnit",
    "description": "",
    "comment": "",
    "datetime": "2023-02-15",
    "weekno": "Lab2",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69342,
    "type": "schedule_item",
    "status": 1,
    "title": "Abstract class + Exercise 3",
    "description": "",
    "comment": "",
    "datetime": "2023-02-22",
    "weekno": "Lecture 3",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69343,
    "type": "schedule_item",
    "status": 1,
    "title": "Abstract class + Writing JUnit",
    "description": "",
    "comment": "",
    "datetime": "2023-03-01",
    "weekno": "Lab 3",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69344,
    "type": "schedule_item",
    "status": 1,
    "title": "Interface (Polymorphism) + Exercise 4",
    "description": "",
    "comment": "",
    "datetime": "2023-03-15",
    "weekno": "Lecture 4",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69345,
    "type": "schedule_item",
    "status": 1,
    "title": "Interface lab + Exception",
    "description": "",
    "comment": "",
    "datetime": "2023-03-22",
    "weekno": "Lab 4",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69346,
    "type": "schedule_item",
    "status": 1,
    "title": "GUI (Form; Fx) + Exercise 5",
    "description": "",
    "comment": "",
    "datetime": "2023-03-29",
    "weekno": "Lecture 5",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69347,
    "type": "schedule_item",
    "status": 1,
    "title": "GUI",
    "description": "",
    "comment": "",
    "datetime": "2023-04-05",
    "weekno": "Lab 5",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69348,
    "type": "schedule_item",
    "status": 1,
    "title": "threads",
    "description": "",
    "comment": "",
    "datetime": "2023-04-12",
    "weekno": "Lecture 6",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69349,
    "type": "schedule_item",
    "status": 1,
    "title": "Threads",
    "description": "",
    "comment": "",
    "datetime": "2023-04-19",
    "weekno": "lab 6",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69350,
    "type": "schedule_item",
    "status": 1,
    "title": "Graphics",
    "description": "",
    "comment": "",
    "datetime": "2023-04-26",
    "weekno": "Lecture 7",
    "start_epoch": "0",
    "end_epoch": "0"
  },
  {
    "itemid": 69351,
    "type": "schedule_item",
    "status": 1,
    "title": "",
    "description": "",
    "comment": "",
    "datetime": "2023-05-03",
    "weekno": "Revision",
    "start_epoch": "0",
    "end_epoch": "0"
  }
]
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
    details.appendChild(cb);
    details.appendChild(sp)
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


function combineSubject(name, teacherProgress, studentProgress, scheduleFileData) {
  const subj = generateNewSubject(name);
  const subjTeacher = generateTeacherBar(teacherProgress);
  const subjStudent = generateStudentBar(studentProgress);
  const subjDetails = createDetailsButton(scheduleFileData);

  subj.appendChild(subjTeacher);
  subj.appendChild(subjStudent);
  subj.appendChild(subjDetails);
  
  return subj
}

// make progressBar from schedule

document.querySelector('.subjects').appendChild(combineSubject("Chemistry", "80", "40", scheduleData));
document.querySelector('.subjects').appendChild(combineSubject("Chemistry", "80", "40", scheduleData));
getUserProfile();
getUserCourse();
