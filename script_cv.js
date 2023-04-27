  // TODO #4.0: Change this IP address to EC2 instance public IP address when you are going to deploy this web application
  const backendIPAddress = "127.0.0.1:3000";

  const authorizeApplication = () => {
    window.location.href = `http://${backendIPAddress}/courseville/auth_app`;
  };
  
  // TODO #3.1: Change group number
  const getGroupNumber = () => {
    return 26;
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
        document.getElementById(
          "eng-name-info"
        ).innerHTML = `${data.user.title_en} ${data.user.firstname_en} ${data.user.lastname_en}`;
        document.getElementById(
          "thai-name-info"
        ).innerHTML = `${data.user.title_th} ${data.user.firstname_th} ${data.user.lastname_th}`;
      })
      .catch((error) => console.error(error));
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
  
    data.forEach(({itemid, title}) => {
      table_body.innerHTML += `<tr><td>${itemid}</td><td>${title}</td></tr>`
    })
    console.log(data)
  };
  
  const logout = async () => {
    window.location.href = `http://${backendIPAddress}/courseville/logout`;
  };
  
  document.getElementById("group-id").innerHTML = getGroupNumber();



  