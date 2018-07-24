$(document).ready(function() {
  var bw = $("div.banner").width();
  var bh = (bw/5)*2;
  var iw = $("div.quicklinks div").width();
  console.log(bw + " / " + bh);

  $("div.banner").css({
    'height':bh
  });

  $("div.quicklinks div").css({
    'height':iw
  });

  $(window).resize(function() {
    $("div.banner").css({
      'height':bh
    });

    $("div.quicklinks div").css({
      'height':iw
    });
  });
});
