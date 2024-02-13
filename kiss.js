function nextPage() {
  document.getElementById("buttons").remove();
  document.getElementById("image2").classList.remove("hide"); 
  document.getElementById("text2").classList.remove("hide"); 
  document.getElementById("text1").classList.add("hide");
  document.getElementById("image1").classList.add("hide"); 
  }

  function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById("noButton").offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById("noButton").offsetHeight);
    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
  }