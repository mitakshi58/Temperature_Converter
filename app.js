const CelciusInput = document.querySelector('#Celcius > input');
const FahrenheitInput = document.querySelector('#Fahrenheit > input');
const KelvinInput = document.querySelector('#Kelvin > input');

function roundNum(num) {
  return Math.round(num*100/100)
}

function CelciusToFahrenheitAndKelvin() {
  const CTemp = parseFloat(CelciusInput.value);
  const FTemp = (CTemp * (9/5)) + 32;
  const KTemp = CTemp + 273.15;
  FahrenheitInput.value = roundNum(FTemp);
  KelvinInput.value = roundNum(KTemp);
}

function FahrenheitToCelciusAndKelvin() {
  const FTemp = parseFloat(FahrenheitInput.value);
  const CTemp = (FTemp - 32) * (5/9);
  const KTemp = (FTemp - 32) / 1.8 + 273.15;
  CelciusInput.value = roundNum(CTemp);
  KelvinInput.value = roundNum(KTemp);
}

function KelvinToCelciusAndFahrenheit() {
  const KTemp = parseFloat(KelvinInput.value);
  const CTemp = KTemp - 273.15;
  const FTemp = (KTemp - 273) * 1.8 + 32;
  CelciusInput.value = roundNum(CTemp);
  FahrenheitInput.value = roundNum(FTemp);
}

function main() {
  CelciusInput.addEventListener('input', CelciusToFahrenheitAndKelvin);
  FahrenheitInput.addEventListener('input', FahrenheitToCelciusAndKelvin);
  KelvinInput.addEventListener('input', KelvinToCelciusAndFahrenheit);
}

main();
