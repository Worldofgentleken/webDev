// 크로스 브라우징을 위한 예전 방식
function addListener(elem, ev, listener) {
	if(elem.addEventListener) {
		elem.addEventListener(ev, listener, false);
	} else if(elem.attachEvent) {
		elem.attachEvent('on' + ev, listener);
	} else {
		throw new Error('이벤트 리스너에 미대응입니다.');
	}
}

