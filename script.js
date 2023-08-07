// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

const downloadButton = document.getElementById('downloadButton');

// Attach a click event listener to the button
downloadButton.addEventListener('click', () => {
    // Set the file name and path to the PDF file
    const fileName = 'Resume.pdf';
    const filePath = './pdf/Resume.pdf'; // Update the path if needed  E:\PILLAI ENGINEERING\INTERNSHIP\Tasks\portfolio\1\pdf\Resume.pdf

    // Create a hidden anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = filePath;
    downloadLink.download = fileName;

    // Append the anchor element to the document and trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the anchor element from the document after the download starts
    setTimeout(() => {
        document.body.removeChild(downloadLink);
    }, 100);
});

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}