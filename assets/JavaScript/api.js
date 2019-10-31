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
          //apicall.data=document.getElementsByClassName("5dayForcast").innerHTML;
          $.ajax({
            url:'http://api.openweathermap.org/data/2.5/weather',
            dataType:'json',
            type:'GET',
            data:{q:city, appid: key, units: 'metric'},

            success: function(data){
              var wf = '';
              $.each(data.weather, function(index, val){

                wf += '<p><b>' + data.name + "</b><img src=" + val.icon + ".png></p>"+ data.main.temp + '&deg;C ' + 
                ' | ' + val.main + ", " + val.description 

              });
            
             $(".ShowWeatherForcast").html(wf);
            }


            
          })

    });
  });
