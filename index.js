
function getColor () {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    const color = `rgb(${r}, ${g}, ${b})`;
    
    
    document.body.style.background = color;
    document.body.innerHTML = `<h2> ${color} </h2>`
    
}

setInterval(getColor, 1100)

// les deux option marche mais dans e haut on n'a declarer cela dans un fonction qu'on peux r'appeller quand on veux les 2 sont bien

// setInterval(function () {
//   let color1 = Math.floor(Math.random() * 255);
//   let color2 = Math.floor(Math.random() * 255);
//   let color3 = Math.floor(Math.random() * 255);

//   document.body.style.background = `rgb(${color1}, ${color2}, ${color3})`;

//   colorBackground.innerHTML = `rgb (${color1}, ${color2}, ${color3}) `;
// }, 2000);
