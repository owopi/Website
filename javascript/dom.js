let home = document.getElementById("home")
let link = document.getElementById("homelink")
let link2 = document.getElementById("homelink2")


function myFunction(x) {
    if (x.matches) { // If media query matches
        home.style.display = 'block';
        link.style.display = 'block';
        link2.style.display = 'none';
        console.log("Homepage is being turned on")
        console.log("This is being runned")
    } else {
        home.style.display = 'none';
        link.style.display = 'none';
        link2.style.display = 'block';
        console.log("Homepage display is off")
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
