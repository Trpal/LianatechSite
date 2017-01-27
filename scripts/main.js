$(document).ready(function() {

  // Using yahoo query language to quickly get access to the rss feed without more hassle
  var yql = "https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20link%2C%20pubDate%20from%20rss%20where%20url%3D'http%3A%2F%2Fwww.lianatech.com%2Fnews%2Fall-news.rss'&format=json&diagnostics=true&callback=";

  $.getJSON(yql, function(res) {
    var news = res.query.results.item;
    var $newsItems = $("#newsItems");

    // set the first three objects from the array to the allocated spaces
    for(i = 0; i < 3; i++){
      var newsDate = new Date(news[i].pubDate);
      $($newsItems.find("span").get(i)).html(getPrintableDate(newsDate));
      $($newsItems.find("a").get(i)).html(news[i].title);
      $($newsItems.find("a").get(i)).attr({"href": news[i].link, "target": "_blank"});
    }
  });

  $('.ui.dropdown')
    .dropdown();

  $("#numbersContainer").find(".header").one("mouseover", (function(){
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  }));
});




 function getPrintableDate(date)
 {
  var printableDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' +  date.getFullYear();
  return printableDate;
}
