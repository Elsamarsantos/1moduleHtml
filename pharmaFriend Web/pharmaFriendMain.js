// THIS IS MY JQUERY CODE FOR MY MAIN PAGE AND ITS USED FOR ITS MAIN FUNCTION//
$(document).ready(function () {
    $("#results").hide();
    $("#mypharmaform1").hide();
    $("#medicineListBtn").hide();
    $("#pharmacyListBtn").hide();
    $("#homeBtn").hide();
    $("#benvindo").hide();
});

$("#btnclose").click(function close() {
    $("#medicineName").val("");
    $("#userdistance").val("");
    $("#results").hide();
    home();
});

$("#btnMainSearch").click(function mainSearch() {



    if (($("#medicineName").val() != "") && ($("#userdistance").val() != "")) {

        var output = document.getElementById("out");


        if (!navigator.geolocation) {
            output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
        }

        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            // output.innerHTML = '<p>Latitude: ' + latitude + '° <br>Longitude: ' + longitude + '°</p>';
            var inputmedicine = $("#medicineName").val();

            var medicineDose = $("#getDose").val();
            var medicineVolume = $("#getVolume").val();
            var distance = $("#userdistance").val();


            $("#results").show();


            /*  ------------------------------------- MAP ----------------------------------------------- */

            var map = L.map('map').setView([latitude, longitude], 17);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            /* ------------------------------------ MARKER --------------------------------------------*/



            /*---------- Person Marker ---------- */
            var personMarker = L.AwesomeMarkers.icon({
                icon: 'street-view',
                prefix: 'fa'
            });

            /*------------ Pharmacy Marker ------------ */
            var pharmacyMarker = L.AwesomeMarkers.icon({
                icon: 'plus-square',
                prefix: 'fa',
                spin: true
            });

            var pharmacyMarkeroff = L.AwesomeMarkers.icon({
                icon: 'plus-square',
                prefix: 'fa',

            });


            L.marker([latitude, longitude], { icon: personMarker }).addTo(map)
                .bindPopup('You ! ')
                .openPopup();


            $.ajax({

                url: `http://localhost:8080/pharmafriend/api/request?medicinename=${inputmedicine}&dose=${medicineDose}&volume=${medicineVolume}&lonlocation=${longitude}&latlocation=${latitude}&userdistance=${distance}`,
                type: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                success: function (data) {

                    for (i = 0; i < data.length; i++) {

                        L.marker([data[i].latLocation, data[i].lonLocation], { icon: pharmacyMarker }).addTo(map)
                            .bindPopup(data[i].pharmacyName + ' <br> ' + data[i].address).openPopup();
                    }
                }
            })

            let element = document.getElementById("search");
            element.setAttribute('style', "display:true");
            let element1 = document.getElementById("search1");
            element1.setAttribute('style', "display:true");


        }

        function error() {
            output.innerHTML = "Unable to retrieve your location, please check your internet connection";
        }

        //output.innerHTML = "<p>Getting Location...</p>";
        navigator.geolocation.getCurrentPosition(success, error);
    }
    else {
        if ($("#medicineName").val() == "") {
            alert("Please insert a medicine in search field");
        }
        else {
            alert("Please insert some distance");
        }
    }

});

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                /*insert the value for the autocomplete text field:*/a
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }


    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}


function searchByName() {
    var a = [];

    $.ajax({
        url: "http://localhost:8080/pharmafriend/api/medicines/consultall",
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {

            for (i = 0; i < data.length; i++) {
                a.push(data[i].medicineName);
                var uniqueNames = [];

                //to delete equal names
                $.each(a, function (i, el) {
                    if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
                });
                autocomplete(document.getElementById("myInput"), uniqueNames);


                autocomplete(document.getElementById("medicineName"), uniqueNames);
            }
        }
    })
}
searchByName();


$("#b").click(function getDose() {
    $("#getMedicineDose").show();

    var medicineName = $("#medicineName").val();

    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/medicines/listmedicine?medicineName=${medicineName}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {

            for (i = 0; i < data.length; i++) {

                //   $('#getDose').append('<label class="container1">' + data[i].dose + " " + data[i].volumeUnit +
                //     '<input type="radio" ><span class="checkmark"></span></label><br>');
                $('#getDose').append("<option>" + data[i].dose + "</option>");
            }



        }
    })

})

$("#botao").click(function getVolume() {


    var medicineName = $("#medicineName").val();
    var medicineDose = $("#getDose").val();

    console.log("ver dose " + medicineDose);


    $.ajax({
        url: `http://localhost:8080/pharmafriend/api/medicines/medicinebydose?medicineName=${medicineName}&dose=${medicineDose}`,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            console.log("ver data " + data);

            for (i = 0; i < data.length; i++) {

                //   $('#getDose').append('<label class="container1">' + data[i].dose + " " + data[i].volumeUnit +
                //     '<input type="radio" ><span class="checkmark"></span></label><br>');
                $('#getVolume').append("<option>" + data[i].volumeUnit + "</option>");
            }



        }
    })

})

