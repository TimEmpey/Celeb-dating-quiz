//Logic
function hideResults() {
  document.getElementById("Ryan-Gosling").setAttribute("class", "hidden");
  document.getElementById("Chris-Hemsworth").setAttribute("class", "hidden");
  document.getElementById("Kendall-Jenner").setAttribute("class", "hidden");
  document.getElementById("Megan-Fox").setAttribute("class", "hidden");
}

window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    let goslingInfo = document.getElementById("Ryan-Gosling");
    goslingInfo.setAttribute("class", "hidden");
    let hemsworthInfo = document.getElementById("Chris-Hemsworth");
    hemsworthInfo.setAttribute("class", "hidden");
    let jennerInfo = document.getElementById("Kendall-Jenner");
    jennerInfo.setAttribute("class", "hidden");
    let foxInfo = document.getElementById("Megan-Fox");
    foxInfo.setAttribute("class", "hidden");

    const element = document.querySelector("input#elementInput").value;
    const food = document.querySelector("input#foodInput").value;

    if (element === "fire" && food === "Tom yum soup"){
      goslingInfo.removeAttribute("class");
      console.log("working");
    } else if (element === "water" && food === "tofu"){
      hemsworthInfo.removeAttribute("class");
      console.log("working2");
    } else if (element === "air" && food === "salad"){
      jennerInfo.removeAttribute("class");
      console.log("working3");
    } else if (element === "earth" && food === "calamari"){
      foxInfo.removeAttribute("class");
      console.log("working4");
    } else {
      window.alert("You are not compatible :(");
    }
    
  };
};
