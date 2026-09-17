function searchTransport() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    let result = document.getElementById("searchResult");

    if (input === "") {
        result.innerHTML = "";
        return;
    }


    let buses = [

        {
            name: "A18",
            time: "9.00 AM",
            route: "Mayiladuthurai → Manalmedu",
            pickup: "Mayiladuthurai"
        },

        {
            name: "SRT",
            time: "8.45 AM",
            route: "Kumbakonam → Manalmedu",
            pickup: "Kumbakonam"
        },

        {
            name: "457",
            time: "7.15 AM",
            route: "Chidambaram → Manalmedu",
            pickup: "Chidambaram"
        },

        {
            name: "440",
            time: "7.40 AM",
            route: "Sirkali → Manalmedu",
            pickup: "Sirkali"
        },

        {
            name: "MRS",
            time: "9.30 AM",
            route: "Needur → Manalmedu",
            pickup: "Needur"
        }

    ];


    let found = buses.find(function(bus) {

        return bus.name.toLowerCase() === input ||
               bus.pickup.toLowerCase().includes(input);

    });


    if (found) {

        result.innerHTML = `

            <div class="bus-animation">

                <div class="smoke">
                    💨 💨
                </div>

                <div class="bus">
                    🚌
                </div>

            </div>


            <div class="bus-result">

                <div class="bus-icon">
                    🚌
                </div>

                <h3>Bus Name: ${found.name}</h3>

                <p>
                    <b>🛣️ Route:</b>
                    ${found.route}
                </p>

                <p>
                    <b>📍 Pickup Point:</b>
                    ${found.pickup}
                </p>

                <p>
                    <b>⏰ Time:</b>
                    ${found.time}
                </p>

                <p>
                    <b>🎯 Destination:</b>
                    Manalmedu College
                </p>

            </div>

        `;

    }

    else {

        result.innerHTML = `

            <div class="bus-result">

                <div class="bus-icon">
                    🔍
                </div>

                <h3>Bus Not Found</h3>

                <p style="text-align:center;">
                    Please enter A18, SRT, 457, 440, MRS
                    or search by town name.
                </p>

            </div>

        `;
    }

}