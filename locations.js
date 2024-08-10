//Please note not preprocessing of data is happening here..I manually added the nodes here in the format specified in the github Readme file
var locations = [
    { "name" : "NIT AP Front Gate-left", "x" : 16.837415, "y" :81.538737, "children" : ["Mahatma Gandhi Circle-left", "Security Check Point",]},
    { "name" : "NIT AP Front Gate-right", "x" : 16.837236,"y" : 81.538771, "children" : ["Mahatma Gandhi Circle-right"]},
    { "name" : "Mahatma Gandhi Circle-left", "x" : 16.837002,  "y" : 81.537846, "children" : ["Outdoor Sports Junction", "NIT AP Front Gate-left","Mahatma Gandhi Circle-right"]},
    { "name" : "Mahatma Gandhi Circle-right", "x" : 16.836793, "y" :81.537922, "children" : [ "NIT AP Front Gate-right","Mahatma Gandhi Circle-left","Canteen Junction-right-up"]},
    { "name" : "Security Check Point", "x" : 16.837527, "y" :81.538437, "children" : ["NIT AP Front Gate-left"]},
    { "name" : "Outdoor Sports Junction", "x" : 16.836742, "y" : 81.537334, "children" : ["Mahatma Gandhi Circle-left","Helipad Junction","Indoor Sports Complex Parking"]},
    { "name" : "Helipad Junction", "x" : 16.837693, "y" :81.537036,"children" : ["Outdoor Sports Junction", "NIT AP VolleyBall Ground","NIT AP Cricket Stadium"]},
    { "name" : "NIT AP VolleyBall Ground", "x" : 16.837704,"y" :81.536652,"children" : [ "Helipad Junction","NIT AP Cricket Stadium"]},
    { "name" : "NIT AP Cricket Stadium", "x" : 16.837956, "y" : 81.537374,"children" : ["Helipad Junction", "NIT AP VolleyBall Ground"]},
    { "name" : "Indoor Sports Complex Parking", "x" : 16.836133,"y" : 81.536223,"children" : ["Outdoor Sports Junction", "Indoor Sports Complex","Canteen Junction-left-up"]},
    { "name" : "Indoor Sports Complex", "x" : 16.836278, "y" :  81.536138,"children" : ["Indoor Sports Complex Parking","Ravindra Kalabharathi Auditorium"]},
    { "name" : "Ravindra Kalabharathi Auditorium", "x" : 16.835889, "y" :  81.535313,"children" : ["Indoor Sports Complex","Student Amenities Centre"]},
    { "name" : "Student Amenities Centre", "x" : 16.835733, "y" :   81.534899,"children" : ["Ravindra Kalabharathi Auditorium","Canteen Junction-Left"]},
    { "name" : "Canteen Junction-left-up", "x" : 16.835464, "y" :81.53501,"children" : ["Student Amenities Centre","Canteen Junction-right-up","Canteen Junction-left-down","Indoor Sports Complex Parking"]},
    { "name" : "Canteen Junction-right-up", "x" : 16.835292,  "y" :81.535122,"children" : ["Mahatma Gandhi Circle-right","Canteen Junction-left-up","Canteen Junction-right-down"]},
    { "name" : "Dokka Seethamma Canteen", "x" : 16.835537, "y" : 81.534553,"children" : ["Canteen Junction-left-down"]},
    { "name" : "Canteen Junction-left-down", "x" : 16.835269, "y" :81.534627,"children" : ["Dokka Seethamma Canteen","Canteen Junction-right-down","Canteen Junction-left-up", "NIT AP BOYS HOSTELS-1"]},
    { "name" : "Canteen Junction-right-down", "x" : 16.835183, "y" : 81.534971,"children" : ["Canteen Junction-left-down","Canteen Junction-right-up","SRK Academic Block","DR.CV Raman Laboratory"]},
    { "name" : "SRK Academic Block", "x" : 16.834710, "y" : 81.535242,"children" : ["Canteen Junction-right-down","Canteen Junction-right-up","SRK Junction"]},
    { "name" : "SRK Junction", "x" : 16.834198, "y" :81.535569,"children" : ["SRK Academic Block","DR.APJ Abdul Kalam Laboratory"]},
    { "name" : "DR.APJ Abdul Kalam Laboratory", "x" : 16.834060,"y" :81.535273,"children" : ["SRK Junction","Civil Workshop"]},
    { "name" : "Civil Workshop", "x" : 16.833536,"y" :81.534554,"children" : ["DR.APJ Abdul Kalam Laboratory","Mechanical Workshop"]},
    { "name" : "Mechanical Workshop", "x" : 16.833224,"y" :81.534300,"children" : ["Civil Workshop","Engineering Workshop"]},
    { "name" : "Engineering Workshop", "x" : 16.832945,"y" :81.534064,"children" : ["Mechanical Workshop","DR.CV Raman Laboratory"]},
    { "name" : "DR.CV Raman Laboratory", "x" : 16.834053,"y" :81.532944,"children" : ["Engineering Workshop","Canteen Junction-right-down","SVP Central Vista"]},
    { "name" : "SVP Central Vista", "x" : 16.833787,"y" :81.532437,"children" : [,"DR.CV Raman Laboratory","NIT AP Central Library"]},
    { "name" : "NIT AP Central Library", "x" : 16.833437,"y" :81.531834,"children" : ["SVP Central Vista","MMM Academic Building"]},
    { "name" : "MMM Academic Building", "x" : 16.832868,"y" :81.530756,"children" : ["NIT AP Central Library","NIT AP BOYS HOSTELS-1","Y Junction"]},
    { "name" : "NIT AP BOYS HOSTELS-1", "x" : 16.833081,"y" :81.530672,"children" : ["Canteen Junction-left-down","MMM Academic Building","Y Junction-left-up"]},
    { "name" : "Y Junction-left-up", "x" : 16.832400,"y" :81.529474,"children" : ["NIT AP BOYS HOSTELS-1","Y Junction-left-down","Akshaya Mess","Bakery"]},
    { "name" : "Y Junction-left-down", "x" : 16.832462,"y" :81.529271,"children" : ["Y Junction-left-up","NIT AP BOYS HOSTELS-2","Y Junction"]},
    { "name" : "Y Junction", "x" : 16.832086,"y" :81.529357,"children" : ["Girls Hostel Junction-right","MMM Academic Building","Y Junction-left-down"]},
    { "name" : "Akshaya Mess", "x" : 16.833135,"y" :81.529065,"children" : ["Y Junction-left-up","NIT AP BOYS HOSTELS-2"]},
    { "name" : "NIT AP BOYS HOSTELS-2", "x" : 16.833327,"y" :81.528496,"children" : ["Y Junction-left-down","Akshaya Mess"]},
    { "name" : "Bakery", "x" : 16.831468,"y" :81.527832,"children" : ["Y Junction-left-up","Stationary Shop"]},
    { "name" : "Stationary Shop", "x" : 16.831215,"y" :81.527372,"children" : ["Bakery","Relangi Open Auditorium","Girls Hostel Junction-left"]},
    { "name" : "Relangi Open Auditorium", "x" : 16.831750,"y" :81.527060,"children" : ["Stationary Shop"]},
    { "name" : "Girls Hostel Junction-left", "x" : 16.830314,"y" :81.525755,"children" : ["Stationary Shop","Girls Hostels","Girls Hostel Junction-right"]},
    { "name" : "Girls Hostel Junction-right", "x" : 16.830034,"y" :81.525575,"children" : ["Y Junction","Girls Hostel Junction-left","Faculty Quaters","Guest house road"]},
    { "name" : "Girls Hostels", "x" : 16.830289,"y" :81.525174,"children" : ["Girls Hostel Junction-left"]},
    { "name" : "Faculty Quaters", "x" : 16.829866,"y" :81.525717,"children" : ["Girls Hostel Junction-right"]},
    { "name" : "Guest house road", "x" : 16.829693,"y" :81.525041,"children" : ["Girls Hostel Junction-right","NIT AP GUEST HOUSE","Chatrapati Shivaji Terminal"]},
    { "name" : "NIT AP GUEST HOUSE", "x" : 16.829163,"y" :81.525366,"children" : ["Guest house road"]},
    { "name" : "Chatrapati Shivaji Terminal", "x" : 16.829561,"y" :81.524614,"children" : ["Guest house road","NIT AP Back Gate","NIT AP Director's Bunglow"]},
    { "name" : "NIT AP Director's Bunglow", "x" : 16.828949,"y" :81.524730,"children" : ["Chatrapati Shivaji Terminal"]},
    { "name" : "NIT AP Back Gate", "x" : 16.829236,"y" : 81.523745,"children" : ["Chatrapati Shivaji Terminal"]},
]

