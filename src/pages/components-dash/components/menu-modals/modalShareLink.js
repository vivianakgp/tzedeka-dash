export default (propLink) => {
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal-overlay');
  modal.setAttribute('id', 'modalShareLink');
  //   // modal child
  const subModal = document.createElement('div');
  subModal.setAttribute('class', 'modalShareLink-container');
  //   // subModal childre
  const closeModalBtn = document.createElement('img');
  const title = document.createElement('h3');
  const propertyLink = document.createElement('a');
  const socialMediaIcons = document.createElement('div');
  closeModalBtn.setAttribute('src', '../assets/menu-icons/close/modal/Vector.svg');
  closeModalBtn.setAttribute('id', 'closeShareLinkModal');
  title.innerHTML = 'Link de mi propiedad:';
  propertyLink.innerHTML = propLink;
  // social media children
  const iconWhats = document.createElement('i');
  const iconFace = document.createElement('i');
  const iconShare = document.createElement('i');
  iconWhats.setAttribute('class', 'fab fa-facebook-messenger');
  iconFace.setAttribute('class', 'fab fa-facebook');
  iconShare.setAttribute('class', 'fas fa-share-square');
  // nesting
  modal.appendChild(subModal);
  subModal.appendChild(closeModalBtn);
  subModal.appendChild(title);
  subModal.appendChild(propertyLink);
  subModal.appendChild(socialMediaIcons);

  // social media children
  socialMediaIcons.appendChild(iconWhats);
  socialMediaIcons.appendChild(iconFace);
  socialMediaIcons.appendChild(iconShare);
  return modal;
};
