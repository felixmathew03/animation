function circle(e){
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById("c").style.left=`${x}px`;
    document.getElementById("c").style.top=`${y}px`;
}