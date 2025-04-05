let map = L.map('down').setView([0, 0], 2); // Position de base

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

let marker = L.marker([0, 0]).addTo(map);


async function getIPData(ip) {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_rLPY4efLORyaqq1i37VzCBTbM99JN&ipAddress=${ip}`);
    const data = await response.json();
    document.querySelector(".ip").textContent = data.ip;
    document.querySelector(".location").textContent = `${data.location.city}, ${data.location.region}`;
    document.querySelector(".timezone").textContent = `UTC ${data.location.timezone}`;
    document.querySelector(".isp").textContent = data.isp;

    map.setView([data.location.lat, data.location.lng], 13);
    marker.setLatLng([data.location.lat, data.location.lng]);
}


document.querySelector(".search").addEventListener("click", ()=>{
    const ip = document.querySelector("#searchbar").value;
    getIPData(ip)
})

