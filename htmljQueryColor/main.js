$(function () {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  var $Ps = $('p');

  for (var i = 0; i < $Ps.length; i++) {
    var allWords = $($Ps[i]).text();
    var arrTheseWords = allWords.split(' ');
    $($Ps[i]).empty();

    for (var x = 0; x < arrTheseWords.length; x++) {
      $($Ps[i]).append('<span class="color-change">' + arrTheseWords[x] + '</span> ');
    }
  }


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

  var colorChange = function () {
    var $colorChanges = $('.color-change');

    for (var i = 0; i < $colorChanges.length; i++) {
      var newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      $($colorChanges[i]).css('color', newColor);
    }
  };

  setInterval(colorChange, 1000)

});