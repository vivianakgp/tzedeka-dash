export default () => {
  const Title = 'En Promoción';
  const promoMsg = `- Verificamos documentos/ para evitar contratiempos
  - Resolver tus dudas
  -Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo Resolver tus dudas
  -Asesoria en trámites y costos fiscales
  - Análisis de mercado y opinión de valor/ determinar con precisión precio óptimo`;
  const promoView = document.createElement('div');
  promoView.setAttribute('class', 'promo__container');
  // promoView elements
  const description = document.createElement('div');
  const image = document.createElement('div');
  // children
  const title = document.createElement('h2');
  const paragraph = document.createElement('p');
  const imgPromo = document.createElement('img');
  title.innerText = Title;
  paragraph.innerText = promoMsg;
  imgPromo.setAttribute('src', '../assets/images/Demostración.png');
  // promoView elements
  promoView.appendChild(description);
  promoView.appendChild(image);
  // children
  description.appendChild(title);
  description.appendChild(paragraph);
  image.appendChild(imgPromo);

  return promoView;
};