//   for(var i=0;i<locations.length;i++){
//     //   var marker=L.marker([locations[i].x,locations[i].y]).addTo(mymap);
//     //   marker.bindPopup(locations[i].name);
//          console.log(locations[i].index);
// }

//Show all markers
// for(var i=0;i<locations.length;i++){
//       var marker=L.marker([locations[i].x,locations[i].y]).addTo(mymap);
//       marker.bindPopup(locations[i].name);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

     



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//4)Finding the distances
// Haversine formula for finding the shortest distance ebtween two coordinates
// formula:	a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
// c = 2 ⋅ atan2( √a, √(1−a) )
// d = R ⋅ c

function degtoRad(value){
   return value*Math.PI/180;
}

//Calculating Havestine Distance
function calcCrowDist(lat1,long1,lat2,long2){
        var R=6371000;  //distance in km
        var dlat=degtoRad(lat2-lat1);
        var dlong=degtoRad(long2-long1);
        lat1=degtoRad(lat1);
        lat2=degtoRad(lat2);
        var a=Math.sin(dlat/2)*Math.sin(dlat/2)+Math.cos(lat1)*Math.cos(lat2)*Math.sin(dlong/2)*Math.sin(dlong/2);
        var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
        return R*c;  //distance in metres
}

//console.log(calcCrowDist(30.355267,76.369825,30.355583,76.36867));
var distMat=[];

