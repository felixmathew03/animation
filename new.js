function circle(e){
    let x = e.clientX;
    let y = e.clientY;
    
    if(x<=500 && y<=500){
        console.log("hai");
        document.getElementById("c").style.border="1px solid blue";
    }
    else if(x<=1000 && y<=1000){
        document.getElementById("c").style.border="1px solid red";
    }
    else{
        document.getElementById("c").style.border="1px solid rgb(255, 52, 17)"
    }
    document.getElementById("c").style.left=`${x}px`;
    document.getElementById("c").style.top=`${y}px`;
}