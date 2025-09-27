var rows = [];

function get_data() {
    const csvUrl = "buildings.csv";
    fetch(csvUrl)
    .then((response) => response.text())
    .then((text) => {
        console.log(text); // The content of the CSV as a string
        alert(text)
        rows = text.split("\n").map((row) => row.split(","));
        console.log(rows[0]); // Array of rows with each row as an array of values
        alert("name: " + rows[1][2]);
        alert("image: " + rows[1][3]);
        alert("country: " + rows[1][5]);
        alert("number of row is " + rows.length)
        document.getElementById("id_building").src = rows[1][3];
    })
    .catch((error) => console.error("Error fetching the CSV file:", error));
}

function showBuilding() {
    var idx = document.getElementById("idx").value;
    document.getElementById("id_building").src = rows[idx][3];
}
