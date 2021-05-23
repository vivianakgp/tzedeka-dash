export default () => {
  const Title = 'Escritura';
  const escrituraMsg = `
  - Verificamos documentos/ para evitar contratiempos
  - Resolver tus dudas
  - Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo Resolver tus dudas
  - Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo`;
  const escrituraView = document.createElement('section');
  escrituraView.setAttribute('class', 'escritura__container');
  // escrituraView elements
  const description = document.createElement('div');
  const image = document.createElement('div');
  description.setAttribute('class', 'escritura__description');
  image.setAttribute('class', 'escritura__image');
  // children
  const title = document.createElement('h2');
  const paragraph = document.createElement('p');
  const imgEscritura = document.createElement('img');
  title.innerText = Title;
  paragraph.innerText = escrituraMsg;
  imgEscritura.setAttribute('src', '../assets/images/FirmaEscritura.png');
  // escrituraView elements
  escrituraView.appendChild(image);
  escrituraView.appendChild(description);
  // children
  image.appendChild(imgEscritura);
  description.appendChild(title);
  description.appendChild(paragraph);

  return escrituraView;
};
