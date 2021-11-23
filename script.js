const nameTitle = document.getElementById("nameTitle");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const startingDate = document.getElementById("startingDate");
const phone = document.getElementById("phone");
const vehicle = document.getElementById("vehicle");
const city = document.getElementById("city");
const photo = document.getElementById("profile-img");

const ordersDelivered = document.getElementById("ordersDelivered");
const kmsTravelled = document.getElementById("kmsTravelled");
const totalCancellations = document.getElementById("totalCancellations");
const reassignements = document.getElementById("reassignements");
const avgSpeed = document.getElementById("avgSpeed");

const vehicleResp = document.getElementById("vehicleResp");
const cityResp = document.getElementById("cityResp");
const totalCancellationsResp = document.getElementById("totalCancellationsResp");
const reassignementsResp = document.getElementById("reassignementsResp");
const avgSpeedResp = document.getElementById("avgSpeedResp");


//See more btn expand information on responsive
const seeMoreBtn = document.getElementById("seeMore-btn");
const personalInfocardsBlock = document.querySelectorAll(".personal-infocards-container");
const seeMoreDownArrow = document.getElementById("seeMoreDownArrow");
const seeMoreUpArrow = document.getElementById("seeMoreUpArrow");

seeMoreBtn.addEventListener('click', () => {
  personalInfocardsBlock.forEach(element => element.classList.toggle('hidden'));
  seeMoreUpArrow.classList.toggle('hidden');
  seeMoreDownArrow.classList.toggle('hidden');
});


//Show alert pop up
const showPopUp = () => {
  const modal = document.getElementById("myModal");
  if (user.avgSpeed > 55) {
    modal.className = 'modal showPopUp';
  }

  const acceptBtn = document.querySelectorAll(".accept-btn")[0];
  acceptBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });
}


//Display Chart
const displayChart = () => {
  const avgDeliveryTimeWeek = user.avgDeliveryTimeWeek;
  const labels = [
    '22/11',
    '29/11',
    '06/12',
    '13/12',
    '20/12',
    '27/12',
    '03/01',
  ];
  const data = {
    labels: labels,
    datasets: [{
      backgroundColor: '#FFC244',
      borderColor: '#FFC244',
      data: avgDeliveryTimeWeek,
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Avg delivery time/week',
          color: 'black',
          align: 'start',
          padding: 30,
          font: {
            size: 14,
          }
        },
        legend: {
          display: false,
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
      }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}


//Display data
const displayData = () => {
  userName.innerHTML = user.name;
  nameTitle.innerHTML = user.name;
  email.innerHTML = user.email;
  startingDate.innerHTML = user.firstDayGlovo;
  phone.innerHTML = user.phone;
  vehicle.innerHTML = user.vehicle;
  city.innerHTML = user.city;
  photo.src = user.photoUrl;

  ordersDelivered.innerHTML = user.totalOrders;
  kmsTravelled.innerHTML = user.totalKms;
  totalCancellations.innerHTML = user.cancellationsPerc;
  reassignements.innerHTML = user.totalOrders;
  avgSpeed.innerHTML = user.avgSpeed;

  vehicleResp.innerHTML = user.vehicle;
  cityResp.innerHTML = user.city;
  totalCancellationsResp.innerHTML = user.cancellationsPerc;
  reassignementsResp.innerHTML = user.totalOrders;
  avgSpeedResp.innerHTML = user.avgSpeed;
}


//Fetch data from json
fetch('json_response.json')
  .then(response => response.json())
  .then(userData => {
    user = userData;

    displayData();
    showPopUp();
    displayChart();
  });



