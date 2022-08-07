// https://calculator.swiftutors.com/bulk-modulus-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const bulkModulusRadio = document.getElementById('bulkModulusRadio');
const pressureRadio = document.getElementById('pressureRadio');
const initialVolumeRadio = document.getElementById('initialVolumeRadio');
const changeinVolumeRadio = document.getElementById('changeinVolumeRadio');

let bulkModulus;
let pressure = v1;
let initialVolume = v2;
let changeinVolume = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

bulkModulusRadio.addEventListener('click', function() {
  variable1.textContent = 'Pressure (Pa)';
  variable2.textContent = 'Initial Volume (m³)';
  variable3.textContent = 'Change in Volume (m³)';
  pressure = v1;
  initialVolume = v2;
  changeinVolume = v3;
  result.textContent = '';
});

pressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Bulk Modulus (n/m²)';
  variable2.textContent = 'Initial Volume (m³)';
  variable3.textContent = 'Change in Volume (m³)';
  bulkModulus = v1;
  initialVolume = v2;
  changeinVolume = v3;
  result.textContent = '';
});

initialVolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Bulk Modulus (n/m²)';
  variable2.textContent = 'Pressure (Pa)';
  variable3.textContent = 'Change in Volume (m³)';
  bulkModulus = v1;
  pressure = v2;
  changeinVolume = v3;
  result.textContent = '';
});

changeinVolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Bulk Modulus (n/m²)';
  variable2.textContent = 'Pressure (Pa)';
  variable3.textContent = 'Initial Volume (m³)';
  bulkModulus = v1;
  pressure = v2;
  initialVolume = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(bulkModulusRadio.checked)
    result.textContent = `Bulk Modulus = ${computeBulkModulus().toFixed(2)} n/m²`;

  else if(pressureRadio.checked)
    result.textContent = `Pressure = ${computePressure().toFixed(2)} Pa`;

  else if(initialVolumeRadio.checked)
    result.textContent = `Initial Volume = ${computeInitialVolume().toFixed(2)} m³`;

  else if(changeinVolumeRadio.checked)
    result.textContent = `Change in Volume = ${computeChangeinVolume().toFixed(2)} m³`;
})

// calculation

function computeBulkModulus() {
  return Number(pressure.value) * (Number(initialVolume.value) / Number(changeinVolume.value));
}

function computePressure() {
  return (Number(bulkModulus.value) * Number(changeinVolume.value)) / Number(initialVolume.value);
}

function computeInitialVolume() {
  return (Number(bulkModulus.value) * Number(changeinVolume.value)) / Number(pressure.value);
}

function computeChangeinVolume() {
  return Number(pressure.value) * (Number(initialVolume.value) / Number(bulkModulus.value));
}