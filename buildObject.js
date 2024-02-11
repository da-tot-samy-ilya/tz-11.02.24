export const buildNestedObject = (responseArray) => {
  const nestedObject = {};

  const tempObject = {};
  responseArray.forEach((item) => {
    tempObject[item.id] = { ...item, children: [] };
  });

  responseArray.forEach((item) => {
    if (item.head !== null) {
      tempObject[item.head].children.push(tempObject[item.id]);
    } else {
      nestedObject[item.id] = tempObject[item.id];
    }
  });

  return nestedObject;
};
