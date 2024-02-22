// Login Modal Script

const loginModal = document.getElementById("loginModal");
const openModalButton = document.getElementById("openModal");
const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

function openModal() {
  loginModal.style.display = "block";
}

function closeModal() {
  loginModal.style.display = "none";
}

openModalButton.addEventListener("click", openModal);
openModalButton.addEventListener("dblclick", closeModal);
// Close the modal when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target === loginModal) {
    closeModal();
  }
});

// Close the modal when pressing the ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

loginBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      signupBtn.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      loginBtn.parentNode.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});