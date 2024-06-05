
    const stationDistances = {
        "dnNagar": {"dnNagar": 0, "azadNagar": 100, "andheri": 150, "westernExpress": 200, "chakala": 250, "airportRoad": 300, "marolNaka": 350, "sakiNaka": 400, "asalpha": 450},
        "azadNagar": {"dnNagar": 100, "azadNagar": 0, "andheri": 120, "westernExpress": 180, "chakala": 220, "airportRoad": 280, "marolNaka": 320, "sakiNaka": 380, "asalpha": 420},
        "andheri": {"dnNagar": 150, "azadNagar": 120, "andheri": 0, "westernExpress": 100, "chakala": 150, "airportRoad": 250, "marolNaka": 200, "sakiNaka": 300, "asalpha": 350},
        "westernExpres": {"dnNagar": 200, "azadNagar": 180, "andheri": 100, "westernExpress": 0, "chakala": 120, "airportRoad": 220, "marolNaka": 180, "sakiNaka": 280, "asalpha": 320},
        "chakala": {"dnNagar": 250, "azadNagar": 220, "andheri": 150, "westernExpress": 120, "chakala": 0, "airportRoad": 200, "marolNaka": 150, "sakiNaka": 250, "asalpha": 300},
        "airportRoad": {"dnNagar": 300, "azadNagar": 280, "andheri": 250, "westernExpress": 220, "chakala": 200, "airportRoad": 0, "marolNaka": 100, "sakiNaka": 150, "asalpha": 180},
        "marolNaka": {"dnNagar": 350, "azadNagar": 320, "andheri": 200, "westernExpress": 180, "chakala": 150, "airportRoad": 100, "marolNaka": 0, "sakiNaka": 100, "asalpha": 120},
        "sakiNaka": {"dnNagar": 400, "azadNagar": 380, "andheri": 300, "westernExpress": 280, "chakala": 250, "airportRoad": 150, "marolNaka": 100, "sakiNaka": 0, "asalpha": 800},
        "asalpha": {"dnNagar": 450, "azadNagar": 420, "andheri": 350, "westernExpress": 320, "chakala": 300, "airportRoad": 180, "marolNaka": 120, "sakiNaka": 800, "asalpha": 0}
    };

    function calculateTicket() {
        const startLocation = document.getElementById('metroStations').value;
        const endLocation = document.getElementById('destinationmetroStations').value;

        const distance = stationDistances[startLocation][endLocation];
       
        if (distance === undefined) {
            document.getElementById('display').value = 0;
            return;
        }

        let userAge = parseInt(document.getElementById('userAge').value);
        let gender = document.querySelector('input[name="gender"]:checked');

        let ticket;

        if (userAge <= 5) {
            ticket = distance - (100 / 100 * distance);
        } else if (gender && gender.id === 'female') {
            ticket = distance - (50 / 100 * distance);
        } else if (userAge <= 8) {
            ticket = distance - (50 / 100 * distance);
        } else if (userAge >= 65) {
            ticket = distance - (30 / 100 * distance);
        } else {
            ticket = distance;
        }

        document.getElementById('display').value = ticket;
    }

    // Call calculateTicket with default values when the page loads
    calculateTicket();

    function bookTicket() {
        let userName = document.getElementById('userName').value;
        let ticketAmount = document.getElementById('display').value;

        if (userName && ticketAmount) {
            alert(`Ticket booked for ${userName}!`);
        } else {
            alert('Please fill in all the details and calculate the ticket amount before booking.');
        }
    }
