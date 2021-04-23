export default () => {
  const Title = 'Tramite y Avalúo';
  const tramiteMsg = `- Verificamos documentos/ para evitar contratiempos
  - Resolver tus dudas
  -Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo Resolver tus dudas
  -Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo`;
  const tramiteView = document.createElement('div');
  tramiteView.setAttribute('class', 'tramite__container');
  // tramiteView elements
  const description = document.createElement('div');
  const image = document.createElement('div');
  // children
  const title = document.createElement('h2');
  const paragraph = document.createElement('p');
  const imgPromo = document.createElement('img');
  title.innerText = Title;
  paragraph.innerText = tramiteMsg;
  imgPromo.setAttribute('src', '../assets/images/Promoción.png');
  // tramiteView elements
  tramiteView.appendChild(description);
  tramiteView.appendChild(image);
  // children
  description.appendChild(title);
  description.appendChild(paragraph);
  image.appendChild(imgPromo);
  return tramiteView;
};