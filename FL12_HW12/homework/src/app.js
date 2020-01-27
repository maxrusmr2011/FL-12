const rootNode = document.getElementById('root');

let listSets = [];

restore();

function el (element, arr) {
	const NUM0 = 0, NUM1 = 1;
	let created;
	if (typeof element === 'string') {
		if (element.slice(NUM0, NUM1) === '#') {
			created = document.getElementById(element.slice(1));
		} else {
			created = document.createElement(element);
		}
	} else {
		created = element;
	}
	if (arr) {
		for (let i = NUM0; i < arr.length; i++) {
			if (typeof arr[i] === 'string') {
				if (arr[i].slice(NUM0, NUM1) === '.') {
					created.classList.add(arr[i].slice(NUM1));
				} else if (arr[i].slice(NUM0, NUM1) === '#') {
					created.id = arr[i].slice(NUM1);
				} else if (arr[i] === '_del') {
					while (created.childNodes.length) {
						created.removeChild(created.firstChild);
					}
				} else {
					created.textContent = arr[i];
				}
			} else {
				created.appendChild(arr[i]);
			}
		}
	}	
	return created;
}

function mainPage () {
	let button = el('button', ['Add new']);	
	button.addEventListener('click', () => {
			location.hash = '/add';
	})
	let divAdd = el('div', ['#add', button]);
	let divAllSets = el('div', ['#all_sets']);
	el(rootNode, ['_del', divAdd, divAllSets]);
	if (listSets.length) {
		divAllSets.appendChild(formListSets());
	}
}

function formListSets () {
	const NUM0 = 0, NUM1 = 1, NUM3 = 3;
	let divToAllSets = document.createDocumentFragment();
	listSets.sort((item1, item2) => item1.studied - item2.studied );
	for (let i = NUM0; i < listSets.length; i++) {
		let divTitle = el('div', [listSets[i].title, '.set']);
		let divSet = el('div', [`#set${i}`, divTitle]);
		if (listSets[i].studied) {
			el(divTitle, ['.studied']);
		} else {
			el(divTitle, ['.hover']);
			divTitle.addEventListener('click', function () {
					let markIndex = parseInt(this.parentNode.id.slice(NUM3));
					listSets[markIndex].studied = true;
					let arrMoveSet = listSets.splice(markIndex, NUM1);
					listSets.push(arrMoveSet[NUM0]);
					el('#all_sets', ['_del', formListSets()]);
			});				
		}
		let buttonEdit = el('button', ['Edit']);
		buttonEdit.addEventListener('click', function () {
				let editIndex = parseInt(this.parentNode.parentNode.id.slice(NUM3));
				location.hash = `/modify/${editIndex}`;
		});
		let buttonRemove = el('button', ['Remove']);
		buttonRemove.addEventListener('click', function () {
				let delIndex = parseInt(this.parentNode.parentNode.id.slice(NUM3));
				listSets.splice(delIndex, NUM1);
				el('#all_sets', ['_del', formListSets()]);
				save();
		});
		let divButtons = el('div', ['.buttons', buttonEdit, buttonRemove]);
		divSet.appendChild(divButtons);
		divToAllSets.appendChild(divSet);
		save();
	}
	return divToAllSets;
}

function addNewPage() {
	let additionSet = {title: '', studied: false, terms: []};
	let divAllTop = formTopPage('Add new set', additionSet);
	let divAllTerms = el('div', ['#all_terms', listTerms(additionSet.terms)]);
	el(rootNode, ['_del', divAllTop, divAllTerms]);
	el('#name').focus();
}

