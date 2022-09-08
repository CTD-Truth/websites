// Move Modal markup to the correct place, using vanilla JS

//console.log("Move Modals 7:18p");

function moveModals() {
  let modals = document.getElementsByClassName("clb-custom-modal-move");
  //console.log(modals);

  for (var i = 0; i < modals.length; i++) {
    //console.log(modals[i]);

    // copy and create new modal down in footer where the functionality will work
    let newModal = document.createElement("div");
    newModal.innerHTML = modals[i].innerHTML;
    document.body.appendChild(newModal);

    // wipe out the modal HTML in the entry-content
    modals[i].innerHTML = "";
  }
}

moveModals();

function addCustomBodyClass() {
  //console.log('Add Body Class 820a');
  let body = document.getElementsByTagName("body")[0];
  body.classList.add("portfolio-modals");
}

addCustomBodyClass();
