const linkContainer = document.querySelector(".nav_links");
const links = linkContainer.querySelectorAll(".link");

links.forEach(l => {
    l.addEventListener("click", function() {
        const current = document.getElementsByClassName("active_link");
        current[0].className = current[0].className.replace(" active_link", "");
        this.className += " active_link";
      });
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


renDrop = document.querySelector(".dropbtn");
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
renDrop.addEventListener('click', () => {
  document.getElementById("myDropdown").classList.toggle("show");
})

// Close the dropdown menu if the user clicks outside of it
/* window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} */