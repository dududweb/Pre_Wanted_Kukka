//쿠키
function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie =
    name + '=' + value + '; path=/; expires=' + todayDate.toGMTString() + ';';
}

function getCookie(name) {
  var cookie = document.cookie;

  if (document.cookie != '') {
    var cookie_array = cookie.split('; ');
    console.log(cookie_array);
    for (var index in cookie_array) {
      var cookie_name = cookie_array[index].split('=');
      if (cookie_name[0] == 'mycookie') {
        return cookie_name[1];
      }
    }
  }
  return;
}

$('.todayClose').click(function () {
  $('#popup').css('display', 'none');

  $('html, body').css({ overflow: 'auto', height: 'auto' });
  $('.modalWrapper').unbind('touchmove');
  setCookie('mycookie', 'popupEnd', 1);
});

var checkCookie = getCookie('mycookie');

if (checkCookie == 'popupEnd') {
  $('#popup').css('display', 'none');
} else {
  $('#popup').css('display', 'block');
}

//스크롤
$('html, body').css({ overflow: 'hidden', height: '100%' });
$('.modalWrapper').bind('touchmove', function (e) {
  e.preventDefault();
});
$('.modalWrapper .inner').bind('touchmove', function (e) {
  e.stopPropagation();
});

if (checkCookie == 'popupEnd') {
  $('html, body').css({ overflow: 'auto', height: 'auto' });
  $('.modalWrapper').unbind('touchmove');
}

$('.modalContainer').click(function () {
  $('.modalContainer').css({ display: 'none' });

  $('html, body').css({ overflow: 'auto', height: 'auto' });
  $('.modalWrapper').unbind('touchmove');
});
