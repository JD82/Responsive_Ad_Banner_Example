var stackIndex = 1;
//carousel(stackIndex);

function stack(x) {
  carousel((stackIndex += x));
}

function currentAd(x) {
  carousel(stackIndex = x);
}

function carousel(x) {
  var i;
  var adList = document.getElementsByClassName("ads");
  var bullets = document.getElementsByClassName("dot");
  
  if (x > adList.length) {
    stackIndex = 1;
  }
  if (x < 1) {
    stackIndex = adList.length;
  }
  for (i = 0; i < adList.length; i++) {
    adList[i].style.display = "none";
  }

  for (i = 0; i < bullets.length; i++) {
    bullets[i].classname = bullets[i].className.replace("active", "")
  }
  adList[stackIndex - 1].style.display = "block";
  bullets[stackIndex - 1].className += "active";
}

