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
        console.log("Button 1");
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
        console.log("BUtton 2");
    }
    document.querySelectorAll("[data-dropdown1].active").forEach(dropdown => {
        if(dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    })
}) 
/* var body = document.getElementsByTagName("body")[0];
failed attempts

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

var controller = true;
function toggle() {
    console.log(controller);
    /* get all elements whose id starts with click so click1, click2 etc.*/
    let test = document.querySelectorAll('*[id^="click"]');
    /* if we want just the first id that starts with click just remove all in querySelectorAll */
    let sidebar = document.querySelectorAll('*[id^="side"]');
    let logo = document.querySelector('.logo > .link');
 
    var list = Array.from(test);
    var side = Array.from(sidebar);
    console.log(list);
    
    switch (controller) {
        case true:
            controller = false;
            list.forEach(test => {
                console.log(test)
                test.classList.add('link_text_show');
            });
            side.forEach(test => {
                console.log(test)
                test.classList.add('sidebar_show');
            });
            logo.classList.add('link_expand');
            console.log("False is activated");
            console.log(controller);
            break;
        case false:
            controller = true;
            list.forEach(test => {
                console.log(test)
                test.classList.remove('link_text_show');
            });
            side.forEach(test => {
                console.log(test)
                test.classList.remove('sidebar_show');
            });
            logo.classList.remove('link_expand');
            console.log("True is activated");
            console.log(controller);
            break;
        default:
            console.log("Default is activated");
            break;
    }
}

function appear() {
    const classes = document.querySelectorAll("div.together > p");
    const paragraph = document.querySelector(".appear");
    const appearword = document.querySelector(".appearword");
    const appear = document.querySelectorAll("div.textCenter > div.appear > p");
    var words = [];
    for(var i = 0; i < classes.length; i++) {
            words.push(classes[i].textContent);
        }
        const booton = document.getElementById("ani");
        booton.textContent = "Close content? Click me!";
        if(appearword){
            function remove_last() {
                //join() returns an array as a string:
                let base = words.join(" ");
                //split() splits a string into an array of substrings, and returns the array:
                let base_split = base.split(" ");
                //this curly bracket is on purpose
                {
                    /* base_split.pop();
                    let final_base = base_split.join(" ");
                    console.log(final_base);
                    paragraph.innerHTML = `<p class="appearword">${final_base}</p>` */
                    let count = 0;
                    let something = setInterval(() => {
                        let span = paragraph.querySelectorAll('p')[count]
                        span.classList.remove('appearword');
                        count++;
                            if(count === words.length) {
                                clearInterval(something);
                                something = undefined;
                                return;
                            }
                        }, 200)

                        setTimeout(function(){
                            let list = document.getElementById("disappear");

                            // As long as id#disappear has a child node, remove it
                            while (list.hasChildNodes()) {  
                              list.removeChild(list.firstChild);
                            }
                            booton.textContent = "Want a summary? Click me!!";
                       }, 3000);
                    };
                }
                remove_last()
            }
            /* setInterval(remove_last(), 40) */
    else if(!appearword) {
        words.forEach((item) => {
            console.log(item)
            paragraph.innerHTML += `<p>${item}</p>`
            /* console.log(paragraph) */
            return;
        })
        
        
        let count = 0;
        let something = setInterval(() => {
            let span = paragraph.querySelectorAll('p')[count]
            span.classList.add('appearword');
            count++;
                if(count === words.length) {
                    clearInterval(something);
                    something = undefined;
                    return;
                }
            }, 200)
        }
    else {
        document.write("The text could not be run, try refreshing the page or revisting the page? You can report this error <a href=\"https://github.com/owopi/Website/issues\">here</a>.")
    }
}