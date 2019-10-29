$("#startBtn").click(function() {
    $("html,body").animate(
      {
        scrollTop: $(".searchBox").offset().top
      },
      "slow"
    );
  });