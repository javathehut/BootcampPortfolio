let request = require('request'),
    cheerio = require('cheerio'),
    url1 = 'https://www.reddit.com/',
    url2= 'https://www.reddit.com/?count=25&after=t3_66h1nh',
    url3= 'https://www.reddit.com/?count=50&after=t3_66hk2o';

request(url1, function (error, response, body) {
  if (!error) {
    let $ = cheerio.load(body);
    console.log("Page 1");
    let title = $(".title > a").each(function(index){
        console.log((index+1) + ": " + $(this).text());
    });
      
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});

request(url2, function (error, response, body) {
  if (!error) {
    let $ = cheerio.load(body);
    console.log("Page 2");
    let title = $(".title > a").each(function(index){
        console.log((index+1) + ": " + $(this).text());
    });
      
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});

request(url3, function (error, response, body) {
  if (!error) {
    let $ = cheerio.load(body);
    console.log("Page 3");
    let title = $(".title > a").each(function(index){
        console.log((index+1) + ": " + $(this).text());
    });
      
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});