$(document).ready(function() {
  var open = true;

  $('#upload').click(function() {
      $("div.quick-upload").animate({
          left:'0px'
      }, 300);
      $("div.black-overlay").fadeIn();
  });

  $("div.quick-upload .close-icon-info").click(function() {
    $("div.quick-upload").animate({
      left:'-400px'
    }, 300);
    $("div.black-overlay").fadeOut();
  });

  var notes = $('.notes');
  var journals = $('.journals');
  var submissions = $('.submission');
  var margin = 0;

  if($(window).width() > 990)
  {
    if(notes.length > 1 && journals.length > 1|| journals.length > 1 && submissions.length > 1 || submissions.lengthlength > 1 && notes.length > 1)
    {
      $("div.notes-container").append('<div class="new-note"><span class="close-icon-info"><img src="img/svg/cancel.svg"/></span><span class="note-info">You have new messages!</span></div>');
      $("div.new-note").delay(300).animate({
        bottom:'25px'
      }, 300)
    }
    else if(notes.length > 1 && journals.length == 0 && submissions.length == 0)
    {
      $("div.notes-container").append('<div class="new-note"><span class="close-icon-info"><img src="img/svg/cancel.svg"/></span><span class="note-info">You have new notes!</span></div>');
    }
    else if(journals.length > 1 && notes.length == 0 && submissions.length == 0)
    {
      $("div.notes-container").append('<div class="new-note"><span class="close-icon-info"><img src="img/svg/cancel.svg"/></span><span class="note-info">You have new journals!</span></div>');
    }
    else
    {
      $("div.notes-container").append('<div class="new-note"><span class="close-icon-info"><img src="img/svg/cancel.svg"/></span><span class="note-info">You have new submissions!</span></div>');
    }
  }
  else
  {
    $("div.new-notes").hide();
  }

  setTimeout(function(){
    $("div.new-note").fadeOut(600);
    $("div.notes-container").fadeOut(600);
  }, 5000);

  $(window).resize(function() {
    if($(window).width() < 990)
    {
      $("div.new-note").hide();
    }
  });

  $("div.notes-container .close-icon-info").click(function() {
    $("div.new-note").fadeOut(200);
    $("div.notes-container").fadeOut(200);
  });
});
