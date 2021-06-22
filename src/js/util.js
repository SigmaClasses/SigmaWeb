function MyFunction() {
  // alert("called")
  var x = document.getElementById("myTopnav");
  if (x === null) { console.log("x is null") }
  else {
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}


function BodyScrollToTop() {
  //below will set the view on top
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function StickMenu() {
  let appMenuDiv = document.getElementById("AppMenuDiv");
  let stickyPoint = appMenuDiv.offsetTop;

  document.addEventListener('scroll', () => {
    if (window.pageYOffset > stickyPoint) {
      appMenuDiv.classList.add("StickAppMenu");
    }

    else {
      appMenuDiv.classList.remove("StickAppMenu");
    }

  });
}

