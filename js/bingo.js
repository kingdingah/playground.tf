$(document).ready(function() {
    var b_all = ['one','two','three','four','five','six','seven','eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];

    for(var i = 0; i < 4; i++)
    {
      var resb = [];

      for(var j = 0; j < 4; j++)
      {
        var randb = Math.floor((Math.random() * b_all.length) + 1);
        delete b_all[randb];
        console.log(b_all);
        resb.push(randb);
      }

      console.log(resb);

      $(".bingocard").append('<tr><td>' + b_all[resb[0]] + '</td><td>' + b_all[resb[1]] + '</td><td>' + b_all[resb[2]] + '</td><td>' + b_all[resb[3]] + '</td></tr>');
    }
});
