let totalC = 0;

function addition(x) {
  totalC += x;
  return totalC;
}

function soustraction(x) {
  totalC -= x;
  return totalC;
}

function multiplication(x) {
  if (totalC === 0) {
    return (totalC = x);
  } else {
    totalC *= x;
  }
  return totalC;
}

function division(x) {
  if (totalC === 0) {
    return (totalC = x);
  } else {
    totalC /= x;
  }
  return totalC;
}

function reste() {
  total = 0;
}
