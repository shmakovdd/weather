

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