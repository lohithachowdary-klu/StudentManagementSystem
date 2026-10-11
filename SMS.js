const form = document.getElementById("resultForm");
const table = document.getElementById("resultTable");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    if (!name || !roll ||
        [m1, m2, m3].some(m => m < 0 || m > 100)) {
        alert("Enter valid student details and marks between 0 and 100.");
        return;
    }

    let total = m1 + m2 + m3;
    let percentage = total / 3;

    let grade =
        percentage >= 90 ? "A" :
        percentage >= 75 ? "B" :
        percentage >= 60 ? "C" :
        percentage >= 45 ? "D" : "F";

    let status = [m1, m2, m3].every(m => m >= 35)
        ? "Pass" : "Fail";

    let row = table.insertRow();

    [name, roll, total, percentage.toFixed(2) + "%",
     grade, status].forEach(value => {
        let cell = row.insertCell();
        cell.textContent = value;
    });

    form.reset();
});