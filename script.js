const buttons = document.querySelectorAll('.btn');
const input = document.getElementById('result_section');

const calculate = (value) => {
	if (value.length !== 0) {
		if (value.includes('^')) {
			value = value.replaceAll('^', '**');
		}
		try {
			input.value = eval(value);
		} catch {
			input.value = '';
		}
	}
};

buttons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		if (e.target.value == '=') {
			calculate(input.value);
		} else if (e.target.value == 'AC') {
			input.value = '';
		} else if (e.target.value == 'c') {
			input.value = input.value.substring(0, input.value.length - 1);
		} else {
			input.value += e.target.value;
		}
	});
});
