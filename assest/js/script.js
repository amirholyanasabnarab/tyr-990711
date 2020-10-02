let isClose=true;
function onToggle(){
    const menu=document.getElementById('menu');
    if (isClose){
    menu.classList.add('active');
    isClose=false;
    }else
    {
        menu.classList.remove('active');
        isClose=true;
    }
}