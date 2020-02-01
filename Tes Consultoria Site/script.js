var checkLoadBody;

var onLoadBody = () => {
  if (!checkLoadBody) {
    document
      .querySelectorAll(".boxSlider")[0]
      .setAttribute("style", "--s-height: " + window.innerHeight);
    checkLoadBody = true;
  }
};

onLoadBody();

function openMobile() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// NAV FLOW
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("whats_over").style.position = "inherit";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("whats_over").style.position = "fixed";
}
