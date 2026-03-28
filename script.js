const priceInput = document.getElementById('price');
const rangeInput = document.getElementById('range');
const capacityInput = document.getElementById('capacity');

const consumptionEl = document.getElementById('consumption');
const costPerHundredEl = document.getElementById('costPerHundred');
const costPerKmEl = document.getElementById('costPerKm');
const fullChargeEl = document.getElementById('fullCharge');

function calculate() {
    const price = parseFloat(priceInput.value);
    const range = parseFloat(rangeInput.value);
    const capacity = parseFloat(capacityInput.value);

    if (isNaN(price) || isNaN(range) || isNaN(capacity) || price <= 0 || range <= 0 || capacity <= 0) {
        consumptionEl.textContent = '--';
        costPerHundredEl.textContent = '--';
        costPerKmEl.textContent = '--';
        fullChargeEl.textContent = '--';
        return;
    }

    const consumption = (capacity / range) * 100;
    const costPerHundred = consumption * price;
    const costPerKm = price * (capacity / range);
    const fullCharge = capacity * price;

    consumptionEl.textContent = consumption.toFixed(2);
    costPerHundredEl.textContent = costPerHundred.toFixed(2);
    costPerKmEl.textContent = costPerKm.toFixed(3);
    fullChargeEl.textContent = fullCharge.toFixed(2);
}

priceInput.addEventListener('input', calculate);
rangeInput.addEventListener('input', calculate);
capacityInput.addEventListener('input', calculate);