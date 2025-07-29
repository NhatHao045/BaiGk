document.addEventListener("DOMContentLoaded", function () {
  const aboutBtn = document.getElementById("about-btn");

  if (aboutBtn) {
    aboutBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
      window.location.href = "aboutme.html"; // Chuyển hướng đến trang aboutme.html
    });
  }
  const skillBtn = document.getElementById("skill-btn");
  if (skillBtn) {
    skillBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "skill.html";
    });
  }
  const educationBtn = document.getElementById("education-btn");
if (educationBtn) {
  educationBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn chuyển hướng mặc định
    window.location.href = "Education.html"; // Chuyển sang trang Education
  });
}
const experienceBtn = document.getElementById("experience-btn");
if (experienceBtn) {
  experienceBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn hành vi mặc định
    window.location.href = "Experience.html"; // Chuyển sang Experience.html
  });
}
const contactBtn = document.getElementById("contact-btn");
if (contactBtn) {
  contactBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn hành vi mặc định
    window.location.href = "contact.html"; // Chuyển sang contact.html
  });
}
});