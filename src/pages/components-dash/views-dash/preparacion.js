export default () => {
  const Title = 'Preparación';
  const preparationMsg = `- Verificamos documentos/ para evitar contratiempos
  - Resolver tus dudas
  -Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo Resolver tus dudas
  -Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo`;
  const preparationView = document.createElement('div');
  preparationView.setAttribute('class', 'preparation__container');
  // preparationView elements
  const description = document.createElement('div');
  const image = document.createElement('div');
  // children
  const title = document.createElement('h2');
  const paragraph = document.createElement('p');
  const imgCasaEnVenta = document.createElement('img');
  title.innerText = Title;
  paragraph.innerText = preparationMsg;
  imgCasaEnVenta.setAttribute('src', '../assets/images/Casa en venta.png');
  // preparationView elements
  preparationView.appendChild(description);
  preparationView.appendChild(image);
  // children
  description.appendChild(title);
  description.appendChild(paragraph);
  image.appendChild(imgCasaEnVenta);
  return preparationView;
};
