// Modal

const modal = document.getElementById('primaryModal');

const btn = document.getElementById('modalBtn');

var span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// End modal