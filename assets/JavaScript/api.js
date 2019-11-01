/*var apicall = 'htttp://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=b48f111e7c35125f1b3c9d727c26c422';
$getJSON(apicall,weatherCallback);
function weatherCallback(weatherData){
    console.log(weatherData.name)
}*/

$(document).ready(function(){

    document.getElementsByClassName("ShowWeatherForcast");

    $("#getWeatherForcast").click(function(){
              
              var city = $("#city").val();
          var key  = 'b48f111e7c35125f1b3c9d727c26c422';
          //var apicall = 'api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml';
          
          $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?appid=${key}&q=${city}&count=10&units=metric`, //API Call
            dataType: "json",
            type: "GET",
            
            success: function(data) {
              console.log('Received data:', data) // For testing
              var wf = "";
              wf += "<h2>" + data.city.name + "</h2>"; // City (displays once)
              //$.each(data.list, function(index, val) {
                wf += "<p>" // Opening paragraph tag
                //wf += "<b>Day " + index + "</b>: " // Day
                //wf += val.main.temp + "&degC" // Temperature
               // wf += "<span> | " + val.weather[0].description + "</span>"; // Description
                //wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
               // wf += "</p>" // Closing paragraph tag
               

                var icon="https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"
                console.log(icon);
                var temp =Math.floor(data.list[0].main.temp)+ '&deg;C ';
                var weath = data.list[0].weather[0].description
                $(".icon").attr("src",icon);
                $(".temp").append(temp);
                $(".weather").append(weath);
                console.log(temp);

                var icon2="https://openweathermap.org/img/w/" + data.list[8].weather[0].icon + ".png"
                console.log(icon2);
                var temp2 =Math.floor(data.list[8].main.temp)+ '&deg;C ';
                var weath2  = data.list[8].weather[0].description
                $(".icon2").attr("src",icon2);
                $(".temp2").append(temp2);
                $(".weather2").append(weath2);
                console.log(temp2);


                var icon3="https://openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png"
                console.log(icon3);
                var temp3 =Math.floor(data.list[16].main.temp)+ '&deg;C ';
                var weath3 = data.list[16].weather[0].description
                $(".icon3").attr("src",icon3);
                $(".temp3").append(temp3);
                $(".weather3").append(weath3);
                console.log(temp3);


                var icon4="https://openweathermap.org/img/w/" + data.list[24].weather[0].icon + ".png"
                console.log(icon4);
                var temp4 =Math.floor(data.list[24].main.temp)+ '&deg;C ';
                var weath4  = data.list[24].weather[0].description
                $(".icon4").attr("src",icon4);
                $(".temp4").append(temp4);
                $(".weather4").append(weath4);
                console.log(temp4);

                var icon5="https://openweathermap.org/img/w/" + data.list[32].weather[0].icon + ".png"
                console.log(icon5);
                var temp5 =Math.floor(data.list[32].main.temp)+ '&deg;C ';
                var weath5  = data.list[32].weather[0].description
                $(".icon5").attr("src",icon5);
                $(".temp5").append(temp5);
                $(".weather5").append(weath5);
                console.log(temp5);
             // });
              $("#showWeatherForcast").html(wf);
              //forecast.symbol.name=document.getElementsByClassName("5dayForcast").innerHTML;
              //$('5dayForcast').load('forecast.symbol.name');
            }
          });

            
          })

    });
   