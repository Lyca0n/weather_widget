import moment from 'moment';

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

export const averageByDate = (objectArray) => {  
  return objectArray.reduce((a, b) => {    
    const date = moment.unix(b.dt);
    const datelbl = date.format('YYYY MM DD');    
    if(!a[datelbl]){}    
    a[datelbl]={};    
    for (let k in b.main) {      
        a[datelbl][k] = (  a[datelbl][k] || 0) + b.main[k];            
         
    }
    return a;
  }, {});
};