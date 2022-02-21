 document.addEventListener('click', e => {
    // makes a constant that finds data-dropdown-button
    const isDropDownButton = e.target.matches("[data-dropdown-button]")
    const isDropDownButton1 = e.target.matches("[data-dropdown-button1]")
    // checks if ur clicking in button gui
    if(!isDropDownButton && e.target.closest('[data-dropdown]') != null) return;
    let currentDrop;
    if (isDropDownButton) {
        console.log("Clicked");
        currentDrop = e.target.closest('[data-dropdown]');
        //hides/open dropdown depending itsactive state
        currentDrop.classList.toggle('active');
    }
    //closes all the other dropdown using foreach loop
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === currentDrop) return;
        dropdown.classList.remove("active");
    })
    /* honestly there is no need for second but then I would have to mess with z-index and do more testing */
    if(!isDropDownButton1 && e.target.closest('[data-dropdown1]') != null) return;
    let currentDropdown;
    if (isDropDownButton1) {
        console.log("Clicked");
        currentDropdown = e.target.closest('[data-dropdown1]');
        currentDropdown.classList.toggle('active');
    }
    document.querySelectorAll("[data-dropdown1].active").forEach(dropdown => {
        if(dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    })
}) 
/* var body = document.getElementsByTagName("body")[0];

body.onclick = function toggle(e) {
    const isDropDownButton = e.target.matches("[data-dropdown-button1]");
     var isDropDownButton = document.getElementsByClassName("data-dropdown-button")
    if(!isDropDownButton && e.target.closest('[data-dropdown') != null) return;
    console.log("test1");
    let currentDrop;
    if (isDropDownButton) {
        console.log("Clicked")
        currentDrop = e.target.closest('[data-dropdown]');
        //hides/open dropdown depending itsactive state
        currentDrop.classList.toggle('active');
    }
    //closes all the other dropdown using foreach loop
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === currentDrop) return;
        dropdown.classList.remove("active");
    })
}
 */
/* var body = document.querySelector("body");
var nav = document.querySelector('.navbarbg');
var nodeArr = [].slice.call(nav.childNodes);

function closeAll(e) {
  if (nodeArr.indexOf(e.target) !== -1) {
    console.log('closing the nav')
    nav.classList.remove("main-nav--open");
  } else {
    console.log('clicked inside nav')
    let currentDrop;
    currentDrop = e.target.closest('[data-dropdown]')
    currentDrop.classList.toggle("active")
  }
}

body.addEventListener('click', closeAll) */