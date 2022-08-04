hljs.highlightAll();

function futuraprobookClick(e) {
	e?.preventDefault?.();
	setTabActive('futuraprobook');
	setTabContentVisible('futuraprobook');
	setBodyClass('futuraprobook');
}

function geosansClick(e) {
	e?.preventDefault?.();
	setTabActive('geosans');
	setTabContentVisible('geosans');
	setBodyClass('geosans');
}

function setTabActive(prefix) {
	const tabElems = document.querySelectorAll('.tabs > ul > li');
	for (const tabElem of tabElems) {
		tabElem.classList.remove('is-active');
	}
	const currentTab = document.querySelector('#' + prefix + '-tab');
	currentTab.classList.add('is-active');
}

function setTabContentVisible(prefix) {
	const tabContentElems = document.querySelectorAll('.tab-content');
	for (const tabContentElem of tabContentElems) {
		tabContentElem.classList.add('hidden');
	}
	const currentTab = document.querySelector('#' + prefix + '-tab-content');
	currentTab.classList.remove('hidden');
}

function setBodyClass(prefix) {
	const bodyElem = document.querySelector('body');
	bodyElem.removeAttribute('class');
	bodyElem.classList.add(prefix);
}