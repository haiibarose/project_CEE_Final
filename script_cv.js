// TODO #4.0: Change this IP address to EC2 instance public IP address when you are going to deploy this web application
const backendIPAddress = "52.4.6.88:3000";
// const backendIPAddress = "127.0.0.1:3000";

const authorizeApplication = () => {
  window.location.href = `http://${backendIPAddress}/courseville/auth_app`;
};

// TODO #3.1: Change group number
const getGroupNumber = () => {
  return 26;
};

// Example: Send Get user profile ("GET") request to backend server and show the response on the webpage
// const getUserProfile = async () => {
//   const options = {
//     method: "GET",
//     credentials: "include",
//   };
//   await fetch(
//     `http://${backendIPAddress}/courseville/get_profile_info`,
//     options
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       document.getElementById(
//         "eng-name-info"
//       ).innerHTML = `${data.user.title_en} ${data.user.firstname_en} ${data.user.lastname_en}`;
//       document.getElementById(
//         "thai-name-info"
//       ).innerHTML = `${data.user.title_th} ${data.user.firstname_th} ${data.user.lastname_th}`;
//     })
//     .catch((error) => console.error(error));
// };

// Update the getUserProfile function to return a Promise
const getUserProfile = async () => {
  const options = {
    method: "GET",
    credentials: "include",
  };
  return fetch(
    `http://${backendIPAddress}/courseville/get_profile_info`,
    options
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Not logged in");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById(
        "eng-name-info"
      ).innerHTML = `${data.user.title_en} ${data.user.firstname_en} ${data.user.lastname_en}`;
      document.getElementById(
        "thai-name-info"
      ).innerHTML = `${data.user.title_th} ${data.user.firstname_th} ${data.user.lastname_th}`;
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};









// TODO #3.3: Send Get Courses ("GET") request to backend server and filter the response to get Comp Eng Ess CV_cid
//            and display the result on the webpage
const getCompEngEssCid = async () => {
  const options = {
    method: "GET",
    credentials: "include",
  };
  const res = await fetch(
    `http://${backendIPAddress}/courseville/get_courses`, options).then((response) => response.json())
  const data = res.data.student
  const v = data.find(x => x.course_no == "2110221");
  document.getElementById("ces-cid-value").innerHTML = v.cv_cid;
};

// TODO #3.5: Send Get Course Assignments ("GET") request with cv_cid to backend server
//            and create Comp Eng Ess assignments table based on the response (itemid, title)
const createCompEngEssAssignmentTable = async () => {
  const options = {
    method: "GET",
    credentials: "include",
  };
  const table_body = document.getElementById("main-table-body");
  table_body.innerHTML = "";
  const cv_cid = document.getElementById("ces-cid-value").innerHTML;

  const res = await fetch(`http://${backendIPAddress}/courseville/get_course_assignments/${cv_cid}`, options).then(res => res.json())
  const data = res.data;

  data.forEach(({ itemid, title }) => {
    table_body.innerHTML += `<tr><td>${itemid}</td><td>${title}</td></tr>`
  })
  console.log(data)
};

const logout = async () => {
  window.location.href = `http://${backendIPAddress}/courseville/logout`;
};

document.getElementById("group-id").innerHTML = getGroupNumber();


// Add this function to update the login status text
function updateStatusText(status) {
  const statusText = document.getElementById("statusText");
  statusText.innerText = status;
}


// Add this function to check the login status when the page loads
// Modify the checkLoginStatus() function
async function checkLoginStatus() {
  try {
    const loggedIn = await getUserProfile();
    const loginButton = document.getElementById("loginButton");

    if (loggedIn) {
      updateStatusText("Logged in");
      // Change the login button text and functionality when the user is logged in
      loginButton.innerText = "Go to Home";
      loginButton.onclick = function () {
        // Replace 'home.html' with the URL of your home page
        window.location.href = "home.html";
      };
    } else {
      updateStatusText("You're already login");
      // Reset the login button text and functionality when the user is logged out
      loginButton.innerText = "Login";
      loginButton.onclick = authorizeApplication;
    }
  } catch (error) {
    // Display "Logged out" when the user is not logged in
    updateStatusText("You're already login");
  }
}



// Call checkLoginStatus() when the page loads
document.addEventListener("DOMContentLoaded", checkLoginStatus);