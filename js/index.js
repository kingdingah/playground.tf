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
      $('#signin').fadeOut(100);
      $('.navuser .drop').fadeToggle(100);
      $('.navuser .triangle').fadeToggle(100);
  });

  $(".navsignin").click(function() {
    $('.navuser .drop').fadeOut(100);
    $("#signin").fadeToggle(100);
  });

  $(window).scroll(function() {
    var pixs = $(document).scrollTop()
    pixs = pixs / 100;
    pixs2 = 1 - ((pixs / 3));

    $('.parallax-mirror img').css({
      'filter':'blur(' + pixs + 'px)'
    });

    $('.sitelogo, .imgcont span').css({
      'opacity': pixs2
    });

    if($(document).scrollTop() > (bh-50))
    {
      $('.navsignin').css({
        'color':'#252525',
        'border':'5px solid #252525',
        'background-color':'rgba(0,0,0,0)'
      });

      $(".drop").stop().animate({top:'80px'},150);
      $(".triangle").stop().animate({top:'60px'},150);

      $('.navbg').slideDown(100);

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

      $(".drop").stop().animate({top:'70px'},150);
      $(".triangle").stop().animate({top:'50px'},150);

      $('.navbg').slideUp(100);

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

  var itemtitle = $("#showtitle").text();
  var itemtitlehide = $("#hidetitle").text();
  var itemimgsrc = $(".qlimg img").attr('src');
  var itemdesc = $(".qldesc").text();
  var current = "ROULETTE";

  console.log(itemimgsrc);

  $(".fa-angle-right").click(function() {
    if(current == "ROULETTE")
    {
      itemtitlehide = "BINGO";
      itemdesc = "bingo text";
      itemimgsrc = "img/home/bingo.png";
      current = "BINGO";

      $(".fa-angle-left").css({'opacity': '1'});
      $("#showtitle").animate({opacity: 0}, 100);
      $("#hidetitle").text(itemtitlehide).animate({opacity: 1}, 100);
      $(".qldesc").html(itemdesc);
    }
    else if(current == "BINGO")
    {
      itemtitle = "ICEBREAKER";
      itemdesc = "icebreaker text";
      itemimgsrc = "img/home/icebreaker.png";
      current = "ICEBREAKER";

      $("#hidetitle").animate({opacity: 0}, 100);
      $("#showtitle").text(itemtitle).animate({opacity: 1}, 100);
      $(".qldesc").html(itemdesc);
    }
    else if(current == "ICEBREAKER")
    {
      itemtitlehide = "VERSUS";
      itemdesc = "versus text";
      itemimgsrc = "img/home/versus.png";
      current = "VERSUS";

      $("#showtitle").animate({opacity: 0}, 100);
      $("#hidetitle").text(itemtitlehide).animate({opacity: 1}, 100);
      $(".qldesc").html(itemdesc);
    }
    else if(current == "VERSUS")
    {
      itemtitle = "CHALLENGE";
      itemdesc = "challenge text";
      itemimgsrc = "img/home/challenge.png";
      current = "CHALLENGE";

      $("#hidetitle").animate({opacity: 0}, 100);
      $("#showtitle").text(itemtitle).animate({opacity: 1}, 100);
      $(".qldesc").html(itemdesc);
    }
    else
    {
      itemtitlehide = "OTHER";
      itemdesc = "other text";
      itemimgsrc = "img/home/other.png";
      current = "OTHER";

      $(".fa-angle-right").css({'opacity': '0.5'});
      $("#showtitle").animate({opacity: 0}, 100);
      $("#hidetitle").text(itemtitlehide).animate({opacity: 1}, 100);
      $(".qldesc").html(itemdesc);
    }
  });

  $(".fa-angle-left").click(function() {
    if(current == "OTHER")
    {
      itemtitle = "CHALLENGE";
      itemdesc = "challenge text";
      itemimgsrc = "img/home/challenge.png";
      current = "CHALLENGE";

      $(".fa-angle-right").css({'opacity': '1'});
      $("#hidetitle").animate({opacity: 0}, 100);
      $("#showtitle").text(itemtitle).animate({opacity: 1}, 100);
      $(".qldesc").html(itemdesc);
    }
    else if(current == "CHALLENGE")
    {
      itemtitlehide = "VERSUS";
      itemdesc = "versus text";
      itemimgsrc = "img/home/versus.png";
      current = "VERSUS";

      $("#showtitle").animate({opacity: 0}, 100);
      $("#hidetitle").text(itemtitlehide).animate({opacity: 1}, 100);
      $(".qldesc").html(itemdesc);
    }
    else if(current == "VERSUS")
    {
      itemtitle = "ICEBREAKER";
      itemdesc = "icebreaker text";
      itemimgsrc = "img/home/icebreaker.png";
      current = "ICEBREAKER";

      $("#hidetitle").animate({opacity: 0}, 100);
      $("#showtitle").text(itemtitle).animate({opacity: 1}, 100);
      $(".qldesc").html(itemdesc);
    }
    else if(current == "ICEBREAKER")
    {
      itemtitlehide = "BINGO";
      itemdesc = "bingo text";
      itemimgsrc = "img/home/bingo.png";
      current = "BINGO";

      $("#showtitle").animate({opacity: 0}, 100);
      $("#hidetitle").text(itemtitlehide).animate({opacity: 1}, 100);
      $(".qldesc").html(itemdesc);
    }
    else
    {
      itemtitle = "ROULETTE";
      itemdesc = "roulette text";
      itemimgsrc = "img/home/roulette.png";
      current = "ROULETTE";

      $(".fa-angle-left").css({'opacity': '0.5'});
      $("#hidetitle").animate({opacity: 0}, 100);
      $("#showtitle").text(itemtitle).animate({opacity: 1}, 100);
      $(".qldesc").html(itemdesc);
    }
  });

  $(window).resize(function() {
    $("div.banner").css({'height':bh});
    $(".parallax-mirror img").css({'width':bw,'height':bh});
  });
});
