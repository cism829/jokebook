const jokeBtn = document.getElementById('new-joke-btn');
const formPopup = document.getElementById('form-popup');
const cancelBtn = document.getElementById('cancel-btn');

const revealJoke = document.querySelectorAll('#show-joke');
const jokeDeliv = document.querySelectorAll('.delivery');

const searchForm = document.getElementById('search-bar'); 
const searchInput = document.getElementById('S-input'); 


/**
 * gets the category and returns that url with inputed category
 */
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();  
    console.log(searchInput.value);
    let category = searchInput.value;
    window.location.href = "/jokebook/joke/"+ category;  
});


/**
 * function for opening the new joke form
 */
jokeBtn.addEventListener("click", () => {
    formPopup.style.display = "block";
    jokeBtn.style.display = "none";
});

/**
 * funciton for closing the new joke form
 */
cancelBtn.addEventListener("click", () => {
    formPopup.style.display = "none";  
    jokeBtn.style.display = "block";
});

for (let i = 0; i < revealJoke.length; i++) {
    revealJoke[i].addEventListener("click", function () {
        revealPunchline(i);
    });
}

/**
 * function for revealing the punchline of the joke #nospoilers
 * @param {*} index 
 */
function revealPunchline(index) {
    jokeDeliv[index].style.display = "block";
    revealJoke[index].style.display = "none"; 
}

