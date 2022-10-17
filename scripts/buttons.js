addEventListener("click", (event) => {
  clicked = event.path[0].id;
  const bodyElement = document.getElementById("body-container");
  let newHTML = "<p>Error</p>";
  let validClick = true;

  switch (clicked) {
    case "projects_button":
      newHTML = '<object type="text/html" data="pages/projects.html"></object>';
      break;

    case "resume_button":
        newHTML = '<object style="min-height:70vh; flex:1;" type="text/html" data="pages/resume.html"></object>';
      break;

    case "about_button":
        newHTML = '<object type="text/html" data="pages/about-me.html"></object>';
      break;

    default:
      validClick = false;
      break;
  }

  if (validClick) {
    bodyElement.innerHTML = newHTML;
  } else {
    console.log("no valid button clicked");
  }
});
