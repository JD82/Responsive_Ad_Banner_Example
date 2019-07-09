var stackIndex = 1;
//carousel(stackIndex);

function stack(x) {
  carousel((stackIndex += x));
}

function currentAd(x) {
  carousel(stackIndex = x);
}

function carousel(x) {
  //Console Log the current slide after arrow is clicked
  console.log("Slide" + " " + x);
  var i;
  var adList = document.getElementsByClassName("ads");
  var bullets = document.getElementsByClassName("dot");
  var img = document.createElement("img");
  img.setAttribute("src", "https://bs.serving-sys.com/serving/adServer.bs?cn=display&c=19&mc=imp&pli=28240034&PluID=0&ord=[timestamp]&rtu=-1&pcp=$$$$page_view_id=%%PATTERN:page_view_id%%&pos=%%PATTERN:pos%%$$$$");
  document.body.appendChild(img);
  console.log("Pixel Fired");
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
//Console log the First Slide on page Load
function adLoad() {
  console.log("Slide 1");
}
