$(document).ready(function () {

$('.item-cart-btn').click(function () {
$('.item__total').hide();
$('.item__total').show();
$('.item__total').addClass("animate__animated animate__bounce");
$('.item__total').fadeOut(800, 'linear');
});

$('.btn-Count-Cart').click(function () {
$('.item-Count-view').toggle(); 
});

$('.item-cart-add').click(function () {
$('.ViewCartItem').hide();
$('.ViewCartItem').show();
$('.PageViewItem').hide();
$('.PageViewItem').show();
$('.PageViewItem').removeClass("animate__animated animate__fadeInLeft animate__faster");
$('.PageViewItem').addClass("animate__animated animate__fadeOutLeft animate__faster");
});

//item-home-box
$('.item-home-box').click(function () {
$('.PageViewItem').hide();
$('.PageViewItem').show();
$('.PageViewItem').removeClass("animate__animated animate__fadeOutLeft animate__faster");
$('.PageViewItem').addClass("animate__animated animate__fadeInLeft animate__faster");
});

$('.BtnViewCart').click(function () {
$('.PageViewCart').hide();
$('.PageViewCart').show();
$('.PageViewCart').removeClass("animate__animated animate__fadeOutLeft animate__faster");
$('.PageViewCart').addClass("animate__animated animate__fadeInLeft animate__faster");
});
//--item-cart-add PageViewItem
});

$(document).ready(function () {
var deltaNow = 0;

var itempanmove = $('.PageView-swipe');


$(itempanmove).hammer().on('panmove', function (e) {
deltaNow = e.gesture.deltaX;
$(this).css("-webkit-transform", "translateX(" + deltaNow + "px)");
$(this).css("transition", "translateX(" + deltaNow);
});
var itemstart = $('.PageView-swipe');

$(itemstart).hammer().on('panstart pancancel', function (e) {
deltaNow = e.gesture.deltaX;
$(this).css("-webkit-transform", "translateX(0px)");
$(this).css("transition", "translateX(0px)");
});

var itempanend = $('.PageView-swipe');

$(itempanend).hammer().on('panend', function (e) {
deltaNow = e.gesture.deltaX;
if (deltaNow > 200) {
$('.PageViewCart').hide();
$('.PageViewItem').hide();
$(this).css("-webkit-transform", "translateX(0px)");
$(this).css("transition", "translateX(0px)");
}
else if (deltaNow < -200) {
$('.PageViewCart').hide();
$('.PageViewItem').hide();
$(this).css("-webkit-transform", "translateX(0px)");
$(this).css("transition", "translateX(0px)");
}
else
{
$(this).css("-webkit-transform", "translateX(0px)");
$(this).css("transition", "translateX(0px)");
}
});

$('.brunch-info-btn').click(function () {
$('.brunch-info-btn').removeClass('dark').removeClass("animate__animated animate__bounce");
$(this).toggleClass('dark').addClass("animate__animated animate__bounce");
$('.brunch-icon').addClass('mdi-map-marker-radius');
$(this).find('span').removeClass('mdi-map-marker-radius').addClass('mdi-checkbox-marked');
});

$('.btn-view-grid').click(function () {
$('.home-item-grid').css('width', '47%');
$('.home-item-grid').css('height', '200px');
$('.item-home-title').css('height', '60px');
$('.item-home-img').css('width', '100%');
$('.item-home-img').css('height', '100%');
});

$('.btn-view-week').click(function () {
$('.home-item-grid').css('width', '30%');
$('.home-item-grid').css('height', '175px');
$('.item-home-img').css('height', '100px');
$('.item-home-title').css('height', '75px');
});

$('.btn-toggle-nav').click(function () {
var data = $(this).attr('data-bind');
var vh = 0;
vh = window.innerHeight;
if (data == '') {
$('.home-nav').css('height', '55px');
$('.main-home-page').css('height', vh - 130);
$('.scroll_items').css('height', vh - 130);
$('.scroll_items').css('maxHeight', vh - 130);
}
else {
$('.home-nav').css('height', '148px');
$('.main-home-page').css('height', vh - 223);
$('.scroll_items').css('height', vh - 223);
$('.scroll_items').css('maxHeight', vh - 223);
}
});

});

$(document).ready(function () {
const updateVh = () => {
var vh = 0;
vh=window.innerHeight;
$('.bg').height(vh);
$('.bg').css('maxHeight', vh);
$('.PageHome').height(vh);
$('.PageHome').css('maxHeight', vh);
$('.main-home-page').height(vh - 223);
$('.scroll_items').height(vh - 223);
$('.PageViewItem').height(vh);
$('.PageView-swipe').height(vh - 35);
$('.main-item').height(vh - 112);
$('.main-cart').height(vh);
$('.PageViewCart').css('maxHeight', vh);
$('.PageCartConfirm-swipe').height(vh);
$('.PageCartConfirm-swipe').css('maxHeight', vh);
$('.cart-confirm-view').css('maxHeight', vh);
$('.PageOrderList').css('maxHeight', vh);
$('.PageOrderList-swipe').height(vh);
$('.PageOrderList-swipe').css('maxHeight', vh);
$('.order-list-view').css('maxHeight', vh);

//cart-confirm-view
//PageHome
};
updateVh();
window.addEventListener('resize', updateVh);
});
