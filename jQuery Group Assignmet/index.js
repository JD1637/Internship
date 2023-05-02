
// Define the flights data as a JSON array
// Storing in localstorage if not there
if (localStorage.getItem("flights") === null) {
  let flights = [
    {
      id: "FL001",
      airline: "Delta Airlines",
      flightNumber: "DL101",
      source: "JFK",
      destination: "LAX",
      departureTime: "2023-03-01T08:00:00Z",
      arrivalTime: "2023-03-01T11:30:00Z",
      price: 200,
      seats: {
        economy: ["E1", "E2", "E3", "E4"],
        business: ["B1", "B2", "B3", "B4"],
        first: ["F1", "F2", "F3", "F4"],
      },
    },
    {
      id: "FL002",
      airline: "United Airlines",
      flightNumber: "UA201",
      source: "ORD",
      destination: "MCO",
      departureTime: "2023-03-01T12:00:00Z",
      arrivalTime: "2023-03-01T15:30:00Z",
      price: 150,
      seats: {
        economy: ["E1", "E2", "E3", "E4"],
        business: ["B1", "B2", "B3", "B4"],
        first: ["F1", "F2", "F3", "F4"],
      },
    },
    {
      id: "FL003",
      airline: "Southwest Airlines",
      flightNumber: "WN301",
      source: "DAL",
      destination: "MCO",
      departureTime: "2023-03-01T10:00:00Z",
      arrivalTime: "2023-03-01T13:30:00Z",
      price: 100,
      seats: {
        economy: ["E1", "E2", "E3", "E4"],
        business: ["B1", "B2", "B3", "B4"],
        first: ["F1", "F2", "F3", "F4"],
      },
    },
    {
      id: "FL004",
      airline: "Western Airlines",
      flightNumber: "WN302",
      source: "DAL",
      destination: "MCO",
      departureTime: "2023-03-01T10:00:00Z",
      arrivalTime: "2023-03-01T13:30:00Z",
      price: 200,
      seats: {
        economy: ["E1", "E2", "E3", "E4"],
        business: ["B1", "B2", "B3", "B4"],
        first: ["F1", "F2", "F3", "F4"],
      },
    },
  ];
  localStorage.setItem("flights", JSON.stringify(flights));
}

