var BINGO = (function() {

  var numbers = [],

  addNumber = function (number) {
    var number_box = $(".number_box");
    var span = $("<div/>")
    .addClass("number pull-left")
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
  };

  $(document).on("click", ".choose", function() {
    if (numbers.length === 75) return;
    var number = 0;
    do {
      number = Math.floor(Math.random() * 75) + 1;
      console.log(number + ":" + $.inArray(number, numbers));
    } while ($.inArray(number, numbers) !== -1);

    numbers.push(number);
    addNumber(number);
  })
  .on("click", ".prize", function() {
    alert("no prize yet...");
  });

})();