const buttonOpen = document.querySelector('#button-open');
const dialog = document.querySelector('#dialog-open');
const buttonClose = document.querySelector('#button-close');

buttonOpen.onclick = function () {
    dialog.showModal()
}

buttonClose.onclick = function () {
    dialog.close()
}