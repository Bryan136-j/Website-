function getBookings() {
    return JSON.parse(localStorage.getItem("bookings") || "[]");
}

function saveBookings(data) {
    localStorage.setItem("bookings", JSON.stringify(data));
}

function addBooking() {
    if (!name.value || !service.value || !date.value) {
        alert("Lengkapi semua data!");
        return;
    }

    const data = getBookings();
    data.push({
        name: name.value,
        service: service.value,
        date: date.value
    });

    saveBookings(data);
    loadBookings();

    name.value = "";
    service.value = "";
    date.value = "";
}

function loadBookings() {
    const data = getBookings();
    let html = "";

    data.forEach((d, i) => {
        html += `
        <tr>
            <td>${d.name}</td>
            <td>${d.service}</td>
            <td>${d.date}</td>
            <td><button onclick="hapus(${i})">Hapus</button></td>
        </tr>`;
    });

    document.getElementById("list").innerHTML = html;
}

function hapus(index) {
    const data = getBookings();
    data.splice(index, 1);
    saveBookings(data);
    loadBookings();
}

loadBookings();

