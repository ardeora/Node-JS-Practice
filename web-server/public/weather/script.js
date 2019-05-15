const searchBtn = document.getElementById('search-btn');
const addressBox = document.getElementById('address-box');
const closeBtn = document.getElementById('close-add-btn');

const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const weatherForm = document.querySelector('form');
const searchBar = document.getElementById('inp-add');
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Working!');
    fetch(`http://localhost:3000/weather/?address=${searchBar.value}`).then((response) => {
        response.json().then((data) => {
            setSVG(data.forecast.icon);
            setTime(data.forecast.timezone);
            document.getElementById('temp').innerHTML = data.forecast.temperature;
            document.getElementById('location').innerHTML = data.location;
            addressBox.classList.remove('form-visible');
            addressBox.classList.add('form-invisible');
        })
    });
})




searchBtn.addEventListener('click', () => {
    addressBox.classList.remove('form-invisible');
    addressBox.classList.add('form-visible');
    const skyline = document.getElementById('SkyLine').style.fill;
    addressBox.style.backgroundColor = skyline;
    document.getElementById('submit-btn').style.color = skyline;
});

closeBtn.addEventListener('click', () => {
    addressBox.classList.remove('form-visible');
    addressBox.classList.add('form-invisible');
});

function setTime(zone) {
    let timezoneTime = new Date().toLocaleString("en-US", {timeZone: zone});
    // console.log('India time: '+indiaTime.toLocaleString())
    let d = new Date(timezoneTime);
    let year = d.getFullYear().toString();
    let time = d.toLocaleTimeString();
    let store = time;
    let len = time.length;
    time = time.substring(0,len-6);    
    if (store.substring(len-2,len) === 'PM') {
        time = time + 'pm'
    } else {
        time = time + 'am'
    }
    let str = `${time} - ${day[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} '${year.substring(2)}`;
    document.getElementById('date').innerHTML = str;
}
setTime();


function clearSvg() {
    const assetGroup = document.querySelectorAll('#All-Assets > g, #All-Assets > path, #All-Assets > rect');
    console.log(assetGroup);
    assetGroup.forEach((asset) => {
        asset.setAttribute('display', 'none')
    });
}

function toggleDisplay(str) {
    const assetGroup = document.querySelectorAll(str);
    console.log(assetGroup);
    assetGroup.forEach((asset) => {
        asset.removeAttribute('display');
    });
    return assetGroup;
}

function changeIcon(str) {
    let weatherIcon = document.getElementById('weather-icons');
    weatherIcon.setAttribute('viewBox',str);
}

function changeSummary(str) {
    let currentSummary = document.getElementById('current-summary');
    currentSummary.innerHTML = str;
}

