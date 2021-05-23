export default () => {
  const Title = 'Tramite y Avalúo';
  const tramiteMsg = `
  - Verificamos documentos/ para evitar contratiempos
  - Resolver tus dudas
  - Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo Resolver tus dudas
  - Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo`;
  const tramiteView = document.createElement('section');
  tramiteView.setAttribute('class', 'tramite__container');
  // tramiteView elements
  const description = document.createElement('div');
  const image = document.createElement('div');
  description.setAttribute('class', 'tramite__description');
  image.setAttribute('class', 'tramite__image');
  // children
  const title = document.createElement('h2');
  const paragraph = document.createElement('p');
  const imgTramite = document.createElement('img');
  title.innerText = Title;
  paragraph.innerText = tramiteMsg;
  imgTramite.setAttribute('src', '../assets/images/Demostración.png');
  // tramiteView elements
  tramiteView.appendChild(image);
  tramiteView.appendChild(description);
  // children
  image.appendChild(imgTramite);
  description.appendChild(title);
  description.appendChild(paragraph);
  return tramiteView;
};
