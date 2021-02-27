
var objeto = document.querySelectorAll('.img_show');
var newObjeto = document.createElement('img');

var fondo = document.createElement('div');

var row_left = document.createElement('div');
var row_right = document.createElement('div');
var btn_exit = document.createElement('div');

var ilus_left = document.createElement('i');
var ilus_rigth = document.createElement('i');
var ilus_exit = document.createElement('i');

var index_img = 0;

for (let i = 0; i < objeto.length; i++) {
    objeto[i].addEventListener('click', () => {
        newObjeto.style.width = "500px";
        newObjeto.style.height = "500px";
        newObjeto.style.position = "fixed";
        newObjeto.style.top = "50%";
        newObjeto.style.left = "50%";
        newObjeto.style.transform = "translate(-50%,-50%)";
        newObjeto.style.zIndex = "1000";
        newObjeto.src = objeto[i].src;
        index_img = i;
    
        show_fondo();
        show_rowLeft();
        show_rowRight();
        show_exit();
    });  
}


row_right.addEventListener('click', () => {
    if(index_img < objeto.length){
        index_img++;
        newObjeto.src = objeto[index_img].src;
    }else{
        console.log('null elements: right')
    }
});

row_left.addEventListener('click', () => {
    if(index_img >= 0){
        index_img--;
        newObjeto.src = objeto[index_img].src;
    }else{
        console.log('null elements: left')
    }
});

btn_exit.addEventListener('click', () => {
    document.getElementById('catalogo').removeChild(fondo);
});

function show_fondo(){
    fondo.style.position = "fixed";
    fondo.style.top = "0";
    fondo.style.left = "0";
    fondo.style.width = "100%";
    fondo.style.height= "100vh";
    fondo.style.background = "rgba(0, 0, 0, 0.8)";
    fondo.style.zIndex = "999";
    fondo.classList.add('fondo');
    document.getElementById('catalogo').appendChild(fondo);
    fondo.appendChild(newObjeto);
}

function show_rowLeft(){
    ilus_left.classList.add('fas');
    ilus_left.classList.add('fa-arrow-left');

    row_left.style.width = "30px";
    row_left.style.height = "30px";

    row_left.style.display = "flex";
    row_left.style.justifyContent = "center";
    row_left.style.alignItems = "center";
    row_left.style.position = "fixed";
    row_left.style.top = "50%";
    row_left.style.left = "50px";
    row_left.style.background = "#fff";
    row_left.style.padding = "10px";
    row_left.style.zIndex = "9999";
    row_left.style.cursor = "pointer";
    row_left.style.borderRadius = "20px";
    row_left.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)"


    row_left.appendChild(ilus_left);
    fondo.appendChild(row_left);
}

function show_rowRight(){

    ilus_rigth.classList.add('fas');
    ilus_rigth.classList.add('fa-arrow-right');

    row_right.style.width = "30px";
    row_right.style.height = "30px";

    row_right.style.display = "flex";
    row_right.style.justifyContent = "center";
    row_right.style.alignItems = "center";
    row_right.style.position = "fixed";
    row_right.style.top = "50%";
    row_right.style.right = "50px";
    row_right.style.background = "#fff";
    row_right.style.padding = "10px";
    row_right.style.zIndex = "9999";
    row_right.style.cursor = "pointer";
    row_right.style.borderRadius = "20px";
    row_right.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)"

    row_right.appendChild(ilus_rigth);
    fondo.appendChild(row_right);
}

function show_exit(){
    btn_exit.classList.add('fas');
    btn_exit.classList.add('fa-times');

    btn_exit.style.width = "30px";
    btn_exit.style.height = "30px";

    btn_exit.style.display = "flex";
    btn_exit.style.justifyContent = "center";
    btn_exit.style.alignItems = "center";
    btn_exit.style.position = "fixed";
    btn_exit.style.top = "5px";
    btn_exit.style.right = "5px";
    btn_exit.style.padding = "10px";
    btn_exit.style.zIndex = "2000";
    btn_exit.style.cursor = "pointer";

    btn_exit.style.fontSize = "2em";
    btn_exit.style.color = "#fff";

    btn_exit.appendChild(ilus_exit);
    fondo.appendChild(btn_exit);
}