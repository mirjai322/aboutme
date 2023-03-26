let projects = document.querySelectorAll(".project");

document.addEventListener("scroll", checkProjects)
document.addEventListener("DOMContentLoaded", checkProjects)

function checkProjects()
{
  projects.forEach(function(project)
  {
    if(window.scrollY + window.innerHeight > project.offsetTop){
      project.classList.add("slide");
    }
    else{
      project.classList.remove("slide");
    }
  })
}