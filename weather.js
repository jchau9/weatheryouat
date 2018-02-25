function getData(cityName, lat, lon, range, inputMonth, cFunction) {
    let dateStr = "2017-" + inputMonth + "-15T12:00:00";
    var url = "https://api.darksky.net/forecast/be71e2ac83119c780997fb9ac069f019/"+lat+","+lon+","+dateStr;
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return cFunction(cityName, range, this, lat, lon);
        }
    };
    xhttp.open("GET", proxy+url, true);
    xhttp.send();
}

function myFunction1(cityName, range, xhttp, lat, lon) {
    var response = JSON.parse(xhttp.responseText);
    var low = response.daily.data[0].temperatureMin;
    var high = response.daily.data[0].temperatureMax;
    var temp_list = [low, high, cityName]

    if (low >= range[0] && high <= range[1]){
        newElement(cityName, lat, lon);
    }
} 
var count = 0
function newElement(cityName, lat, lon){
    var para = $('<p>')
        .attr({
            'class':'cities',
            'id':'city' + count
        })
        .append(cityName)
        .appendTo('#div1')
        .click(function(e){
            $('#div1').empty()
            getCityInfo(cityName, lat, lon)
        });
    count++;
}

var cityDict = {"Seoul":[37.5663491,126.999731],"Tokyo":[35.68501691,139.7514074],"Istanbul":[41.10499615,29.01000159], 
                "Kuala Lumpur":[3.166665872,101.6999833],"Singapore":[1.293033466,103.8558207],"New York":[40.74997906,-73.98001693],
                "Dubai":[25.22999615,55.27997432],"Paris":[48.86669293,2.333335326],"London":[42.9699986,-81.24998661],"Bangkok":[13.74999921,100.5166447]}

function runSearch(){
    $('#div1').empty()
    $('#title').empty().append("Let's Go!")
    var inputMonth = document.getElementById("inputMonth").value;
    var inputLow = document.getElementById("inputLow").value;
    var inputHigh = document.getElementById("inputHigh").value;
    console.log(inputMonth, inputLow, inputHigh)
    for(var key in cityDict){
        getData(key, cityDict[key][0], cityDict[key][1], [inputLow, inputHigh], inputMonth, myFunction1)
    }
}



