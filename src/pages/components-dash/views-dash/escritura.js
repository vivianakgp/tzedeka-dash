export default () => {
  const Title = 'Escritura';
  const escrituraMsg = `- Verificamos documentos/ para evitar contratiempos
  - Resolver tus dudas
  -Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo Resolver tus dudas
  -Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo`;
  const escrituraView = document.createElement('div');
  escrituraView.setAttribute('class', 'escritura__container');
  // escrituraView elements
  const description = document.createElement('div');
  const image = document.createElement('div');
  // children
  const title = document.createElement('h2');
  const paragraph = document.createElement('p');
  const imgEscritura = document.createElement('img');
  title.innerText = Title;
  paragraph.innerText = escrituraMsg;
  imgEscritura.setAttribute('src', '../assets/images/Firma escritura.png');
  // escrituraView elements
  escrituraView.appendChild(description);
  escrituraView.appendChild(image);
  // children
  description.appendChild(title);
  description.appendChild(paragraph);
  image.appendChild(imgEscritura);

  return escrituraView;
};
