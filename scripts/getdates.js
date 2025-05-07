const courses = [
    { code: "CSE 110", name: "Introduction to Programming", credits: 2, completed: true },
    { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
    { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: true },
    { code: "CSE 210", name: "Object-Oriented Programming", credits: 2, completed: false },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: false },
    { code: "WDD 231", name: "Frontend Development I", credits: 2, completed: false }
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
      if (course.completed) total += course.credits;
      grid.appendChild(div);
    });
  
    document.getElementById("total-credits").textContent = `Total Credits: ${total}`;
  }
  
  function filterCourses(filter) {
    displayCourses(filter);
  }
  

  
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("menuToggle");
    const nav = document.querySelector(".top-nav ul");
  
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  
    document.getElementById("currentyear").textContent = new Date().getFullYear();
  
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  });
  
