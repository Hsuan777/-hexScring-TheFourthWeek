"use strict";

$(document).ready(function () {
  // navbar 漢堡選單
  $(".navbar__toggler").click(function (e) {
    e.preventDefault();
    $(".navbar__list").toggleClass("active");
  }); // product 切換

  $(".product__title").click(function (e) {
    e.preventDefault();
    $(this).addClass('active');
    $(this).parent().siblings().find(".product__title").removeClass("active");
  });
  $(".jsMenu__optical").click(function (e) {
    $('.jsMenu__optical__banner').fadeIn('slow').show();
    $('.jsMenu__sunglasses__banner').hide();
    $('.jsMenu__optical__title').fadeIn('slow').show();
    $('.jsMenu__sunglasses__title').hide();
    $('.jsMenu__optical__list').fadeIn('slow').show();
    $('.jsMenu__sunglasses__list').hide();
  });
  $(".jsMenu__sunglasses").click(function (e) {
    $('.jsMenu__sunglasses__banner').fadeIn('slow').show();
    $('.jsMenu__optical__banner').hide();
    $('.jsMenu__sunglasses__title').fadeIn('slow').show();
    $('.jsMenu__optical__title').hide();
    $('.jsMenu__sunglasses__list').fadeIn('slow').show();
    $('.jsMenu__optical__list').hide();
  }); // question 摺疊

  $(".question__title").click(function (e) {
    $(this).toggleClass('active');
    $(this).siblings(".question__text").slideToggle();
  });
});
//# sourceMappingURL=all.js.map
