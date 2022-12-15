const data = [
    // Date:25/02/2021
    {
        price: 2500,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '10.15 am',
        arrivalTime: '11.45 am',
        code: 'TY-6239',

        from: {
            city: 'Delhi',
            short: 'DEL',
        },
        to: {
            city: 'Mumbai',
            short: 'BOM',
        },
    },
    {
        price: 8500,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '12.20 pm',
        arrivalTime: '1.45 pm',
        code: 'TY-6239',

        from: {
            city: 'Delhi',
            short: 'DEL',
        },
        to: {
            city: 'Mumbai',
            short: 'BOM',
        },
    },
    {
        price: 5500,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '4.20 pm',
        arrivalTime: '6.35 pm',
        code: 'TY-6239',

        from: {
            city: 'Mumbai',
            short: 'BOM',
        },
        to: {
            city: 'Delhi',
            short: 'DEL',
        },
    },
    {
        price: 3800,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '7.05 pm',
        arrivalTime: '8.25 pm',
        code: 'TY-6239',

        from: {
            city: 'Mumbai',
            short: 'BOM',
        },
        to: {
            city: 'Delhi',
            short: 'DEL',
        },
    },
    {
        price: 7300,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '5.05 pm',
        arrivalTime: '6.25 pm',
        code: 'TY-6239',

        from: {
            city: 'Mumbai',
            short: 'BOM',
        },
        to: {
            city: 'Bangalore',
            short: 'BLR',
        },
    },
    {
        price: 2400,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '9.05 am',
        arrivalTime: '10.25 am',
        code: 'TY-6239',

        from: {
            city: 'Mumbai',
            short: 'BOM',
        },
        to: {
            city: 'Bangalore',
            short: 'BLR',
        },
    },
    {
        price: 2900,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '9.50 am',
        arrivalTime: '11.25 am',
        code: 'TY-6239',

        from: {
            city: 'Bangalore',
            short: 'BLR',
        },
        to: {
            city: 'Mumbai',
            short: 'BOM',
        },
    },
    {
        price: 3500,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '11.23 am',
        arrivalTime: '12.25 pm',
        code: 'TY-6239',

        from: {
            city: 'Mumbai',
            short: 'BOM',
        },
        to: {
            city: 'Hyderabad',
            short: 'HYD',
        },
    },
    {
        price: 4500,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '1.25 pm',
        arrivalTime: '2.45 pm',
        code: 'TY-6239',

        from: {
            city: 'Mumbai',
            short: 'BOM',
        },
        to: {
            city: 'Hyderabad',
            short: 'HYD',
        },
    },
    {
        price: 3300,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '1.55 pm',
        arrivalTime: '3.10 pm',
        code: 'TY-6239',

        from: {
            city: 'Hyderabad',
            short: 'HYD',
        },
        to: {
            city: 'Mumbai',
            short: 'BOM',
        },
    },
    {
        price: 3400,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '4.05 pm',
        arrivalTime: '5.45 pm',
        code: 'TY-6239',

        from: {
            city: 'Hyderabad',
            short: 'HYD',
        },
        to: {
            city: 'Mumbai',
            short: 'BOM',
        },
    },
    {
        price: 5100,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '1.23 pm',
        arrivalTime: '3.45 pm',
        code: 'TY-6239',

        from: {
            city: 'Delhi',
            short: 'DEl',
        },
        to: {
            city: 'Bangalore',
            short: 'BLR',
        },
    },
    {
        price: 3500,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '2.33 pm',
        arrivalTime: '3.27 pm',
        code: 'TY-6239',

        from: {
            city: 'Delhi',
            short: 'DEl',
        },
        to: {
            city: 'Bangalore',
            short: 'BLR',
        },
    },
    {
        price: 9500,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '4.19 pm',
        arrivalTime: '5.50 pm',
        code: 'TY-6239',

        from: {
            city: 'Bangalore',
            short: 'BLR',
        },
        to: {
            city: 'Delhi',
            short: 'DEL',
        },
    },
    {
        price: 1500,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '7.33 am',
        arrivalTime: '8.57 am',
        code: 'TY-6239',

        from: {
            city: 'Bangalore',
            short: 'BLR',
        },
        to: {
            city: 'Delhi',
            short: 'DEL',
        },
    },
    {
        price: 6540,
        depart: '2022-12-17',
        arrival: '2022-12-17',
        departTime: '9.14 am',
        arrivalTime: '10.45 am',
        code: 'TY-6239',

        from: {
            city: 'Delhi',
            short: 'DEL',
        },
        to: {
            city: 'Hyderabad',
            short: 'HYD',
        },
    },
    {
        price: 8943,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '11.00 am',
        arrivalTime: '12.30 pm',
        code: 'TY-6239',

        from: {
            city: 'Hyderabad',
            short: 'HYD',
        },
        to: {
            city: 'Delhi',
            short: 'DEL',
        },
    },
    {
        price: 4578,
        depart: '2022-12-16',
        arrival: '2022-12-16',
        departTime: '12.45 pm',
        arrivalTime: '1.50 pm',
        code: 'TY-6239',

        from: {
            city: 'Hyderabad',
            short: 'HYD',
        },
        to: {
            city: 'Delhi',
            short: 'DEL',
        },
    }
]



