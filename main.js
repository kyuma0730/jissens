jQuery(function($){
    $('.tab').click(function(){
        $('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        $('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.panel').eq(index).addClass('is-show');
    });
});

jQuery(function($){
  $('.tab-sp').click(function(){
      $('.is-active-sp').removeClass('is-active-sp');
      $(this).addClass('is-active-sp');
      $('.is-show-sp').removeClass('is-show-sp');
      // クリックしたタブからインデックス番号を取得
  });

  $('#panel2,#panel3').hide();
  $('.tab1').click(function(){
      $('#panel1').show();
      $('#panel2,#panel3').hide();
  });
  $('.tab2').click(function(){
      $('#panel2').show();
      $('#panel1,#panel3').hide();
  });
  $('.tab3').click(function(){
      $('#panel3').show();
      $('#panel1,#panel2').hide();
  });
});

$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  $('aside').click(function(){
    $('input[type="checkbox"]').removeAttr('checked').prop('checked', false).change();
  });
  $('a').click(function(){
    $('input[type="checkbox"]').removeAttr('checked').prop('checked', false).change();
  });
  $('#humberger').click(function(){
    $('#humberger').hide(500);
  });
  $('.close').click(function(){
    $('#humberger').show(200);
  });
  $('a').click(function(){
    $('#humberger').show(200);
  });
  $('aside').click(function(){
    $('#humberger').show(200);
  });
  $('#cp_tabfour031').click(function(){
    $('#cp_tabfour032 ,#cp_tabfour033').removeAttr('checked').prop('checked', false).change();
  });
  $('#cp_tabfour032').click(function(){
    $('#cp_tabfour031 ,#cp_tabfour033').removeAttr('checked').prop('checked', false).change();
  });
  $('#cp_tabfour033').click(function(){
    $('#cp_tabfour031 ,#cp_tabfour032').removeAttr('checked').prop('checked', false).change();
  });
  $('#cp_tabfour031').click(function(){
    $('#cp_tabfour01').toggle(100);
    });
  $('#cp_tabfour032').click(function(){
    $('#cp_tabfour02').toggle(100);
    });
  $('#cp_tabfour033').click(function(){
    $('#cp_tabfour03').toggle(100);
    });
    $('#cp_tabfour031').click(function(){
      $('#cp_tabfour02, #cp_tabfour03').show();
      });
    $('#cp_tabfour032').click(function(){
      $('#cp_tabfour01, #cp_tabfour03').show();
      });
    $('#cp_tabfour033').click(function(){
      $('#cp_tabfour01, #cp_tabfour02').show();
    });

      $(window).on('load scroll', function(){
      if ($(window).scrollTop() > 700) {
        $('.section2-button').fadeIn(200);
       } else {
        $('.section2-button').fadeOut(200);
       }
    });
    $(window).on('load scroll', function(){
    if ($(window).scrollTop() > 700) {
      $('.footer-button').fadeIn(200);
     } else {
      $('.footer-button').fadeOut(200);
     }
  });
  let $pagetop = $('.footer-button');

$(window).on( 'scroll', function () {
  //スクロール位置を取得
  if ( $(this).scrollTop() < 7000 ) {
    $pagetop.removeClass('isActive');
  } else {
    $pagetop.addClass('isActive');
  }
});

    $('#humberger').click(function(){
      $('.main-button').hide();
      });
    $('.close, aside').click(function(){
      $('.main-button').show();
      });
    $('a').click(function(){
      $('.main-button').show();
      });

      $(".my-parts, a").click(function(){
      $('.modal').fadeOut();
    });


if("?modal=show" == location.search) {
  $(".modal").show();
}
    });
