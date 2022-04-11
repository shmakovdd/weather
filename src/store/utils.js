/* eslint-disable */ 

export function getMinutesAndHours(date) {
    let minutes = date.getMinutes()
    let hours = date.getUTCHours()
    minutes = minutes.toString().length == 1 ? '0' + minutes : minutes
    hours = hours.toString().length == 1 ? '0' + hours : hours
    return {
        minutes, hours
    }
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function convertWindDeg(value) {
    let degrees = 
      {    
      23: 'C', 
      45: 'СВ',
      68: 'СВ',
      90: 'В',
      113: 'В',
      135: 'ЮВ',
      158: 'ЮВ',
      180: 'Ю',
      203: 'Ю',
      225: 'ЮЗ',
      248: 'ЮЗ',
      270: 'З',
      293: 'З',
      315: 'СЗ',
      338: 'СЗ',
      360: 'С',
    }
    let keys= Object.keys(degrees)
    let dir = keys.find(d => value < d)
    return degrees[dir]
}


export function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
  
export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

export function createWeatherDataObject(data) {
    let date = new Date(data.dt * 1000);
    let weekDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    let obj = {
      id: Date.now(),
      weekDay: weekDays[date.getDay()],
      day: date.getDate(),
      temp: `${Math.trunc(data.temp.day)}°C`,
      clouds: `${data.clouds}%`,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      descr: capitalizeFirstLetter(data.weather[0].description),
    };
    return obj;
  }  

  export function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }