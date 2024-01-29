// Get the modal
var modal_2 = document.getElementById("myModal_2");

// Get the button that opens the modal
var btn_2 = document.getElementById("myBtn_2");

// Get the <span> element that closes the modal
var span_2 = document.getElementsByClassName("close_2")[0];

// When the user clicks the button, open the modal 
btn_2.onclick = function() {
  modal_2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_2.onclick = function() {
  modal_2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_2) {
    modal_2.style.display = "none";
  }
}