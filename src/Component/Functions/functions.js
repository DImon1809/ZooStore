const maxToMin = (arrDogs) => [...arrDogs.sort((a, b) => b.cost - a.cost)];
const minToMax = (arrDogs) => [...arrDogs.sort((a, b) => a.cost - b.cost)];

const rangeFunction = (arrDogs, arrRange, breedRef, selectRef) => {
  let temp = [];

  for (let item in arrDogs) {
    if (
      arrDogs[item].cost >= arrRange[0] &&
      arrDogs[item].cost <= arrRange[1]
    ) {
      temp.push(arrDogs[item]);
    } else continue;
  }

  return sortBreed(temp, breedRef, selectRef);
};

const sortBreed = (arrDogs, breedRef, selectRef) => {
  let temp = [];

  if (breedRef.current.value === "все") {
    temp = arrDogs;
  } else {
    temp = arrDogs.filter(
      (dog) => dog.breed === breedRef.current.value.toLowerCase()
    );
  }

  return selectCost(temp, selectRef);
};

const selectCost = (arrDogs, selectRef) => {
  if (selectRef.current.value === "main") return arrDogs;
  if (selectRef.current.value === "negative") {
    let temp = maxToMin(arrDogs);
    console.log(temp);
    return temp;
  }
  if (selectRef.current.value === "positive") {
    let temp = minToMax(arrDogs);
    console.log(temp);
    return temp;
  }
};

export default rangeFunction;
