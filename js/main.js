// jsを記述する際はここに記載していく
$(document).ready(function () {
    $("#startSlideshowBtn").click(function () {
        startSlideshow();
    });

    $("#slideshowFrame").click(function () {
        stopSlideshow();
    });
});

function startSlideshow() {
    // 画像のパスを配列に格納
    const images = [];
    for (let i = 1; i <= 20; i++) {
        images.push("img/image" + ("0" + i).slice(-2) + ".jpg"); // img フォルダ内の画像を指定
    }

    // 画像をランダムに並び替え
    images.sort(function () {
        return 0.5 - Math.random();
    });

    // スライドショーを開始
    $("#slideshowContainer").empty();
    images.forEach(function (image) {
        $("#slideshowContainer").append('<img src="' + image + '">');
    });

    $("#slideshowFrame").fadeIn();
    $("#slideshowContainer img").hide().first().show();

    let currentImage = 0;
    const slideshowInterval = setInterval(function () {
        $("#slideshowContainer img").eq(currentImage).fadeOut(1000, function () {
            currentImage++;
            if (currentImage === images.length) {
                stopSlideshow();
            } else {
                $("#slideshowContainer img").eq(currentImage).fadeIn(1000);
            }
        });
    }, 3000);

    $("#slideshowFrame").data("interval", slideshowInterval);
}

function stopSlideshow() {
    $("#slideshowFrame").fadeOut();
    clearInterval($("#slideshowFrame").data("interval"));
}





$(document).ready(function() {
    $('#choose-image-btn').on('click', function() {
      let randomNumber = Math.floor(Math.random() * 21);
      let imagePath = 'img/Age' + ('00' + randomNumber).slice(-2) + '.jpg';
      $('#image-container').html('<img src="' + imagePath + '" alt="Age Image">');

      // 年齢に合わせた文章表示
      let ageDescription = '';
      switch (randomNumber) {
        case 0:
          ageDescription = '0歳！Happy Birthday！';
          break;
        case 1:
          ageDescription = '1歳！つかまり立ちができた！';
          break;
        case 2:
          ageDescription = '2歳！お出かけできるようになってきて嬉しいね';
          break;
        case 3:
          ageDescription = '3歳！七五三で和服が似合う！';
          break;
        case 4:
          ageDescription = '4歳！はじめての花火にびっくり';
          break;
        case 5:
          ageDescription = '5歳！二度目の七五三、きまってるね';
          break;
        case 6:
          ageDescription = '6歳！ボールプールで大はしゃぎ！';
          break;
        case 7:
          ageDescription = '7歳！小学校入学おめでとう！';
          break;
        case 8:
          ageDescription = '8歳！勉強が難しくなってきたみたい...ファイト！';
          break;
        case 9:
          ageDescription = '9歳！家族で紅葉に行って楽しかったね';
          break;
        case 10:
          ageDescription = '10歳！料理のお手伝いにチャレンジ';
          break;
        case 11:
          ageDescription = '11歳！ランドセルが小さく見える！大きくなったね';
          break;
        case 12:
          ageDescription = '12歳！初めての彼女！？';
          break;
        case 13:
          ageDescription = '13歳！部活はサッカー部に！';
          break;
        case 14:
          ageDescription = '14歳！食べ盛りの中学生はお弁当も大容量';
          break;
        case 15:
          ageDescription = '15歳！中学校卒業おめでとう！';
          break;
        case 16:
          ageDescription = '16歳！高校生がんばるぞ！';
          break;
        case 17:
          ageDescription = '17歳！制服姿もあともう少し...';
          break;
        case 18:
          ageDescription = '18歳！大学受験に向けて猛勉強！頑張れ！';
          break;
        case 19:
          ageDescription = '19歳！大学生になって新しい趣味もできたね！';
          break;
        case 20:
          ageDescription = '20歳！成人おめでとう！！！';
          break;
        default:
          ageDescription = '年齢に対応する文章がありません';
      }
      $('#age-description').text(ageDescription);
    });

    $('#calculate-btn').on('click', function() {
      let celebrationAmount = parseInt($('#celebration-amount').val()) || 0;
      let annualInterestRate = 0.08;

      // 左半分のランダムに取得した画像のファイル名から数字を取得
      let randomNumber = parseInt($('#age-description').text().match(/\d+/));
      
      // 20から引いた数の年数分運用
      let years = 20 - randomNumber;

      // 運用額計算
      let totalAmount = celebrationAmount * Math.pow((1 + annualInterestRate), years);
       // 小数点以下を表示しないように整数に変換
      totalAmount = Math.floor(totalAmount);

      $('#total-amount').text(totalAmount + '円');


    });
  });
