import { camelCase, isArray } from 'lodash';

export const processResponseData = (data: Array<any>, serverDataType?: string): Array<any> => {
  const processedDataObjects: Array<any> = [];
  if (data == null) {
    return processedDataObjects;
  }

  if (typeof data[0] === 'string') {
    for (let j = 0; j < data.length; j++) {
      processedDataObjects.push(data[j]);
    }
  } else {
    for (let j = 0; j < data.length; j++) {
      processedDataObjects.push(processServerObject(data[j], serverDataType));
    }
  }
  return processedDataObjects;
};

export const processServerObject = (data: any, serverDataType?: string): any => {
  if (!data || typeof data !== 'object') {
    return data;
  }

  const resultObj: any = {};
  Object.keys(data).forEach((key) => {
    if (isArray(data[key])) {
      resultObj[camelCase(key)] = processResponseData(data[key], serverDataType);
    } else if (data[key] && typeof data[key] === 'object') {
      resultObj[camelCase(key)] = processServerObject(data[key], serverDataType);
    } else {
      resultObj[camelCase(key)] = data[key];
    }
  });
  return resultObj;
};