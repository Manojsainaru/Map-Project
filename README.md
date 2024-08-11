# mapTU
> A Leaflet.js based maps-clone that implements shortest route finding on a map of the college campus and renders requisite polylines

### Front End
* Leaflet.js Rendering a map of the college campus using Leaflet.js' support for creating OpenStreetMap tiles by simply passing the coordinates required

* Data: 73 nodes manually added into a Javascript locations array, each node structured like so: 
```
var locations = [
{ "name" : "Entrance Intersection", "x" :  30.351946, "y" : 76.372913,
"children" : ["Car Parking", "Audi-Cafeteria Intersection"]},
...
]
```

![maptu](https://user-images.githubusercontent.com/54039704/173228696-657423c1-6df9-4682-b575-f799cd0096b3.gif)


The ```children``` refers to nodes which can be joined from the source node using a straight line path. ```x``` and ```y``` refers to the latitude and longitude of the place

![bellman algo](https://user-images.githubusercontent.com/54039704/173008574-81e1a2c2-019d-4399-b671-321f6a04a8fd.jpg)

#### Sources of error in the project

![errors](https://user-images.githubusercontent.com/54039704/173008695-63d8e42e-de01-4d7b-88cd-cad3255f87c4.jpg)

#### Possible enhancements

![enhancements](https://user-images.githubusercontent.com/54039704/173008736-0c4761bf-a462-4412-8d3c-6af6ee2a8fe7.jpg)


#### No preprocessing of data is being done here. Nodes are manually added.




