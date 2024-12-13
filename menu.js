//menu button stuff
document.getElementById('menuOpening').addEventListener("click",function(){
    //opens the menu
    document.getElementById('menuOpening').style.display = 'none';
    document.getElementById('menuClosing').style.display = 'block';
    document.getElementById('mainMenu').classList.toggle('open');
});
document.getElementById('menuClosing').addEventListener('click',function(){
    //closes the menu
    document.getElementById('menuOpening').style.display = 'block';
    document.getElementById('menuClosing').style.display = 'none';
    document.getElementById('mainMenu').classList.toggle('open');
});