//fill the distance matrix
for(var i=0;i<locations.length;i++){
    //this matrix will contain the distance of each node from anothe node on the map
    locations[i].index=i;
    var distanceMatrixForEachPlace=[];
    for(var j=0;j<locations.length;j++)
    {
        //Check if a node is connected to another node by a straight line
        if(locations[i].children.indexOf(locations[j].name)<=-1){
            distanceMatrixForEachPlace[j]=Number.MAX_VALUE;
        }
        else{
            distanceMatrixForEachPlace[j]=calcCrowDist(locations[i].x,locations[i].y,locations[j].x,locations[j].y);
        }
    }
    //Push the distances to all nodes connected from the ith node in the locations array
    distMat.push(distanceMatrixForEachPlace);
}


var polyline,markers=[];

//3)Displaying and removing the lines and markers
function removeLinesAndMarkers(){ 
    if(typeof polyline != "undefined")
    {
        mymap.removeLayer(polyline);
    }
    //Removing markers
  if(markers.length > 0)
  {
    for(var marker of markers)
    {
      mymap.removeLayer(marker);
    }
  }
}

var myIcon=L.divIcon({className:'leaflet-div-icon'});
//routes contains all the indices of the nodes that fall in the given path
function addLinesAndMarkers(route) {
    var latlong = [];
    var dist = 0;
    var distText;

    if (route != null && route.length > 0) {
        for (var i = 0; i < route.length; i++) {
            var index = route[i];
            var location = locations[index];

            var X = location.x;
            var Y = location.y;
            var name = location.name;

            if (i < route.length - 1) {
                var nextIndex = route[i + 1];
                dist += distMat[index][nextIndex];
            }

            latlong.push([X, Y]);

            // Add markers with different styles
            if (i === 0 || i === route.length - 1) {
                // Source or destination node
                var marker = L.marker([X, Y]).addTo(mymap);
                marker.bindPopup(name);
            } else {
                // Intermediate node
                var marker = L.circleMarker([X, Y], {
                    color: 'blue',
                    radius: 5
                }).addTo(mymap);
                marker.bindPopup(name); // Bind popup with the name for intermediate points
            }

            markers.push(marker);
        }
    }

    if (Math.floor(dist) < 1000) {
        distText = Math.floor(dist) + ' m';
    } else {
        distText = (dist / 1000).toFixed(1) + ' km';
    }

    polyline = L.polyline(latlong, {
        color: 'purple',
        weight: 7
    }).addTo(mymap);
    
    if (latlong.length > 0) {
        mymap.flyToBounds([latlong[0], latlong[latlong.length - 1]], 18);
    }

    var slider = document.getElementById('routeInfo');
    var details = document.getElementById('details');
    var distance = document.getElementById('distance');

    details.innerHTML = "via the nearest node";
    distance.innerHTML = distText;
    slider.classList.remove('closed');
}



