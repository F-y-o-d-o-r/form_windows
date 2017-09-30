/**Created by fyodor on 28.09.20 fyodor.work@gmail.com**/

var what_to_count = function what_to_count() {
    if (window_door.value == 'windows') {
        document.getElementsByClassName('choose_window_type')[0].style.display = 'block';
        document.getElementsByClassName('choose_door_type')[0].style.display = 'none';
        return;
    } else document.getElementsByClassName('choose_window_type')[0].style.display = 'none';
           document.getElementsByClassName('choose_door_type')[0].style.display = 'block';
};

/*function change_picture() {
    document.this.style.display = 'none';

}*/

function price() {
    var x = "";
    document.getElementsByClassName('price')[0].lastElementChild.innerHTML = "<b>Что расcчитать: </b>" + window_door.value + "<br><b>Тип профиля: </b>" + profil_type.value + "<br><b>Стеклопакет: </b>" + glass.value + "<br><b>Фурнитура: </b>" + furniture.value + "<br><b>Ширина подоконника: </b>" + width_under.value + "<br><b>Ширина отлива: </b>" + width_2.value + "<br><b>Установка: </b>" + install.value + "<br><b>Ширина: </b>" + width.value + "<br><b>Высота: </b>" + height.value + "<br><b></b>";
}