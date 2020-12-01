function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location;
    location = document.querySelector("#location").value;
    if(location == ""){
        location = "Ann Arbor"
    }
    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = "imperial";
    if(document.querySelectorAll("input[name=temp]:checked")[0]){
        format = document.querySelectorAll("input[name=temp]:checked")[0].value;
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.  
    var loc_list = location.split(" ");
    if(!isNaN(loc_list[0])){
        query = "https://api.openweathermap.org/data/2.5/weather?zip="+loc_list[0]+"&units="+format+"&appid=37bdd7a970968c72dbf93b42ed08568e";
    }
    else {
        query = "https://api.openweathermap.org/data/2.5/weather?q=" +location+"&units="+format+"&appid=37bdd7a970968c72dbf93b42ed08568e";
    }
    console.log("Query is :" + query);
    //"api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid=37bdd7a970968c72dbf93b42ed08568e"
    
    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));

        weather = json["weather"][0]["description"];

        temp = json["main"]["temp"];
        loc = json['name'];

        document.querySelector("#loc").innerHTML=loc;
        document.querySelector("#temp").innerHTML=temp + " with " + weather;
        
        tempImg=document.querySelector("#tempImg");
        console.log(json["weather"][0]["icon"]);
        var source = 'http://openweathermap.org/img/wn/'+ json["weather"][0]["icon"]+'.png';
        console.log(source);
        tempImg.src=source;
        tempImg.alt=weather;
        tempImg.title="Weather in "+loc;
        console.log(tempImg.title);
        document.querySelector("#forecast").style.display="block";
    });
}
