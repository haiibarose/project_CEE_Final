// adding scroll on webpage
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

function expandDetails() {
  var btn = document.getElementsByClassName("progressDetails");
  var i = 0;
  for (i ; i < btn.length ; i++) {
    if (btn[i].style.display === 'none') {
      btn[i].style.display = 'flex';
    }
    else {
      btn[i].style.display = 'none';
    }
  }
}


// adding new subject and progressBar

function addNewSubject(subjectName, teacherProgress) {
    // Select the "subjects" container
    const subjects = document.querySelector('.subjects');

    // Create a new element
    const newElement = document.createElement('div');
    newElement.className = subjectName;

    // Get the styles of the existing children elements
    const existingChildren = subjects.children;
    const styles = window.getComputedStyle(existingChildren[0]);

    // Apply the styles to the new element and set the text color to white
    for (let i = 0; i < styles.length; i++) {
        const styleName = styles[i];
        newElement.style[styleName] = styles.getPropertyValue(styleName);
    }

    // Add some content to the new element and set the text color to white
    newElement.innerHTML = '<h2 style="color: white">' + subjectName + '</h2>' +
                           '<div class="teacher">' +
                           '<h2 class="barName" style="color: white !important">teacher-progress</h2>' +
                           '<div class="progressBar">' +
                           '<div class="teacherProgressBar">' +
                           '<span class="progressBox" style="color: white">80</span>' +
                           '</div>' +
                           '</div>' +
                           '</div>' +
                           '<div class="student">' +
                           '<h2 class="barName" style="color: white !important">student-progress</h2>' +
                           '<div class="progressBar">' +
                           '<div class="studentProgressBar">' +
                           '<span class="progressBox" style="color: white">40</span>' +
                           '</div>' +
                           '</div>' +
                           '</div>';
    

    // Append the new element to the "subjects" container
    const teacherProgressBar = newElement.querySelector('.teacherProgressBar');
    teacherProgressBar.style.height = '10px';
    teacherProgressBar.style.borderRadius = '5px';
    teacherProgressBar.style.width = teacherProgress;
    teacherProgressBar.style.position = 'relative';
    teacherProgressBar.style.background = 'goldenrod';

    subjects.appendChild(newElement);
}

addNewSubject("Calculus", "50%");