"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(propLink) {
  var modal = document.createElement('div');
  modal.setAttribute('class', 'modal-overlay');
  modal.setAttribute('id', 'modalShareLink'); //   // modal child

  var subModal = document.createElement('div');
  subModal.setAttribute('class', 'modalShareLink-container'); //   // subModal childre

  var closeModalBtn = document.createElement('img');
  var title = document.createElement('h3');
  var propertyLink = document.createElement('a');
  var socialMediaIcons = document.createElement('div');
  closeModalBtn.setAttribute('src', '../assets/menu-icons/close/modal/Vector.svg');
  closeModalBtn.setAttribute('id', 'closeShareLinkModal');
  title.innerHTML = 'Link de mi propiedad:';
  propertyLink.innerHTML = propLink; // social media children

  var iconWhats = document.createElement('i');
  var iconFace = document.createElement('i');
  var iconShare = document.createElement('i');
  iconWhats.setAttribute('class', 'fab fa-facebook-messenger');
  iconFace.setAttribute('class', 'fab fa-facebook');
  iconShare.setAttribute('class', 'fas fa-share-square'); // nesting

  modal.appendChild(subModal);
  subModal.appendChild(closeModalBtn);
  subModal.appendChild(title);
  subModal.appendChild(propertyLink);
  subModal.appendChild(socialMediaIcons); // social media children

  socialMediaIcons.appendChild(iconWhats);
  socialMediaIcons.appendChild(iconFace);
  socialMediaIcons.appendChild(iconShare);
  return modal;
};

exports["default"] = _default;