$('html, body').css({ overflow: 'hidden', height: '100%' });
$('.modalWrapper').bind('touchmove', function (e) {
  e.preventDefault();
});
$('.modalWrapper .inner').bind('touchmove', function (e) {
  e.stopPropagation();
});

$('.modalContainer').click(function () {
  $('.modalContainer').css({ display: 'none' });

  $('html, body').css({ overflow: 'auto', height: 'auto' });
  $('.modalWrapper').unbind('touchmove');
});
