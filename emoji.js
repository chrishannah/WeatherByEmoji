// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $('.js-geolocation').show();
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {

});

/*
* Test Locations
* Austin lat/long: 30.2676,-97.74298
* Austin WOEID: 2357536
*/
$(document).ready(function() {
  var chosenLocation = get('location');
  if (chosenLocation != '') {
    loadWeather(chosenLocation,'');
  } else {
    loadWeather('London','');
    navigator.geolocation.getCurrentPosition(function(position) {
      loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
    });
  }

  //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {

      console.log('Success! Weather Code for '+weather.city+', '+weather.region+', '+weather.country+' is '+weather.code);

      var locationString = '';
      if (weather.city != "") {
        locationString += weather.city;
        if (weather.region != "") {
          locationString += ', ';
          locationString += weather.region;
        }

      } else if (weather.region != "") {
        locationString += weather.region;
      }

      document.getElementById('city').innerHTML = 'Weather in <strong>'+locationString+'</strong>';
      var weatherText = 0;
      var weatherType = weather.code;
      var weatherTypeText = "";
      // Generate Unicode
      switch(weatherType) {

        case "0":
          // Tornado
          weatherText = "&#x1F32A;";
          weatherTypeText = "Tornado!";
          switch_style('day');
          break;

        case "1":
          // Tropical Storm
          weatherText = "&#x2614;";
          weatherTypeText = "Tropical Storm";
          switch_style('day');
          break;

        case "2":
          // Hurricane
          weatherText = "&#x1F32A;";
          weatherTypeText = "Hurricane!";
          switch_style('day');
          break;

        case "3":
          // Severe Thunderstorms
          weatherText = "&#x1F329;";
          weatherTypeText = "Severe Thunderstorms";
          switch_style('day');
          break;

        case "4":
          // Thunderstorms
          weatherText = "&#x1F329;";
          weatherTypeText = "Thunderstorms";
          switch_style('day');
          break;

        case "5":
          // Mixed Rain + Snow
          weatherText = "&#x1F327;&#x1F328;";
          weatherTypeText = "Rain and Snow";
          switch_style('day');
          break;

        case "6":
          // Mixed Rain + Sleet
          weatherText = "&#x1F327;&#x1F328;";
          weatherTypeText = "Rain and Sleet";
          switch_style('day');
          break;

        case "7":
          // Mixed Snow + Sleet
          weatherText = "&#127784;&#x1F328;";
          weatherTypeText = "Snow and Sleet";
          switch_style('day');
          break;

        case "8":
          // Freezing Drizzle
          weatherText = "&#x1F327;";
          weatherTypeText = "Freezing Drizzle";
          switch_style('day');
          break;

        case "9":
          // Drizzle
          weatherText = "&#x1F327;";
          weatherTypeText = "Drizzle";
          switch_style('day');
          break;

        case "10":
          // Freezing Rain
          weatherText = "&#x2744;&#x1F327;";
          weatherTypeText = "Freezing Rain";
          switch_style('day');
          break;

        case "11":
          // Showers
          weatherText = "&#x2614;";
          weatherTypeText = "Showers";
          switch_style('day');
          break;

        case "12":
          // Showers
          weatherText = "&#x2614;";
          weatherTypeText = "Showers";
          switch_style('day');
          break;

        case "13":
          // Snow Flurries
          weatherText = "&#x1F328;";
          weatherTypeText = "Snow Flurries";
          switch_style('day');
          break;

        case "14":
          // Light Snow Showers
          weatherText = "&#x1F328;";
          weatherTypeText = "Light Snow Showers";
          switch_style('day');
          break;

        case "15":
          // Blowing Snow
          weatherText = "&#x1F32C;&#x1F328;";
          weatherTypeText = "Blowing Snow";
          switch_style('day');
          break;

        case "16":
          // Snow
          weatherText = "&#x2603;";
          weatherTypeText = "It's Snowing!";
          switch_style('day');
          break;

        case "17":
          // Hail
          weatherText = "&#x1F327;";
          weatherTypeText = "Hail";
          switch_style('day');
          break;

        case "18":
          // Sleet
          weatherText = "&#x1F328;";
          weatherTypeText = "Sleet";
          switch_style('day');
          break;

        case "19":
          // Dust
          weatherText = "&#x1F32B;";
          weatherTypeText = "Dust";
          switch_style('day');
          break;

        case "20":
          // Foggy
          weatherText = "&#x1F32B;";
          weatherTypeText = "Foggy";
          switch_style('day');
          break;

        case "21":
          // Haze
          weatherText = "&#x1F32B;";
          weatherTypeText = "Haze";
          switch_style('day');
          break;

        case "22":
          // Smokey
          weatherText = "&#x1F32B;";
          weatherTypeText = "Smokey";
          switch_style('day');
          break;

        case "23":
          // Blustery
          weatherText = "&#x1F32C;";
          weatherTypeText = "Blustery";
          switch_style('day');
          break;

        case "24":
          // Windy
          weatherText = "&#x1F32C;";
          weatherTypeText = "Windy";
          switch_style('day');
          break;

        case "25":
          // Cold
          weatherText = "&#x2744;";
          weatherTypeText = "Cold!";
          switch_style('day');
          break;

        case "26":
          // Cloudy
          weatherText = "&#x2601;";
          weatherTypeText = "Cloudy";
          switch_style('day');
          break;

        case "27":
          // Mostly Cloudy (Night)
          weatherText = "&#x2601;";
          weatherTypeText = "Mostly Cloudy";
          switch_style('night');
          break;

        case "28":
          // Mostly Cloudy (Day)
          weatherText = "&#x2601;";
          weatherTypeText = "Mostly Cloudy";
          switch_style('day');
          break;

        case "29":
          // Partly Cloudy (Night)
          weatherText = "&#x2601;";
          weatherTypeText = "Partly Cloudy";
          switch_style('night');
          break;

        case "30":
          // Partly Cloudy (Day)
          weatherText = "&#x2601;";
          weatherTypeText = "Partly Cloudy";
          switch_style('day');
          break;

        case "31":
          // Clear (Night)
          weatherText = "&#x1F315;";
          weatherTypeText = "Clear";
          switch_style('night');
          break;

        case "32":
          // Sunny
          weatherText = "&#x2600;";
          weatherTypeText = "Sunny";
          switch_style('day');
          break;

        case "33":
          // Fair (Night)
          weatherText = "&#x1F315;";
          weatherTypeText = "Fair";
          switch_style('night');
          break;

        case "34":
          // Fair (Day)
          weatherTypeText = "Fair";
          weatherText = "&#x2600;";
          switch_style('day');
          break;

        case "35":
          // Mixed Rain + Hail
          weatherText = "";
          weatherTypeText = "Rain and Hail";
          switch_style('day');
          break;

        case "36":
          // Hot
          weatherText = "&#x1F30B;";
          weatherTypeText = "Hot!";
          switch_style('day');
          break;

        case "37":
          // Isolated Thunderstorms
          weatherText = "&#x1F329;";
          weatherTypeText = "Isolated Thunderstorms";
          switch_style('day');
          break;

        case "38":
          // Scattered Thunderstorms
          weatherText = "&#x1F329;";
          weatherTypeText = "Scattered Thunderstorms";
          switch_style('day');
          break;

        case "39":
          // Scattered Thunderstorms
          weatherText = "&#x1F329;";
          weatherTypeText = "Scattered Thunderstorms";
          switch_style('day');
          break;

        case "40":
          // Scattered Showers
          weatherText = "&#x1F327;";
          weatherTypeText = "Scattered Showers";
          switch_style('day');
          break;

        case "41":
          // Heavy Snow
          weatherText = "&#9924";
          weatherTypeText = "Heavy Snow";
          switch_style('day');
          break;

        case "42":
          // Scattered Snow Showers
          weatherText = "&#127784;";
          weatherTypeText = "Scattered Snow Showers";
          switch_style('day');
          break;

        case "43":
          // Heavy Snow
          weatherText = "&#x1F328;&#x2603;";
          weatherTypeText = "Heavy Snow";
          switch_style('day');
          break;

        case "44":
          // Partly Cloudy
          weatherText = "&#x26C5;";
          weatherTypeText = "Partly Cloudy";
          switch_style('day');
          break;

        case "45":
          // Thundershowers
          weatherText = "&#x26C8;";
          weatherTypeText = "Thundershowers";
          switch_style('day');
          break;

        case "46":
          // Snow Showers
          weatherText = "&#x1F328;";
          weatherTypeText = "Snow Showers";
          switch_style('day');
          break;

        case "47":
          // Isolated Thundershowers
          weatherText = "&#x26C8;";
          weatherTypeText = "Isolated Thundershowers";
          switch_style('day');
          break;

        case "3200":
          // Not Available
          weatherText = "&#x1F308;";
          weatherTypeText = "Nope, nothing.";
          switch_style('day');
          break;


        default:
        weatherText = "&#x1F308;";
        weatherTypeText = "Nope, nothing.";
        switch_style('day');
        break;
      }

      document.getElementById('weatherText').innerHTML = '<strong>'+weatherTypeText+'</strong> '+weather.temp+'&deg;'+weather.units.temp;

      html = '<strong>'+weatherText+'</strong>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

function updateWeatherLocation() {
  var loc = '';
  loc = document.getElementById("locationField").value;

  if (loc != '') {
    console.log("Clicked");
    console.log(loc);
    loadWeather(loc,'');
  }

  function night() {
    switch_style('night');
  }

  function day() {
    switch_style('day');
    switch_style('night');
  }
}

function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// http://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
  }
}

function get(name){
  var url = window.location.search;
  var num = url.search(name);
  var namel = name.length;
  var frontlength = namel+num+1; //length of everything before the value
  var front = url.substring(0, frontlength);
  url = url.replace(front, "");
  num = url.search("&");

 if(num>=0) return url.substr(0,num);
 if(num<0)  return url;
}