// Get From Localstorage
let flights = JSON.parse(localStorage.getItem("flights"));
let source, destination, name, email, flightClass;
//Jquery
$(document).ready(function () {
  //hide filtered flight

  $("#flights").hide();

  // Hide the booking form initially
  $("#booking-form").hide();

  $("#source").append(flights);

  // Handle form submit
  $("#search-form").submit(function (event) {
    event.preventDefault(); // Prevent form from submitting
    // Get selected source and destination airports
    source = $("#source-loc").val();
    destination = $("#destination-loc").val();

    // console.log($("input[name='class']:checked").val());
    // Filter the flights based on the selected airports
    let filteredFlights = flights.filter(function (flight) {
      arrDate = new Date(flight.arrivalTime).toLocaleDateString()
      userDate = new Date($('#userDate').val()).toLocaleDateString()
      return flight.source === source && flight.destination === destination && arrDate===userDate;
    });
    // Clear any previous flights from the results section
    $("#flights").empty();
    // Display each filtered flight as a list item
    $("#flights").append(` <h1><i class="bi bi-airplane-fill"></i> Flights</h1>
    <hr />`);

    // Checks flight available  or not
    if (filteredFlights.length) {
      $.each(filteredFlights, function (index, flight) {
        const flightHtml = `
          <div class="card" id="flights">
        <div class="inner-div" style={width:320px}>
          <img
            class="logo"
            src="https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?w=826&t=st=1677065166~exp=1677065766~hmac=a9ae1dbf523d675138b1e403776597e7448c39199ffa6c37143d6ec726c1f644"
            alt=""
          />
          <h2>${flight.airline}</h2>
        </div>
        <div class="inner-div flex-col">
          <h3>${new Date(flight.departureTime).toLocaleTimeString()}</h3>
          <small>${flight.source}</small>
        </div>
        <div class="inner-div flex-col">
          <h4>08 <span class="gray">h</span> 50 <span class="gray">m</span></h4>
          <div class="line">
            <i class="bi bi-airplane-fill"></i>
          </div>
        </div>
        <div class="inner-div flex-col">
          <h3>${new Date(flight.arrivalTime).toLocaleTimeString()}</h3>
          <small>${flight.destination}</small>
        </div>
        <div class="inner-div">
          <b> $ ${flight.price}</b>
        </div>
        <button class="book select-flight-btn" id=${flight.id}>
          Next
          <i class="bi bi-arrow-right-circle"></i>
        </button>
      </div>
      `;
        $("#flights").append(flightHtml);
      });
    } else {
      $("#flights").append(`<h2>No Flight Founds</h2>`);
    }

    $("#flights").slideDown();
  });

  // Handle select flight button click
  $("#flights").on("click", ".select-flight-btn", function () {
    $(".container-home").slideUp();
    // Get the flight ID and find the corresponding flight object
    let flightId = $(this).attr("id");

    let flight = flights.find(function (flight) {
      return flight.id === flightId;
    });

    // Clear any previous form data
    $("#booking-form input[type='text']").val("");
    

    // Get data of Fligt class
    flightClass = $("input[name='class']:checked").val();
    $.each(flight.seats[flightClass], function (index, value) {
      $("#seat").append(`<option value=${value}>${value}</option>`);
    });

    $("#source").val(source)
    $("#destination").val(destination)

    // Show the booking form
    $("#flights").hide();
    $("#booking-form").show();

    // Handle form submit
    $("#booking-form").submit(function (event) {
      event.preventDefault();
      // Get the user's name and email
      name = $("#name").val();
      email = $("#email").val();
      // Get the selected seat
      let seat = $("#seat").val();
      // Find the selected seat in the flight's seat map

      // Re-Check
      flights = JSON.parse(localStorage.getItem("flights"));
      flight = flights.find(function (flight) {
        return flight.id === flightId;
      });
      let index = flight.seats[flightClass].indexOf(seat);
      if (index >= 0) {

        // Seat is available, update the flight's seat map
        flight.seats[flightClass].splice(index, 1);

        // Generate a booking confirmation code
        let confirmationCode = Math.random()
          .toString(36)
          .substring(2, 10)
          .toUpperCase();

        // Display booking confirmation
        let confirmationHtml = `
          <div class="ticket" style="margin: 100px auto;padding: 30px;width: 500px;height: 500px;background-color: rgb(180, 255, 239);border-radius: 1px white;border-radius: 10px;">
        <h1>AIRWISE</h1>
          <div class="horizontal" style="width: 80%; margin:30px auto">
            <h1>${source}</h1>
            <h1><i class="bi bi-airplane-fill" style="color: blueviolet;"></i></h1>
            <h1>${destination}</h1>
          </div>
          <div class="horizontal" style="width: 80%; margin:20px auto">
            <div class="vertical">
              <small>name</small>
              <h3>${name}</h3>
            </div>
            <div class="vertical">
            <small>email</small>
              <h2>${email}</h2>
            </div>
          </div>
          <div class="horizontal" style="width: 80%; margin:20px auto">
            <div class="vertical">
            <small>Flight ID</small>
              <h3>${flight.id}</h3>
            </div>
            <div class="vertical">
            <small>Seat No.</small>
              <h2>${seat}</h2>
            </div>
          </div>
          <div class="horizontal" style="width: 80%; margin:20px auto">
           <h2 style="margin: auto;">Enjoy your Flight</h2>
          </div>
          </div>
          <button class="print-btn" id="print-ticket">Print</button>
          `;
        $("#booking-form").html(confirmationHtml);
        $("#print-ticket").click(()=> {
          $("#print-ticket").hide();
          window.print();
        })

        //Update Local Storage
        localStorage.setItem("flights", JSON.stringify(flights));
      } 
      
      // Seat is already taken, display error message
      else {
        alert("Seat not available");
      }
    });
  });
});
