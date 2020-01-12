export const app_name = "AppName";

export const generateRandomNumber = () => {
  let min = 1001,
    max = 100000;
  return Math.floor(Math.random() * (max - min) + min);
};

export const printArray = array => {
  array.map(i => {
    print(i);
  });
};

export const removeElementFromArray = (array, ele) => {
  if (array.includes(ele)) {
    let i = array.indexOf(ele);
    if (i > -1) {
      array.splice(i, 1);
    }
  }
  return array;
};

export const isObjectEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const post_fetch_api_call = (requestData, url) => {
    try {
    const response = await fetch(url,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(requestData)
    });
    const json = await response.json();
    return json;        
  } catch (error) {
    return console.warn(error);
  }
};

export const get_fetch_api_call = (url) => {
    try {
      const response = fetch(url).then(response=>response.json());
      return response;
    } catch (error) {
      return console.warn(error);
    }
};
