$(document).ready(function () { //문서준비 이벤트

  //depth 2 

  $(".depth2, .depth2_bg").hide();

  $("nav .gnb>li").mouseenter(function () {
    $(".depth2,.depth2_bg").stop().slideDown();
  });

  $("nav .gnb>li").mouseleave(function () {
    $(".depth2,.depth2_bg").stop().slideUp();
  });



  //메인베너 슬라이드
  const mb = new Swiper('.mb', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //business 영역 




}) //문서준비 이벤트종료