function formTopPage (titlePage, set, indexEdit) {
	let divTitle = el('div', ['.title', el('h1', [titlePage])]);	
	let nameSet = el('input', ['#name']);
	nameSet.placeholder = 'Name';
	nameSet.value = set.title;
	let btnSaveChange = el('button', ['Save changes', '#save_change']);
	btnSaveChange.addEventListener('click', () => {
			if (indexEdit === undefined) {
				listSets.push(set);
			} else {
				listSets[indexEdit] = set;
			} 
			location.hash = '';
	});
	if (!set.title) {
		btnSaveChange.disabled = true;
	}
	nameSet.addEventListener('change', function () {
			let btnSave = el('#save_change');
			if (this.value) {
				btnSave.disabled = false;
				set.title = this.value;
			}	else {
				btnSave.disabled = true;
			}
	});
	let nameField = el('div', ['.name_set', nameSet]);
	let divButtons = el('div', ['.buttons']);
	if (indexEdit === undefined) {
		let buttonAddTerm = el('button', ['Add terms', '#add_term']);
		buttonAddTerm.addEventListener('click', function () {
				this.disabled = true;
				let divNewTerm = formTerm(set.terms, {term: '', definition: ''}, set.terms.length);
				let divAllTerms = el('#all_terms');
				divAllTerms.appendChild(divNewTerm);
				document.querySelector('.term:last-child>input:first-child').focus();
			});
		el(divButtons, [buttonAddTerm]);
	}
	let btnCancel = el('button', ['Cancel']);
	btnCancel.addEventListener('click', () => {
			location.hash = '';
	});
	el(divButtons, [btnSaveChange, btnCancel]);
	return el(document.createDocumentFragment(), [divTitle, nameField, divButtons]);
}

function modifyPage (indexSet) {
	const NUM0 = 0;
	let editSet = {title: listSets[indexSet].title , studied: listSets[indexSet].studied, terms: []};
	for(let i = NUM0; i < listSets[indexSet].terms.length; i++) {
		editSet.terms.push({term: listSets[indexSet].terms[i].term, 
				definition: listSets[indexSet].terms[i].definition});
	}
	let AllTop = formTopPage('Modify set', editSet, indexSet);
	let divAllTerms = el('div', ['#all_terms', listTerms(editSet.terms)]);
	el(rootNode, ['_del', AllTop, divAllTerms]);
}

function inputEdit (allTerms, placeHold, objTerm, nameProperty, secondProperty, indexTerm) {
	let editField = el('input');
	editField.placeholder = placeHold;
	editField.value = objTerm[nameProperty];
	editField.addEventListener('change', function () {
			if (editField.value || objTerm[secondProperty] ) {
				objTerm[nameProperty] = editField.value;
				if (!allTerms[indexTerm]) {
					allTerms.push(objTerm);
					let addTerm = el('#add_term')
					if (addTerm) {
						addTerm.disabled = false;
					}
				}
			}
	});
	return editField;
}

function formTerm (allTerms, objTerm, indexTerm) {
	const NUM1 = 1;
	let term = inputEdit(allTerms, 'Enter term', objTerm, 'term', 'definition', indexTerm);
	let definition = inputEdit(allTerms, 'Enter definition', objTerm, 'definition', 'term', indexTerm);
	let remove = el('button', ['x']);
	remove.addEventListener('click', function () {
			if (term.value || definition.value) {
				allTerms.splice(indexTerm, NUM1);
			}
			let addTerm = el('#add_term');
			if (addTerm) {
				addTerm.disabled = false;
			}
			let divAllTerms = el('#all_terms', ['_del', listTerms(allTerms)]);
	});
	return el('div', ['.term', `#term${indexTerm}`, term, definition, remove]);
}

function listTerms (terms) {
	const NUM0 = 0;
	let divToAllTerms = document.createDocumentFragment();
	for (let i = NUM0; i < terms.length; i++) {
		divToAllTerms.appendChild(formTerm(terms, terms[i], i));
	}
	return divToAllTerms;
}

function changeHash () {
	const NUM0 = 0, NUM9 = 9;
	if (location.hash === '#/add') {
		addNewPage()
	} else if (location.hash.slice(NUM0, NUM9) === '#/modify/') {
		modifyPage(parseInt(location.hash.slice(NUM9)));
	} else if (location.hash === '') {
		mainPage();
	}
}

window.onhashchange = changeHash;

function restore () {
	if (localStorage['listSets']) {
		listSets = JSON.parse(localStorage['listSets']);		
	}
}

function save() {
	if (listSets.length) {
		localStorage['listSets'] = JSON.stringify(listSets);
	} else {
		localStorage.clear();
	}
}

mainPage();
