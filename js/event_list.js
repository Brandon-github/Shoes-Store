function Click_list(index){
    var button = document.querySelectorAll('.button__list');
    var info = document.querySelectorAll('.info__list');
    button[index].classList.toggle('active');
    info[index].classList.toggle('active');  
}