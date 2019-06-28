function init() {
	const daysSelect = document.querySelector('#days');
	const monthsSelect = document.querySelector('#months');
	const yearsSelect = document.querySelector('#years');

	setDays(daysSelect, 31);
	setMonths(monthsSelect);
	setYears(yearsSelect, 2019);
};

function setDays(elem, num) {
	for (let i = 1; i <= num; i += 1) {
  	const option = createOption(i);
    elem.append(option);
  }
};

function setMonths(elem) {
	for (let i = 1; i <= 12; i += 1) {
		const option = createOption(i);
		elem.append(option);
	}
}

function setYears(elem, currentYear) {
	for (let i = currentYear; i >= currentYear - 100; i -= 1) {
  	const option = createOption(i);
		elem.append(option);
  }
}

function createOption(i) {
	const option = document.createElement('option');

	option.value = i < 10 ? `0${i}` : i;
	option.innerText = option.value;
	return option;
};

function updateDays() {
	const daysSelect = document.querySelector('#days');
	const month = document.querySelector('#months').value;
	const year = document.querySelector('#years').value;
	const firstOption = document.querySelector('option[disabled]').cloneNode(true);

	const selectedDay = daysSelect.options[daysSelect.selectedIndex].value;
	const daysInMonth = moment(`${year}-${month}`, "YYYY-MM").daysInMonth();

	while(daysSelect.firstElementChild) {
		daysSelect.firstElementChild.remove();
	}

	daysSelect.appendChild(firstOption);

	setDays(daysSelect, daysInMonth);

	document.querySelectorAll('#days').forEach((option) => {
		console.log(option.innerText, selectedDay);

		if (option.innerText === selectedDay) {
			debugger;
			option.setAttribute('selected', true);
		}

		daysSelect.options[daysSelect.selectedIndex]
	});

	//daysSelect.options[daysSelect.selectedIndex].innerText = selectedDay;
};

init();
