//full screen functionality
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}


var goldRates = [];
var silverRates = [];


//gold rate fetch and chart implementation
async function goldChart() {

await goldData();
const ctx = document.getElementById('myChartGold');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["3 July", "4 July","5 July","6 July","7 July"],

    datasets: [{
      label: 'Gold Rates',
      data: goldRates,

      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});
}

goldChart();

async function goldData() {
  const goldUrl = "https://api.metalpriceapi.com/v1/timeframe?api_key=[API_KEY]&start_date=2023-07-03&end_date=2023-07-07&base=XAU&currencies=INR";

  const response = await fetch(goldUrl);
  const goldChartData = await response.json();


  const goldCurrent = "https://api.metalpriceapi.com/v1/latest?api_key=[API_KEY]&base=XAU&currencies=INR";

  const responseCurrentGold = await fetch(goldCurrent);
  const goldLiveData = await responseCurrentGold.json();

  const goldRateLive10 = Math.ceil(((goldLiveData.rates["INR"])/28.3495)*10);
  const goldRateLive1 = Math.ceil((goldLiveData.rates["INR"])/28.3495);
  const rate1 = Math.ceil(((goldChartData.rates["2023-07-03"]["INR"])/28.3495)*10);
  const rate2 = Math.ceil(((goldChartData.rates["2023-07-04"]["INR"])/28.3495)*10);
  const rate3 = Math.ceil(((goldChartData.rates["2023-07-05"]["INR"])/28.3495)*10);
  const rate4 = Math.ceil(((goldChartData.rates["2023-07-06"]["INR"])/28.3495)*10);
  const rate5 = Math.ceil(((goldChartData.rates["2023-07-07"]["INR"])/28.3495)*10);

  document.getElementById('currentGold10').innerHTML = goldRateLive10;
  document.getElementById('currentGold1').innerHTML = goldRateLive1;
  goldRates = [rate1,rate2,rate3,rate4,rate5];

};

//silver rate fetch and chart implementation
async function silverChart() {

await silverData();
const ctx = document.getElementById('myChartSilver');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["3 July", "4 July","5 July","6 July","7 July"],

    datasets: [{
      label: 'Silver Rates',
      data: silverRates,

      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});
}

silverChart();

async function silverData() {
  const silverUrl = "https://api.metalpriceapi.com/v1/timeframe?api_key=[API_KEY]&start_date=2023-07-03&end_date=2023-07-07&base=XAG&currencies=INR";

  const response = await fetch(silverUrl);
  const silverChartData = await response.json();

  const silverCurrent = "https://api.metalpriceapi.com/v1/latest?api_key=[API_KEY]&base=XAG&currencies=INR";

  const responseCurrentSilver = await fetch(silverCurrent);
  const silverLiveData = await responseCurrentSilver.json();

  const silverRateLive10 = Math.ceil(((silverLiveData.rates["INR"])/28.3495)*10);
  const silverRateLive1 = Math.ceil((silverLiveData.rates["INR"])/28.3495);
  const silverRate1 = Math.ceil(((silverChartData.rates["2023-07-03"]["INR"])/28.3495)*10);
  const silverRate2 = Math.ceil(((silverChartData.rates["2023-07-04"]["INR"])/28.3495)*10);
  const silverRate3 = Math.ceil(((silverChartData.rates["2023-07-05"]["INR"])/28.3495)*10);
  const silverRate4 = Math.ceil(((silverChartData.rates["2023-07-06"]["INR"])/28.3495)*10);
  const silverRate5 = Math.ceil(((silverChartData.rates["2023-07-07"]["INR"])/28.3495)*10);

  document.getElementById('currentSilver10').innerHTML = silverRateLive10;
  document.getElementById('currentSilver1').innerHTML = silverRateLive1;
  silverRates = [silverRate1,silverRate2,silverRate3,silverRate4,silverRate5];
};
