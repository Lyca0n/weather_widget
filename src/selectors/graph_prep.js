export const groupBy = (objectArray, property) =>{
  return objectArray.reduce((acc, obj) =>  {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

export const countBy = (objectArray, property) =>{
  return objectArray.reduce((acc, obj) =>  {    
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key]++;
    return acc;
  }, {});
}

