$('.nextButton').click(function () {
  if ($('#mainSecondImg').hasClass('disabled')) {
    $('#mainSecondImg').removeClass('disabled');
    $('#mainThirdImg').addClass('disabled');
    $('#mainFirstImg').addClass('disabled');
    // $('#mainSecondImg').show();
    // $('#mainThirdImg').hide();
    // $('#mainFirstImg').hide();

    $('.text').text('새로운 일상을 경험하는');
    $('.linkText').text('3월 플라워 클래스');
  } else if ($('#mainThirdImg').hasClass('disabled')) {
    $('#mainThirdImg').removeClass('disabled');
    $('#mainFirstImg').addClass('disabled');
    $('#mainSecondImg').addClass('disabled');
    // $('#mainThirdImg').show();
    // $('#mainFirstImg').hide();
    // $('#mainSecondImg').hide();

    $('.text').text('2주에 한번 나를 위한');
    $('.linkText').text('14일 플라워 클래스');
  } else if ($('#mainFirstImg').hasClass('disabled')) {
    $('#mainFirstImg').removeClass('disabled');
    $('#mainSecondImg').addClass('disabled');
    $('#mainThirdImg').addClass('disabled');
    // $('#mainFirstImg').show();
    // $('#mainSecondImg').hide();
    // $('#mainThirdImg').hide();

    $('.text').text('매주 새로운 커리큘럼으로 배우는');
    $('.linkText').text('플라워 클래스 자세히 보기');
  }
});

$('.preButton').click(function () {
  console.log('이전');
});
