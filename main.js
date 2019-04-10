var membersSlideIndex = 0;
bandSlide();

function bandSlide() {
  var i;
  var slide = document.getElementsByClassName("bandSlide");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  membersSlideIndex++;
  if (membersSlideIndex > slide.length) {membersSlideIndex = 1}    
  slide[membersSlideIndex-1].style.display = "block";  
  setTimeout(bandSlide, 3000); // Change image every 3 seconds
}