//We will use a 1-d dp array to store the initial distances
function bellmanFord(src,dest){
    var route;
    if(src==dest){
        addLinesAndMarkers(null);
        return;
    }
    var n=distMat.length;
    //dp array will store the shortest distance to each connected node of the graph
    var dp=[];
    var nodes=[],route=[src];
    var firstNearest;
    //Initialize the dp array
    for(var i=0;i<n;i++){
        var init=Number.MAX_VALUE;
        if(i==dest){
            init=0;
        }
        dp.push(init);
    }
    //Outer loop is for relaxing all edges n-1 times
    for(var i=1;i<n;i++){
        //Traversing over the dist matrix of the graph
        for(var j=0;j<n;j++){
            var min_dist=Number.MAX_VALUE;
            for(var k=0;k<n;k++)
            {
                var temp=dp[k]+distMat[j][k];
                //checking for shorter path
                if(temp<min_dist){
                    min_dist=temp;
                    firstNearest=k;
                }
            }
            if(dp[j]>min_dist){
                //relax the node by updating the distance
                dp[j]=min_dist;
                //Storing the nearest neighbour for each node 
                nodes[j]=firstNearest;
            }
        }
    }
    // console.log(dp);
    // console.log(distMat);
    var j=src;
    //Logic to store the path
   do{
        route.push(nodes[j]);
        //Go to that neighbouring node
        j=nodes[j];
    } while(j!=dest)
   console.log(route);
   removeLinesAndMarkers();
   addLinesAndMarkers(route);
}
//bellmanFord(0,5);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var sourceIndex=-1;
var destIndex=-1;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2)Styling the drop down menu and calling the Bellman Ford Algorithm
function autocomplete(inp,arr){
        var currentFocus;  //acts like an index for all elements in the html collection of the suggestions div
        inp.addEventListener("input",function(e){
             //val is containing the value of the entered input
             var suggestions,entry,i,val=this.value;
             
             //Close all open lists to refine results
             closeAllLists();
             //No value entered
             if(!val){
                 return false;
             }
             currentFocus=-1;
             //console.log(this);
             //Create a div element that will contain the items
             suggestions=document.createElement("div");
             suggestions.setAttribute("id",this.id+"autocomplete-list");
             suggestions.setAttribute("class","autocomplete-items");
             //console.log(suggestions);
             //Append the div as a child of autocomplete container
             this.parentNode.appendChild(suggestions);
             for(i=0;i<arr.length;i++){
                    //Check matching letters in the input and the location array
                    if(arr[i].name.substr(0,val.length).toUpperCase()===val.toUpperCase()){
                          //if above condition is satisfied create a div element for the matching element in the array
                          entry=document.createElement("div");
                          //Now inside the above created div we will be adding the info about the current array element
                          entry.innerHTML="<strong>"+arr[i].name.substr(0,val.length)+"</strong>";
                          //remaining string added as it is
                          entry.innerHTML+=arr[i].name.substr(val.length);
                          //Add input fields to the created entry div
                          entry.innerHTML+="<input id='placename' type='hidden' value='"+arr[i].name+"'>";
                          entry.innerHTML+="<input id='x' type='hidden' value='"+arr[i].x+"'>";
                          entry.innerHTML+="<input id='y' type='hidden' value='"+arr[i].y+"'>";
                          entry.innerHTML+="<input class='index' type='hidden' value='"+i+"'>";
                          //console.log(suggestions);
                          //Execute a function when a choice is clicked
                          entry.addEventListener('click',function(e)
                          {
                                //console.log(entry);
                                //console.log(this.getElementsByTagName("input"));
                                //Insert the value in the autocomplete text field
                                inp.value=this.getElementsByTagName("input")[0].value;
                                var name=inp.value;
                                var x=this.getElementsByTagName("input")[1].value;
                                var y=this.getElementsByTagName("input")[2].value;
                                var index=this.getElementsByTagName("input")[3].value;
                                //Create an object of the data
                                var place={
                                    "name":name,
                                    "x":x,
                                    "y":y,
                                    "index":index
                                }
                                //console.log(place);
                                //After both fields are filled then call the function
                                //Check what type of input field it is
                                if(inp.id==="sourceInput"){
                                    source=place;
                                    sourceIndex=place.index;
                                    //console.log(sourceIndex);
                                    if(destIndex!=-1){
                                        //call the bellmanFord function
                                        bellmanFord(sourceIndex,destIndex);
                                    }
                                }
                                    else if(inp.id==="destInput"){
                                        dest=place;
                                        destIndex=place.index;
                                        if(sourceIndex!=-1){
                                            bellmanFord(source.index,dest.index);
                                        }
                                    }
                                //Close all the open lists of autcomplete class
                                closeAllLists();
                          });
                          //Append entry as a child of the suggestions div
                          suggestions.appendChild(entry);
                    }
             }
        });
        //Even handler for navigating through keys
        inp.addEventListener("keydown",function(e){
           //Returns the entire suggestions div
           var x=document.getElementById(this.id+"autocomplete-list");
           //console.log(x);
           //x=x.getElementsByTagName("div");
          //console.log(x[1]);
           if(x){
            //The entire HTML clllection obtained from the suggestions div
              x=x.getElementsByTagName("div");
            //  console.log(x);
              if(e.keyCode==40){
                  //if down key arrow is pressed
                  currentFocus++;
                  //make current item more visible
                  addActive(x);
              }
              else if(e.keyCode==38){
                  //if up arrow is clicked
                  currentFocus--;
                  //make current item more visible
                  addActive(x);
              }
              else if(e.keyCode==13){
                  //if enter key is pressed prevent form frmo beng submitted in case input is not given
                  e.preventDefault();
                  if(currentFocus>-1){
                      //simulating a click on the active item if found 
                      if(x){
                        x[currentFocus].click();
                      }
                  }
              }
           }
        });

        //adding active class 
        function addActive(x){
            if(!x){
                return false;
            }
            removeActive(x);
            //Logic to prevent currentFocus from overflowing or underflowing
            if(currentFocus>=x.length){
                currentFocus=0;
            }

            if(currentFocus<0){
                currentFocus=(x.length-1);
            }
            //add autocomplete-active class
            x[currentFocus].classList.add("autocomplete-active");
        }

        //removing active class
        function removeActive(x){
            //remove active class from all active elements in the suggestions div
            for(var i=0;i<x.length;i++){
                 x[i].classList.remove("autocomplete-active");
            }
        }

        //function to close all active lists of the 
        function closeAllLists(el){
             //close all autocomplete lists in document except one passed as argument
            var openList=document.getElementsByClassName("autocomplete-items");
            //console.log(openList);
            for(var i=0;i<openList.length;i++){
                //if null is passed as the item to be deleted then all items are deleted
                if(el!==openList[i] && el!==inp){
                     //openList[i].parentNode.removeChild(openList[i]);    //older versions of JS
                    openList[i].remove();
                }
            }
        }

        //Close all active lists if any region in document is clicked
        document.addEventListener("click",function(e){
            // console.log("Hi");
            closeAllLists(e.target);
        });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//1)Extract data from the input element of source and dest and pass it in the autocomplete function
autocomplete(document.getElementById("sourceInput"),locations);
autocomplete(document.getElementById("destInput"),locations);


