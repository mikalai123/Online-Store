//Ползунок( можно использовать в нашем случае )
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1,
      max: 20,
      values: [ 1, 20 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  } );


  $( function() {
    $( "#slider-range1" ).slider({
      range: true,
      min: 2017,
      max: 2022,
      values: [ 2017, 2022 ],
      slide: function( event, ui ) {
        $( "#amount1" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount1" ).val( "" + $( "#slider-range1" ).slider( "values", 0 ) +
      " - " + $( "#slider-range1" ).slider( "values", 1 ) );
  } );






  var d = document,
  itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
  cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// Функция кроссбраузерной установка обработчика событий
function addEvent(elem, type, handler){
if(elem.addEventListener){
  elem.addEventListener(type, handler, false);
} else {
  elem.attachEvent('on'+type, function(){ handler.call( elem ); });
}
return false;
}
// Получаем данные из LocalStorage
function getCartData(){
return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o){
localStorage.setItem('cart', JSON.stringify(o));
return false;
}
// Добавляем товар в корзину
function addToCart(e){
  this.disabled = true; // блокируем кнопку на время операции с корзиной
  var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
      parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
      itemId = this.getAttribute('data-id'), // ID товара
      itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
      itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара
  if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2] += 1;
  } else { // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
    this.disabled = false; // разблокируем кнопку после обновления LS
  }
 return false;
}
// Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
for(var i = 0; i < itemBox.length; i++){
  addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}
// Открываем корзину со списком добавленных товаров
function openCart(e){
  var cartData = getCartData(), // вытаскиваем все данные корзины
      totalItems = '';
  // если что-то в корзине уже есть, начинаем формировать данные для вывода
  if(cartData !== null){
    totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
    for(var items in cartData){
      totalItems += '<tr>';
      for(var i = 0; i < cartData[items].length; i++){
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }
      totalItems += '</tr>';
    }
    totalItems += '</table>';
    cartCont.innerHTML = totalItems;
  } else {
    // если в корзине пусто, то сигнализируем об этом
    cartCont.innerHTML = 'В корзине пусто!';
  }
  return false;
}
/* Открыть корзину */
addEvent(d.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */
addEvent(d.getElementById('clear_cart'), 'click', function(e){
  localStorage.removeItem('cart');
  cartCont.innerHTML = 'Корзина очишена.';
});




// Счетчик

var btn1 = document.getElementById("btn");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn1");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn2");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn3");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn4");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn5");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn6");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn7");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn8");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn9");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn10");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn11");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn12");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn13");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn14");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn15");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn16");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn17");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}

var btn1 = document.getElementById("btn18");
var counters = document.querySelectorAll(".check");
btn1.addEventListener("click", btn1Count);
function btn1Count (event) {
  counters[0].textContent = parseInt(counters[0].textContent) + 1;
}




document.querySelector('.www').addEventListener('click', function () { location.reload(); }); // Рестарт страницы