import moment from 'moment';

export const groupBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

export const countBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key]++;
    return acc;
  }, {});
}

export const groupByDate = (objectArray) => {
  return objectArray.reduce((a, b) => {
    const date = moment.unix(b.dt).utc();
    const datelbl = date.format('YYYY-MM-DD');
    if (!a[datelbl]) {
      a[datelbl] = [];
      a[datelbl].push(b.main)
    } else {
      a[datelbl].push(b.main)
    }
    return a;
  }, {});
};

export const avgForecast = (objectArray) => {
  let res = {
    data:[],
    header:[]
  }
  const arr = groupByDate(objectArray)
  // define header keys
  res.header = Object.keys(arr)
  //loop by day
  for (const day in arr) {
    const avg = arr[day].reduce((acc, read) => {
      if (!acc[day])
        acc[day] = []
      // reduce to property sum by day
      Object.keys(read).map((key) => {
        acc[day][key] = (acc[day][key] || 0) + read[key]
      })
      return acc;
    }, {})
    // map to average each property 
    Object.keys(avg).map((day) => (
      Object.keys(avg[day]).map((key) => {
        avg[day][key] = avg[day][key] / arr[day].length
      })
    ))
    //push day to data array
    res.data.push(avg[day])
  }

  return res;
}