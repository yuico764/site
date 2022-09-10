$(function(){

  // ハンバーガーメニュー
  $('.header-trigger').on('click', function() {
    $('.header-trigger').toggleClass('is-active');
    $('.header-nav').toggleClass('is-active');
  });

  $('.header-item').on('click', function(){
    $('.header-nav').removeClass('is-active');
    $('.header-trigger').removeClass('is-active');
  })


  // キービジュアルのスライダー
  $('.keyvisual-slider').slick({
    arrows:false,
    autoplay:true,
    speed:3000,
    autoplaySpeed:3000,
    infinite:true,
    slidesToShow: 1,
    responsive:[
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
        }
      }
    ]
  });
})

$(window).on("scroll", function(){
	// フェードイン
	$('.set-list').each(function(index, el){
		if( $(window).scrollTop() > ( $(el).offset().top - $(window).height()) ){
      $(this).addClass('is-over');      
		};
	});

  $('.concept').each(function(index, el){
		if( $(window).scrollTop() > ( $(el).offset().top - $(window).height() / 2 ) ){
      $(this).addClass('is-over');
    }
  })

  $('.news-list').each(function(index, el){
		if( $(window).scrollTop() > ( $(el).offset().top - $(window).height() / 2 ) ){
      $(this).addClass('is-over');      
		};
	});

  $('.access').each(function(index, el){
		if( $(window).scrollTop() > ( $(el).offset().top - $(window).height() / 1.5 ) ){
      $(this).addClass('is-over');
    }
  })
});