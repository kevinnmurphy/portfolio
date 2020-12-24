---
title: 'Custom Routes With Google Maps API'
date: '2020-10-17'
---

This post's focus is creating routes using the Google Maps JS API, creating and sorting markers, and saving them to custom routes.

---

![alt text](https://images.unsplash.com/photo-1553290322-0440fe3b1ddd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)

---

Have you ever wanted to know the fastest way to navigate through all of your errands or deliveries? This app focuses on being able to create and save trips with multiple locations, that will display on a map. With the ability to add, remove, and update exiting points, as well as sort by closest distance to the origin.

The first step to getting started is setting up a database with simple Trip and Location classes to store data. As well as using FastJson to serialize the data in a predictable way to be accessed by the frontend.

The models, controllers, and serializers all follow the basic has_many model in this schema:

create_table "locations", force: :cascade do |t|
t.string "name"
t.decimal "lat"
t.decimal "lon"
t.bigint "trip_id", null: false
t.datetime "created_at", precision: 6, null: false
t.datetime "updated_at", precision: 6, null: false
t.index ["trip_id"], name: "index_locations_on_trip_id"
end

create_table "trips", force: :cascade do |t|
t.string "name"
t.string "description"
t.datetime "created_at", precision: 6, null: false
t.datetime "updated_at", precision: 6, null: false
end

add_foreign_key "locations", "trips"

After the backend is working, it's time to connect it to the front end using a simple fetch. Understanding how the json is structured is important to know how the data response will need to be parsed to create the desired objects. Here is a sample of one json object.

"data": [
{
"id": "1",
"type": "trip",
"attributes": {
"id": 1,
"name": "Saturday Shopping",
"description": "Time to buy, everything",
"updated_at": "2020-08-26T22:13:20.565Z"
},
"relationships": {
"locations": {
"data": [
{
"id": "6",
"type": "location"
},
{
"id": "7",
"type": "location"
},
{
"id": "8",
"type": "location"
}
]
}
}
}

With a constructor set up like this:

    constructor({id, name, description, updated_at}){
        this.id = id
        this.name = name
        this.description = description
        this.updated_at = updated_at
    }

Data can be passed through using these settings on the json response to create accurate objects.

    sanitize(res) {
        let trip = new Trip({id: res.id, ...res.attributes, ...res.relationships.locations.data})
    }

This response is formatted to receive the id, all attributes, and related locations.

After making sure the data is structured correctly, it can be used to create a div for each trip in the database to display.

    fetchTrips() {
        fetch(`${baseUrl}/trips`)
            .then(res => res.json())
            .then(json => {
                json.data.forEach((trip) => this.sanitizeAndAdd(trip))
            })
            .catch((err) => console.log(err.message))
    }

        this.element.innerHTML = `
            <h3 class="title">${this.name}</h3>
            <p class="description">${this.description}</p>
            <button class="delete" data-id="${this.id}">x</button>
            <button class="update" data-id="${this.id}">Update</button>
            <span class="updated_at">(${this.updated_at})</span>
        `

Using an event listener, the selected trip will filter the locations based on which trip is selected using an event listener on each div:

    displayLocations = (e) => {
        const locationList = document.querySelector('#location-list')
        locationList.innerHTML = ''
        Trip.findById(this.id).locations().forEach((i) => {
            i.attachToDom()
        })

        Trip.currentTrip(Trip.findById(this.id))
    }

After the trips and locations are set up, the real fun begins when using the Google Maps API to visualize the data inputs. Google has great documentation on how to obtain an API key, add the required html fetch script, the format for your call in Javascript, and additional info on usage here: Google Maps API

The most basic form of a Google Maps Api call looks like this in the index.html:

<div id="Map" style="width:100%;height:400px;"></div>

<script>
function myMap() {
    const mapSettings = {
      zoom: 9,
      center: center
    }
    const map = new google.maps.Map(document.getElementById("map"), mapSettings)
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>

The map requires a height and width to be set to display. The map will also not run without inserting your own API key in the request on the last script line. I chose to break my parts into a div tag in the html file, with an id of "Map", style properties in the css file to make the map fill the right third of the app, and all of the logic in the JS file. By abstracting the pieces of the call into modular sections, I am able to modify and add events to do useful things like, clicking on the map sends the data points to the location creation tab, where you can add a new location marker to the map for display.

<div id="map" class="map"></div>

#map {
height: 80vh;
width: 95%;
}

function initMap(center = markers[0]) {
const markerArray = []

const directionsService = new google.maps.DirectionsService()

const mapSettings = {
zoom: 9,
center: center
}

const map = new google.maps.Map(document.getElementById("map"), mapSettings)
let clickCoord

map.addListener('click', (e) => {
clickCoord = e.latLng.toJSON()
})
}

For the directions, I used the Directions API, creating beginning and endpoints from an array sorted by distance form the origin point. Any new points added after the first two will be resorted into the shortest path and redisplayed, using a simple call like below:

function last(array) {
return last_element = array[array.length - 1]
}

directionsService.route(
{
origin: coordinates[0],
destination: last(coordinates),
waypoints: newWaypoints,
travelMode: google.maps.TravelMode.DRIVING
}

There are many, many more features to discover in the Google API, but I hope this has helped display a quick guide to getting started in creating, saving, and updating coordinate data in a visual way.
