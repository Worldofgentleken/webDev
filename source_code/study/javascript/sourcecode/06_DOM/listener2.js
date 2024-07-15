// 현재 방식
function addListener(elem, ev, listener) {
	elem.addEventListener(ev, listener, false);
}

function removeListener(elem, ev, listener) {
	elem.removeEventListener(ev, listener, false);
}

