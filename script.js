const presetSelect = document.getElementById('preset');
const priceInput = document.getElementById('price');
const rangeInput = document.getElementById('range');
const capacityInput = document.getElementById('capacity');

const consumptionEl = document.getElementById('consumption');
const costPerHundredEl = document.getElementById('costPerHundred');
const costPerKmEl = document.getElementById('costPerKm');
const fullChargeEl = document.getElementById('fullCharge');
const kmPerKwhEl = document.getElementById('kmPerKwh');

const presets = {
    xiaobao: { price: 0.5, range: 300, capacity: 42.2 },
    xiaote: { price: 0.5, range: 435, capacity: 62.5 },
    xiaobaixuan: { price: 0.76, range: 280, capacity: 38 },
    ix3: { price: 0.3, range: 530, capacity: 80 }
};

let isPresetSelected = false;

function calculate() {
    const price = parseFloat(priceInput.value);
    const range = parseFloat(rangeInput.value);
    const capacity = parseFloat(capacityInput.value);

    if (isNaN(price) || isNaN(range) || isNaN(capacity) || price <= 0 || range <= 0 || capacity <= 0) {
        consumptionEl.textContent = '--';
        costPerHundredEl.textContent = '--';
        costPerKmEl.textContent = '--';
        fullChargeEl.textContent = '--';
        kmPerKwhEl.textContent = '--';
        return;
    }

    const consumption = (capacity / range) * 100;
    const costPerHundred = consumption * price;
    const costPerKm = price * (capacity / range);
    const fullCharge = capacity * price;
    const kmPerKwh = range / capacity;

    consumptionEl.textContent = consumption.toFixed(2);
    costPerHundredEl.textContent = costPerHundred.toFixed(2);
    costPerKmEl.textContent = costPerKm.toFixed(3);
    fullChargeEl.textContent = fullCharge.toFixed(2);
    kmPerKwhEl.textContent = kmPerKwh.toFixed(2);
}

function applyPreset(preset) {
    if (preset && presets[preset]) {
        isPresetSelected = true;
        priceInput.value = presets[preset].price;
        rangeInput.value = presets[preset].range;
        capacityInput.value = presets[preset].capacity;
        calculate();
    } else {
        isPresetSelected = false;
    }
}

presetSelect.addEventListener('change', (e) => {
    applyPreset(e.target.value);
});

priceInput.addEventListener('input', calculate);
rangeInput.addEventListener('input', calculate);
capacityInput.addEventListener('input', calculate);