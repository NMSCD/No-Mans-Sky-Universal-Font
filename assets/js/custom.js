hljs.highlightAll();

function futuraprobookClick(e) {
	e?.preventDefault?.();
	tabClickCommon(e, 'futuraprobook');
}

function geosansClick(e) {
	e?.preventDefault?.();
	tabClickCommon(e, 'geosans');
}

function expalphabetClick(e) {
	e?.preventDefault?.();
	tabClickCommon(e, 'expalphabet');
}

function tabClickCommon(e, prefix) {
	setTabActive(prefix);
	setTabContentVisible(prefix);
	setBodyClass(prefix);
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