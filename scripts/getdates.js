const courses = [
  {
    code: "CSE 110",
    name: "Introduction to Programming",
    credits: 2,
    completed: true,
    description: "CSE 110 is an introductory programming course that focuses on fundamental concepts, problem-solving, and basic program design and implementation, typically using a language like Python or Java.",
    certificate: "Web & Computer Programming",
    technology: ["Python", "Pseudocode"]
  },
  {
    code: "WDD 130",
    name: "Web Fundamentals",
    credits: 2,
    completed: true,
    description: "Web Fundamentals,is an introductory course focusing on the basics of web design and development. It covers web technology, design principles, and practical application through hands-on projects, aiming to provide students with a foundation in the field and help them determine if they want to pursue web design and development as a career.",
    certificate: "Web & Computer Programming",
    technology: ["HTML", "CSS"]
  },
  {
    code: "CSE 111",
    name: "Programming with Functions",
    credits: 2,
    completed: true,
    description: "Write and call functions in programs to accomplish meaningful tasks in a variety of domains. Research and call functions written by others. Write programs that can detect and recover from invalid conditions.",
    certificate: "Web & Computer Programming",
    technology: ["Python"]
  },
  {
    code: "CSE 210",
    name: "Object-Oriented Programming",
    credits: 2,
    completed: false,
    description: "Articulate the principles of programming with classes. Design software using the principles of programming with classes. Develop working software using the techniques of programming with classes.",
    certificate: "Web & Computer Programming",
    technology: ["Java", "UML"]
  },
  {
    code: "WDD 131",
    name: "Dynamic Web Fundamentals",
    credits: 2,
    completed: false,
    description: "Develop responsive web pages that follow best practices and use valid HTML and CSS. Demonstrate proficiency with JavaScript language syntax. Use JavaScript to respond to events and dynamically modify HTML.",
    certificate: "Web & Computer Programming",
    technology: ["JavaScript", "DOM"]
  },
  {
    code: "WDD 231",
    name: "Frontend Development I",
    credits: 2,
    completed: false,
    description: "Develop dynamic websites that use valid HTML and CSS that follow best practices of accessibility and compliance. Create dynamic web sites that leverage browser APIs, JSON, and remote APIs. Use industry tools to monitor performance and to optimize the user experience",
    certificate: "Web & Computer Programming",
    technology: ["JavaScript", "Fetch API", "CSS Grid"]
  }
];

function displayCourses(filter = "all") {
  const grid = document.getElementById("course-grid");
  grid.innerHTML = "";
  let total = 0;

  const filtered = courses.filter(course => {
    return filter === "all" || course.code.startsWith(filter);
  });

  filtered.forEach(course => {
    const div = document.createElement("div");
    div.className = "course " + (course.completed ? "completed" : "incomplete");
    div.textContent = course.code;

    div.addEventListener("click", () => {
      displayCourseDetails(course);
    });

    if (course.completed) total += course.credits;
    grid.appendChild(div);
  });

  document.getElementById("total-credits").textContent = `Total Credits: ${total}`;
}

function filterCourses(filter) {
  displayCourses(filter);
}

const courseDetails = document.getElementById("course-details");

function displayCourseDetails(course) {
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.code}</h2>
    <h3>${course.name}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
  `;
  courseDetails.showModal();

  document.getElementById("closeModal").addEventListener("click", () => {
    courseDetails.close();
  });

  courseDetails.addEventListener("click", (e) => {
    if (e.target === courseDetails) {
      courseDetails.close();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayCourses();

  const toggleBtn = document.getElementById("menuToggle");
  const nav = document.querySelector(".top-nav ul");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});

  
