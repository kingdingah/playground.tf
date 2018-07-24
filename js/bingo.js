$(document).ready(function() {
    var b_all = ['one','two','three','four','five',
                'six','seven','eight', 'nine', 'ten',
                'eleven', 'twelve', 'thirteen', 'fourteen',
                'fifteen', 'sixteen', 'seventeen', 'eighteen',
                'nineteen', 'twenty', 'twenty one', 'twenty two',
                'twenty three','twenty four'];

    var last = 100;
    var resb = [];
    var b_init = b_all.length;

    for(var i = 0; i < 25; i++)
    {

      var randb = Math.floor((Math.random() * b_all.length));
      console.log(b_all[randb]);

      resb.push(b_all[randb]);
      b_all.splice(randb, 1);
    }

    console.log(resb);

    $(".bingocard").append('<tr><td>' + resb[0] + '</td><td>' + resb[1] + '</td><td>' + resb[2] + '</td><td>' + resb[3] + '</td><td>' + resb[4] + '</td></tr>');
    $(".bingocard").append('<tr><td>' + resb[5] + '</td><td>' + resb[6] + '</td><td>' + resb[7] + '</td><td>' + resb[8] + '</td><td>' + resb[9] + '</td></tr>');
    $(".bingocard").append('<tr><td>' + resb[10] + '</td><td>' + resb[11] + '</td><td>Free Space</td><td>' + resb[12] + '</td><td>' + resb[13] + '</td></tr>');
    $(".bingocard").append('<tr><td>' + resb[14] + '</td><td>' + resb[15] + '</td><td>' + resb[16] + '</td><td>' + resb[17] + '</td><td>' + resb[18] + '</td></tr>');
    $(".bingocard").append('<tr><td>' + resb[19] + '</td><td>' + resb[20] + '</td><td>' + resb[21] + '</td><td>' + resb[22] + '</td><td>' + resb[23] + '</td></tr>');
    console.log(b_all);

});
