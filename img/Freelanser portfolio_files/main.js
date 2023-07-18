const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclink = () => {
	if (nav.classlist.toggle('open')){
		navBtnImg.src = "./img/icons/nav-close.svg";
	} else {
		navBtnImg.src = "./img/icons/nav-open.svg";
	}
}