var BINGO = (function() {

  var numbers = [],

  slot = function() {
    $(".white_background").fadeIn();
    var i = 0;
    var interval = setInterval(function() {
      if (numbers.length === 75) return;
      var number = 0;
      do {
        number = Math.floor(Math.random() * 75) + 1;
        console.log(number + ":" + $.inArray(number, numbers));
      } while ($.inArray(number, numbers) !== -1);
      $(".slot").html(number);
      if (i++ > 40) {
        clearInterval(interval);
        setTimeout(function() {
          $(".white_background").fadeOut();
          addNumber(number);
        }, 1000);
      }
    }, 150);
  },

  addNumber = function(number) {
    numbers.push(number);

    var number_box = $(".number_box");
    var span = $("<div/>")
    .addClass("number")
    .attr("id", "number_" + number)
    .append(number);
    switch (Math.floor((number - 1) / 15)) {
      case 0:
      span.addClass("number_col1");
      break;
      case 1:
      span.addClass("number_col2");
      break;
      case 2:
      span.addClass("number_col3");
      break;
      case 3:
      span.addClass("number_col4");
      break;
      case 4:
      span.addClass("number_col5");
      break;
    }
    span.appendTo(number_box).hide().fadeIn();
  },

  enterFullscreen = function() {
    var body = document.body;
    if (body.webkitRequestFullScreen) {
      body.webkitRequestFullScreen();
    } else if (body.mozRequestFullScreen) {
      body.mozRequestFullScreen();
    } else {
      alert("can not enter fullscreen");
    }
  },

  exitFullscreen = function() {
    if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else {
      document.exitFullscreen();
    }
  };

  $(document).on("click", ".choose", function() {
    slot();
  })
  .on("click", ".prize", function() {
    alert("no prize yet...");
  })
  .on("click", ".icon-resize-full", function() {
    enterFullscreen();
    $(this).removeClass("icon-resize-full").addClass("icon-resize-small");
  })
  .on("click", ".icon-resize-small", function() {
    exitFullscreen();
    $(this).removeClass("icon-resize-small").addClass("icon-resize-full");
  });

})();