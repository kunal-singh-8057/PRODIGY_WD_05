let weather = 
{
    apikey:"5271e1b4031b8fae6457e94a740540f5",

    fetchweather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + this.apikey)
        .then((res) => res.json())
        .then((data) => this.displayweather(data));
    },
    
    displayweather: function(data)
    {
        const {name} = data;
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,temp,humidity,speed);

         document.getElementById("city").innerText = "Weather in "+name;
         document.getElementById("temp").innerText =  "Temperature is : "+Math.round(temp-273.15) +"°c";
         document.getElementById("wind").innerText  = "Speed of Wind is : "+speed + "Km/h";
         document.getElementById("humidity").innerText = "Humidity : "+humidity + "%";

       
    },

    search: function()
    {
        this.fetchweather(document.getElementById("search").value);
    },
};

     document.getElementById("btn").addEventListener("click",function() {
      weather.search();
});