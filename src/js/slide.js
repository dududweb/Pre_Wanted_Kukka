$('.nextButton').click(function () {
  if ($('#mainImg').hasClass('mainItemImg_1')) {
    $('#mainImg').removeClass('mainItemImg_1');
    $('#mainImg').addClass('mainItemImg_2');
    $('#mainImg').attr('src', '/public/images/slide2.jpeg');
    $('.link').attr('href', 'https://www.google.co.kr/');

    $('#secondItemImg').attr('src', '/public/images/slide3.jpeg');
    $('#thirdItemImg').attr('src', '/public/images/slide1.jpeg');

    $('.text').text('새로운 일상을 경험하는');
    $('.linkText').text('3월 플라워 클래스');

    $('#secondItemName').text('클래식 핸드타이드(2/28~3/6)');
    $('#secondItemPrice').text('82,000원');

    $('#thirdItemName').text('화이트 프리지아(2/28~3/6)');
    $('#thirdItemPrice').text('73,000원');
  } else if ($('#mainImg').hasClass('mainItemImg_2')) {
    $('#mainImg').removeClass('mainItemImg_2');
    $('#mainImg').addClass('mainItemImg_3');
    $('#mainImg').attr('src', '/public/images/slide3.jpeg');
    $('.link').attr('href', 'https://https://www.daum.net/');

    $('#secondItemImg').attr('src', '/public/images/slide1.jpeg');
    $('#thirdItemImg').attr('src', '/public/images/slide2.jpeg');

    $('text').text('2주에 한번 나를 위한');
    $('.linkText').text('14일 플라워 클래스');

    $('#secondItemName').text('화이트 프리지아(2/28~3/6)');
    $('#secondItemPrice').text('73,000원');

    $('#thirdItemName').text('오아시스 리스(2/21~2/27)');
    $('#thirdItemPrice').text('79,000원');
  } else if ($('#mainImg').hasClass('mainItemImg_3')) {
    $('#mainImg').removeClass('mainItemImg_3');
    $('#mainImg').addClass('mainItemImg_1');
    $('#mainImg').attr('src', '/public/images/slide1.jpeg');
    $('.link').attr('href', 'https://www.naver.com/');

    $('#secondItemImg').attr('src', '/public/images/slide2.jpeg');
    $('#thirdItemImg').attr('src', '/public/images/slide3.jpeg');

    $('.text').text('매주 새로운 커리큘럼으로 배우는');
    $('.linkText').text('플라워 클래스 자세히 보기');

    $('#secondItemName').text('오아시스 리스(2/21~2/27)');
    $('#secondItemPrice').text('79,000원');

    $('#thirdItemName').text('클래식 핸드타이드(2/28~3/6)');
    $('#thirdItemPrice').text('82,000원');
  }
});

$('.preButton').click(function () {
  if ($('#mainImg').hasClass('mainItemImg_1')) {
    $('#mainImg').removeClass('mainItemImg_1');
    $('#mainImg').addClass('mainItemImg_3');
    $('#mainImg').attr('src', '/public/images/slide3.jpeg');

    $('#secondItemImg').attr('src', '/public/images/slide1.jpeg');
    $('#thirdItemImg').attr('src', '/public/images/slide2.jpeg');

    $('text').text('2주에 한번 나를 위한');
    $('.linkText').text('14일 플라워 클래스');

    $('#secondItemName').text('화이트 프리지아(2/28~3/6)');
    $('#secondItemPrice').text('73,000원');

    $('#thirdItemName').text('오아시스 리스(2/21~2/27)');
    $('#thirdItemPrice').text('79,000원');
  } else if ($('#mainImg').hasClass('mainItemImg_2')) {
    $('#mainImg').removeClass('mainItemImg_2');
    $('#mainImg').addClass('mainItemImg_1');
    $('#mainImg').attr('src', '/public/images/slide1.jpeg');

    $('#secondItemImg').attr('src', '/public/images/slide2.jpeg');
    $('#thirdItemImg').attr('src', '/public/images/slide3.jpeg');

    $('.text').text('매주 새로운 커리큘럼으로 배우는');
    $('.linkText').text('플라워 클래스 자세히 보기');

    $('#secondItemName').text('오아시스 리스(2/21~2/27)');
    $('#secondItemPrice').text('79,000원');

    $('#thirdItemName').text('클래식 핸드타이드(2/28~3/6)');
    $('#thirdItemPrice').text('82,000원');
  } else if ($('#mainImg').hasClass('mainItemImg_3')) {
    $('#mainImg').removeClass('mainItemImg_3');
    $('#mainImg').addClass('mainItemImg_2');
    $('#mainImg').attr('src', '/public/images/slide2.jpeg');

    $('#secondItemImg').attr('src', '/public/images/slide3.jpeg');
    $('#thirdItemImg').attr('src', '/public/images/slide1.jpeg');

    $('.text').text('새로운 일상을 경험하는');
    $('.linkText').text('3월 플라워 클래스');

    $('#secondItemName').text('클래식 핸드타이드(2/28~3/6)');
    $('#secondItemPrice').text('82,000원');

    $('#thirdItemName').text('화이트 프리지아(2/28~3/6)');
    $('#thirdItemPrice').text('73,000원');
  }
});
