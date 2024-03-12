const burgerBtn = document.querySelector('.nav-menu-burger__lines'),
    burgerBtnWrapper = document.querySelector('.nav-menu-burger__wrapper'),
    navTest = document.querySelector('.nav-menu'),
    ModalCross = document.querySelector('.modal-content-cross'),
    ModalBtnGank = document.querySelector('.header__header-upper-order-button'),
    Modal = document.querySelector('.modal'),
    ModalContent = document.querySelector('.modal-content'),
    ModalBodyActive = document.querySelector('.modal-body_active'),
    ModalBody = document.querySelector('.modal-body'),
    ModalBG = document.querySelector('.modal-bg'),
    body = document.body;

burgerBtnWrapper.onclick = () => {
    burgerBtn.classList.toggle('nav-menu-burger__lines_active')
    navTest.classList.toggle('nav-menu_active');
};
ModalBtnGank.onclick = () => {
    Modal.classList.toggle('modal_active')
    ModalContent.classList.toggle('modal-content_active')
    ModalBody.classList.toggle('modal-body_active')
};
ModalCross.onclick = () => {
    Modal.classList.remove('modal_active')
    ModalContent.classList.remove('modal-content_active')
};
ModalBG.onclick = () => {
    Modal.classList.remove('modal_active')
    ModalContent.classList.remove('modal-content_active')
};
ModalBtnGank.addEventListener('click', (e) => {
	disableScroll();
});
let disableScroll = function () {
	document.body.classList.add('disable-scroll');
}
ModalCross.addEventListener('click', (e) => {
	enableScroll();
});
ModalBG.addEventListener('click', (e) => {
	enableScroll();
});
let enableScroll = function () {
    document.body.classList.remove('disable-scroll');
}