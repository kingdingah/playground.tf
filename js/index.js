$(document).ready(function() {
  var bw = $("div.banner").width();
  var bh = (bw/5)*2;
  var iw = $("div.quicklinks div").width();
  console.log(bw + " / " + bh);

  $("div.banner").css({'height':bh});
  $(".parallax-mirror img").css({'width':bw,'height':bh});
  $(".imgcont").css({'width':bw,'height':bh});

  $('.parallax-window').parallax({positionY: -100});

  if($(window).width() > 990 && $(window).width() < 1281)
  {
    $('.parallax-window').parallax({positionY: -30});
  }

  $('.navuser img').click(function() {
      $('.navuser .drop').slideToggle(150);
  });

  $(window).scroll(function() {
    var pixs = $(document).scrollTop()
    pixs = pixs / 100;
    pixs2 = 1 - ((pixs / 5));

    $('.parallax-mirror img').css({
      'filter':'blur(' + pixs + 'px)'
    });

    $('.sitelogo, .imgcont span').css({
      'opacity': pixs2
    });

    if($(document).scrollTop() > bh)
    {
      $('.navsignin').css({
        'color':'#252525',
        'border':'5px solid #252525',
        'background-color':'rgba(0,0,0,0)'
      });

      $('.sitenav').css({'background-color': 'white'});

      $('.navsignin').hover(function() {
        $('.navsignin').css({
          'color':'white',
          'background-color':'#252525',
          'border':'5px solid #252525'
        });
      }, function() {
        $('.navsignin').css({
          'color':'#252525',
          'background-color':'rgba(0,0,0,0)',
          'border':'5px solid #252525'
        });
      });

      $('.navlogo img').attr('src', 'img/logobl.svg');

    }
    else
    {
      $('.navsignin').css({
        'color':'white',
        'border':'5px solid white',
        'background-color':'rgba(0,0,0,0)'
      });

      $('.sitenav').css({'background-color': 'rgba(0,0,0,0)'});

      $('.navsignin').hover(function() {
        $('.navsignin').css({
          'color':'#252525',
          'background-color':'white',
          'border':'5px solid white'
        });
      }, function() {
        $('.navsignin').css({
          'color':'white',
          'background-color':'rgba(0,0,0,0)',
          'border':'5px solid white'
        });
      });

      $('.navlogo img').attr('src', 'img/logo.svg');
    }
  });

  $(window).resize(function() {
    $("div.banner").css({'height':bh});
    $(".parallax-mirror img").css({'width':bw,'height':bh});
  });
});
