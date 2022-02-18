document.addEventListener('click', e => {
    /* makes a constant that finds data-dropdown-button */
    const isDropDownButton = e.target.matches("[data-dropdown-button]")
    /* checks if ur clicking in button gui  */
    if(!isDropDownButton && e.target.closest('[data-dropdown') != null) return;

    let currentDrop;
    if (isDropDownButton) {
        currentDrop = e.target.closest('[data-dropdown]');
        //hides/open dropdown depending itsactive state
        currentDrop.classList.toggle('active');
    }
    //closes all the other dropdown using foreach loop
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === currentDrop) return;
        dropdown.classList.remove("active");
    })
})