function setSVG(param) {
    clearSvg();
    if (param === 'clear-day') {
        const assetStr = '#Sky, #SkyLine, #Dune2, #Dune1, #Sun';
        const assetGroup = toggleDisplay(assetStr);
        assetGroup[0].style.fill = 'var(--clear-day-sky)';
        assetGroup[1].style.fill = 'var(--clear-day-skyline)';
        assetGroup[2].style.fill = 'var(--clear-day-dune2)';
        assetGroup[3].style.fill = 'var(--clear-day-dune1)';
        changeIcon('0 0 50 50');  
        changeSummary('Clear');   
    } else if(param === 'clear-night') {
        const assetStr = '#Sky, #Stars, #SkyLine, #Dune2, #Dune1, #Moon';
        const assetGroup = toggleDisplay(assetStr);
        assetGroup[0].style.fill = 'var(--clear-night-sky)';
        assetGroup[2].style.fill = 'var(--clear-night-skyline)';
        assetGroup[3].style.fill = 'var(--clear-night-dune2)';
        assetGroup[4].style.fill = 'var(--clear-night-dune1)';
        changeIcon('50 0 50 50');  
        changeSummary('Clear'); 
    } else if(param === 'cloudy' || param === 'partly-cloudy-day' || param === 'partly-cloudy-night') {
        const assetStr = '#Sky, #Clouds, #SkyLine, #Dune2, #Dune1';
        const assetGroup = toggleDisplay(assetStr);
        assetGroup[0].style.fill = 'var(--cloudy-sky)';
        assetGroup[2].style.fill = 'var(--cloudy-skyline)';
        assetGroup[3].style.fill = 'var(--cloudy-dune2)';
        assetGroup[4].style.fill = 'var(--cloudy-dune1)';
        changeIcon('100 0 51 50');  
        changeSummary('Cloudy');  
    } else if(param === 'rain') {
        const assetStr = '#Sky, #RainClouds, #SkyLine, #Dune2, #Dune1, #Rain';
        const assetGroup = toggleDisplay(assetStr);
        assetGroup[0].style.fill = 'var(--rain-sky)';
        assetGroup[2].style.fill = 'var(--rain-skyline)';
        assetGroup[3].style.fill = 'var(--rain-dune2)';
        assetGroup[4].style.fill = 'var(--rain-dune1)'; 
        changeIcon('151 0 51 50');  
        changeSummary('Raining'); 
    } else if(param === 'snow') {
        const assetStr = '#Sky, #SkyLine, #Dune2, #IceSheet, #Dune1, #SnowMan, #SnowParticles';
        const assetGroup = toggleDisplay(assetStr);
        assetGroup[0].style.fill = 'var(--snow-sky)';
        assetGroup[1].style.fill = 'var(--snow-skyline)';
        assetGroup[2].style.fill = 'var(--snow-dune2)';
        assetGroup[4].style.fill = 'var(--snow-dune1)';
        changeIcon('201 0 51 50');  
        changeSummary('Snowing'); 
    }  else if(param === 'thunderstorm' || param === 'tornado') {
        const assetStr = '#Sky, #ThunderClouds, #SkyLine, #Dune2, #Dune1, #ThunderRain';
        const assetGroup = toggleDisplay(assetStr);
        assetGroup[0].style.fill = 'var(--storm-sky)';
        assetGroup[2].style.fill = 'var(--storm-skyline)';
        assetGroup[3].style.fill = 'var(--storm-dune2)';
        assetGroup[4].style.fill = 'var(--storm-dune1)';
        changeIcon('251 0 51 50'); 
        if (param === 'thunderstorm') {
            changeSummary('Thunderstorm');  
        } else {
            changeSummary('Tornado'); 
        }
         
    } else if(param === 'wind' || param === 'fog') {
        const assetStr = '#Sky, #WindyClouds, #SkyLine, #Dune2, #Dune1';
        const assetGroup = toggleDisplay(assetStr);
        assetGroup[0].style.fill = 'var(--wind-sky)';
        assetGroup[2].style.fill = 'var(--wind-skyline)';
        assetGroup[3].style.fill = 'var(--wind-dune2)';
        assetGroup[4].style.fill = 'var(--wind-dune1)';
        changeIcon('302 0 50 50');
        if (param === 'wind') {
            changeSummary('Wind');  
        } else {
            changeSummary('Fog'); 
        }           
    } else if(param === 'hail' || param === 'sleet') {
        const assetStr = '#Sky, #WindyClouds, #SkyLine, #Dune2, #Dune1, #SleetRain, #SleetSnow';
        const assetGroup = toggleDisplay(assetStr);
        assetGroup[0].style.fill = 'var(--sleet-sky)';
        assetGroup[2].style.fill = 'var(--sleet-skyline)';
        assetGroup[3].style.fill = 'var(--sleet-dune2)';
        assetGroup[4].style.fill = 'var(--sleet-dune1)'; 
        changeIcon('352 0 50 50');
        if (param === 'hail') {
            changeSummary('Hail');  
        } else {
            changeSummary('Sleet'); 
        }
    }
}
setSVG('clear-day');