/* The Start of all function */
let SearchFlight = function () {

    //Constructor cotext
    this.tripType = document.searchFlight.radioOneWay.checked ? "One Way" : "Round Trip";
    this.formData = {};

    /* Form input Dats */
    this.getFormData = function () {
        this.formData = {
            fromPlace: document.searchFlight.fromPlace.value,
            toPlace: document.searchFlight.toPlace.value,
            travelDate: document.searchFlight.travelDate.value,
            dateOfReturn: document.searchFlight.dateOfReturn.value,
            noOfTravelers: document.searchFlight.noOfTravelers.value,
        }
    };

    /* One Way & Round Trip Check */
    this.showHideRoundTrip = function () {
        for (var i = 0; i < document.searchFlight.trip.length; i++) {
            document.searchFlight.trip[i].addEventListener("click", () => {
                if (!document.searchFlight.radioOneWay.checked) {
                    document.getElementById("returnDate").style.display = "block";
                    this.tripType = "Round Trip";
                }
                else {
                    document.getElementById("returnDate").style.display = "none";
                    this.tripType = "One Way";
                }
            })
        }
    };

    /* Validate Travel Date Check */
    this.validateEnteredDate = function (event) {
        let selectedDate = new Date(event.target.value);
        let now = new Date();
        if (selectedDate <= now) {
            alert("Date must be in the future");
            event.target.value = "";
        }
    };
    /* Validate Number of Travelers */
    this.validateTravelers = function (event) {
        let selectedTravelers = event.target.value;
        if (selectedTravelers > 8) {
            alert("Please Enter Below 8 Travelers");
            event.target.value = "";
        }
    };

    /* Validting Form after Submit Button */
    this.submitValues = ((event) => {
        this.getFormData();
        //Array Distruction
        const { fromPlace, toPlace, travelDate, dateOfReturn, noOfTravelers } = this.formData;
        const { tripType } = this;
        if (fromPlace !== "" && toPlace !== "" && travelDate !== "" && noOfTravelers !== "") {
            if (tripType === "Round Trip" && dateOfReturn === "") {
                alert("Fields can not be empty");
                return false;
            }
            if (fromPlace === toPlace) {
                alert("From and To place cannot be same");
                return false;
            }
            if (tripType === "Round Trip" && dateOfReturn < travelDate) {
                alert("Return Date must not less then One Way");
                return false;
            }
            if (noOfTravelers <= 0) {
                alert("Please Choose Minimum 1 Passenger");
                return false;
            }
            this.displayResult(tripType,this.formData);           
        }
        else {
            alert("Fields can not be empty");

        }

    });

    
    this.displayResult = function (selectedTripType, formData) {
        const { fromPlace, toPlace, travelDate, dateOfReturn, noOfTravelers } = this.formData;
        let displayData = {
            beforeSearch: document.getElementsByClassName("beforeSearch")[0],
            flightOnward: document.getElementsByClassName("flightOnward")[0]
        };
        const { beforeSearch, flightOnward, flightReturn } = displayData;
        const { tripType, changeValues } = this;

        if (tripType === "One Way") {

            let result = data.filter(function (dt) {

                return dt.from.city.toLowerCase() == fromPlace.toLowerCase()   &&
                    dt.to.city.toLowerCase() == toPlace.toLowerCase()   &&
                    dt.depart == travelDate || 
                    dt.from.short.toLowerCase() == fromPlace.toLowerCase()   &&
                    dt.to.short.toLowerCase() == toPlace.toLowerCase()   &&
                    dt.depart == travelDate
            });
            console.log(result);

            result.forEach(res => res.price *= noOfTravelers);
            
            console.log(result);
            beforeSearch.style.display = "none";
            flightOnward.style.display = "block";
            changeValues(tripType, ".flightOnward", ".headStartLoc", ".headStartDate", ".headEndLoc", ".headEndDate", ".headEndLocRet", ".headStartLocReturn", ".strtDate", ".endDate", result);
        }
        if (tripType === "Round Trip") {
            let result = data.filter(function (dt) {
                return dt.from.city.toLowerCase() == fromPlace.toLowerCase()   &&
                    dt.to.city.toLowerCase() == toPlace.toLowerCase()   &&
                    dt.depart == travelDate || 
                    dt.from.short.toLowerCase() == fromPlace.toLowerCase()   &&
                    dt.to.short.toLowerCase() == toPlace.toLowerCase()   &&
                    dt.depart == travelDate
            });
            
            resultReturn = data.filter(function (dt) {
                return dt.from.city.toLowerCase() ==  toPlace.toLowerCase()  &&
                    dt.to.city.toLowerCase() == fromPlace.toLowerCase()   &&
                    dt.depart == dateOfReturn ||   
                    dt.from.short.toLowerCase() ==  toPlace.toLowerCase()  &&
                    dt.to.short.toLowerCase() == fromPlace.toLowerCase()   &&
                    dt.depart == dateOfReturn
            });

            result = result.concat(resultReturn)
            console.log(result);

            beforeSearch.style.display = "none";
            flightOnward.style.display = "block";
            changeValues(tripType, "flightOnward", ".headStartLoc", ".headStartDate", ".headEndLoc", ".headEndDate", ".headEndLocRet", ".headEndLocReturn", ".strtDate", ".endDate", result);

        }
        const container = document.getElementById('resultContainer');     
    }

    /* Appeding the Renderd Head Values & result in Card */
    this.changeValues = ((tripType, selectedTripType, startLoc, startDate, endLoc, endDate, endLocRet, endLocReturn, strDate, ecdDate, result) => {
        this.getFormData();
        const { fromPlace, toPlace, travelDate, dateOfReturn, noOfTravelers } = this.formData;
        let getTripType = document.getElementsByClassName("flightResultHeader");
        let getStaringPlace = getTripType[0].querySelector(startLoc);
        let headEndLocRet = getTripType[0].querySelector(endLocRet);
        let getEndPlace = getTripType[0].querySelector(endLoc);
        let getEndPlaceReturn = getTripType[0].querySelector(endLocReturn);
        let getstrDate = getTripType[0].querySelector(strDate);
        let getendDate = getTripType[0].querySelector(ecdDate);

        // let getEndDate = getTripType[0].querySelector(endDate);
        if (tripType === "One Way") {
            getStaringPlace.innerHTML = fromPlace;
            getstrDate.innerHTML = travelDate;
            getendDate.innerHTML = travelDate;
            getEndPlace.innerHTML = toPlace;
            headEndLocRet.style.display = 'none';
        }
        if (tripType === "Round Trip") {
            getStaringPlace.innerHTML = fromPlace;            
            getEndPlace.innerHTML = toPlace;
            getEndPlaceReturn.innerHTML = fromPlace;
            headEndLocRet.style.display = 'block';
            getstrDate.innerHTML = travelDate;
            getendDate.innerHTML = dateOfReturn;
           
        }
        const container = document.getElementById('resultContainer');
        container.innerHTML = ``;
        if (result.length === 0){
            container.innerHTML = `
                                    <h3>Flights not found!</h3>`;
        }
        result.forEach((res) => {
            // Create card element
            const card = document.createElement('div');
            card.classList = 'card-body';

            // Construct card content
            const content = `
                                <div class="card" style="margin-bottom: 0.8rem;">
                                    <h3>RS. ${res.price}</h3>
                                    <div class="card-body">
                                    <div>
                                    <p id > ${res.from.short} > ${res.to.short}<p>
                                    </div>
                                    <h6>${res.code}</h6>
                                    <h5>Arrival     : ${res.departTime}</h5>
                                    <h5>Ddeparture  : ${res.arrivalTime}</h5>   
                                    <input  type="button" class="bookTicBtn" value="Book Now" >
                                                               
                                </div> 
                                `;

            // Append newyly created card element to the container
            container.innerHTML += content;
        })

    });
   
}

let flight = new SearchFlight();
flight.showHideRoundTrip();