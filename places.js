function getCityInfo(cityName, lat, lon){
    $('#title').empty().append(cityName);
    runPlaceSearch(lat, lon)
}

function runPlaceSearch(lat, lon){
    var latLng = {lat: lat, lng: lon};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: latLng
    })
    var service = new google.maps.places.PlacesService(map);
    var attractionArr = ['amusement_park', 'museum', 'art_gallery', 'aquarium', 'shopping_mall', 
                        'stadium', 'night_club', 'campground', 'park', 'place_of_worship', 'natural_feature']
    for (var i = 0; i < attractionArr.length; i++){
        service.nearbySearch({
            location: latLng,
            radius: 50000,
            type: [attractionArr[i]]
        }, processResults)
    }
}

function processResults(results, status){
    if (status === google.maps.places.PlacesServiceStatus.OK){
        for (var i = 0; i < results.length; i++) {
            result = results[i];
            console.log(result)
            if (result.types.indexOf('point_of_interest') < 3){
                var place = $('<p>')
                    .attr({
                        'id':result
                    })
                    .append(result.name)
                    .appendTo('#div1')
                console.log(result)
            }
        }
    }
}