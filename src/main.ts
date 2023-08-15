import './style.css';

// render html

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

    <div class="box">
      <div class="calculator">
        <input type="number" class="salario" value="" placeholder="Salario diario ($MXN)" />
        <input type="number" class="años" value="" placeholder="Años en la empresa" />
        <button class="calcular">Calcular</button>

        <div class="resultado">
          <p class="resultado-texto">Prima vacacional:</p>
          <p class="resultado-prima">$0.00 MXN</p>
        </div>
      </div>
    </div>
  
`;

// formula to calculate prima vacacional is salario diario x días de vacaciones que te corresponden x 0.25

// dais off depending of working years
/**
 * 
- Año 1: 12 días de vacaciones
- Año 2: 14 días de vacaciones
- Año 3: 16 días de vacaciones
- Año 4: 18 días de vacaciones
- Año 5: 20 días de vacaciones
- De 6 a 10 años: 22 días de vacaciones
- De 11 a 15 años: 24 días de vacaciones
- De 16 a 20 años: 26 días de vacaciones
- De 21 a 25 años: 28 días de vacaciones
- De 26 a 30 años: 30 días de vacaciones
- De 31 o más años: 32 días de vacaciones
 */

// fuction to calculate prima vacacional
const primaVacacional = (dailySalary: number, yearsOfWork: number) => {
	// years and corresponding days off
	const years = [1, 2, 3, 4, 5, 6, 11, 16, 21, 26, 31];
	const daysOff = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32];

	// calculate days off
	let days = 0;
	for (let i = 0; i < years.length; i++) {
		if (yearsOfWork >= years[i]) {
			days = daysOff[i];
		}
	}

	// calculate prima vacacional
	const prima = dailySalary * days * 0.25;
	return prima;
};

// get elements from DOM
const salario = document.querySelector<HTMLInputElement>('.salario')!;
const años = document.querySelector<HTMLInputElement>('.años')!;
const calcular = document.querySelector<HTMLButtonElement>('.calcular')!;
const resultadoTexto = document.querySelector<HTMLParagraphElement>('.resultado-texto')!;
const resultadoPrima = document.querySelector<HTMLParagraphElement>('.resultado-prima')!;

// add event listener to button
calcular.addEventListener('click', () => {
	// get values from inputs
	const dailySalary = Number(salario.value);
	const yearsOfWork = Number(años.value);

	// Validate input values, if not numbers, show error message, if is cero, show error message
	if (isNaN(dailySalary) || isNaN(yearsOfWork)) {
		resultadoTexto.textContent = 'Error';
		resultadoPrima.textContent = 'Ingresa valores válidos';
		return;
	} else if (dailySalary === 0 || yearsOfWork === 0) {
		resultadoTexto.textContent = 'Error';
		resultadoPrima.textContent = 'Ingresa valores válidos';
		return;
	}

	// calculate prima vacacional
	const prima = primaVacacional(dailySalary, yearsOfWork);

	// show result
	resultadoTexto.textContent = 'Prima vacacional';
	resultadoPrima.textContent = `\$${prima.toFixed(2)} MXN`;
});

// also show result when press enter
document.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		// get values from inputs
		const dailySalary = Number(salario.value);
		const yearsOfWork = Number(años.value);

		// Validate input values, if not numbers, show error message, if is cero, show error message
		if (isNaN(dailySalary) || isNaN(yearsOfWork)) {
			resultadoTexto.textContent = 'Error';
			resultadoPrima.textContent = 'Ingresa valores válidos';
			return;
		} else if (dailySalary === 0 || yearsOfWork === 0) {
			resultadoTexto.textContent = 'Error';
			resultadoPrima.textContent = 'Ingresa valores válidos';
			return;
		}

		// calculate prima vacacional
		const prima = primaVacacional(dailySalary, yearsOfWork);

		// show result
		resultadoTexto.textContent = 'Prima vacacional';
		resultadoPrima.textContent = `\$${prima.toFixed(2)} MXN`;
	}
});
