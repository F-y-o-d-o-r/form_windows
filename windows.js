/**Created by fyodor on 28.09.20 fyodor.work@gmail.com**/

function price() {
    var x = "";
    document.getElementsByClassName('price')[0].lastElementChild.innerHTML = "<b>Что расчитать: </b>" + window_door.value + "<br><b>Тип профиля: </b>" + profil_type.value + "<br><b>Стеклопакет: </b>" + glass.value + "<br><b>Фурнитура: </b>" + furniture.value + "<br><b>Ширина подоконника: </b>" + width_under.value + "<br><b>Ширина отлива: </b>" + width_2.value + "<br><b>Установка: </b>" + install.value + "<br><b>Ширина: </b>" + width.value + "<br><b>Высота: </b>" + height.value + "<br><b></b>";
}