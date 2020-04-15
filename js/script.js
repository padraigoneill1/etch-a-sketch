container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.addEventListener("mouseover", function( event ) {   
      // highlight the mouseover target
      event.target.style.backgroundColor = "red";
      event.target.style.opacity = (getComputedStyle(event.target).getPropertyValue("opacity") - 0.1) ;
    
      // reset the color after a short delay
      setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(64, 64);


window.addEventListener('keydown', playSound);




