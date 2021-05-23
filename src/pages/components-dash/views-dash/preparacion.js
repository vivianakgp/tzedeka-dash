export default () => {
  const Title = 'Preparación';
  // mensage description
  const point1 = `Nuestra página web: Nuestra carta estrella para tu propiedad, el mejor diseño y estrategias van dirigidas hacía aqui.`;
  const point2 = `Portales inmobiliarios: Sitios como Inmuebles24 y vivanuncios reciben a miles de personas que buscan una nueva propiedad y la tuya estara entre las opciones que veran.`;
  const point3 = `Redes sociales: Compartimos tu propiedad en diferentes redes sociales, creamos campañas y anuncios dirigidos.`;
  const point4 = `Red de contacto e inmobiliarios: Presentamos a inmobiliaria y agentes tu propiedad como una opción para sus clientes.`;
  /*
  * creating elements html*
  */
  const preparationView = document.createElement('section');
  preparationView.setAttribute('class', 'preparation__container');
  // main elements 
  const descriptionDiv = document.createElement('div');
  const image = document.createElement('div');
  image.setAttribute('class', 'preparation__image');
  descriptionDiv.setAttribute('class', 'preparation__description');
  // main elements children
  const title = document.createElement('h2');
  const paragraph = document.createElement('p');
  const imgCasaEnVenta = document.createElement('img');
  title.innerText = Title;
  //paragraph.innerText = preparationMsg;
  imgCasaEnVenta.setAttribute('src', '../assets/images/CasaEnVenta.png');
  // preparationView elements
  preparationView.appendChild(image);
  preparationView.appendChild(descriptionDiv);
  // children
  image.appendChild(imgCasaEnVenta);
  descriptionDiv.appendChild(title);
  descriptionDiv.appendChild(paragraph);
  return preparationView;
};
// const point1 = '•Fotografia y video:';
//   const point2 = '•Ficha de propiedad:';
//   const point3 = '•Ficha de propiedad:';
//   const point4 = '•Ficha de propiedad:';
//   const text1 = 'Tomamos la multimedia necesaria para la promocion, edición y postproducción.'
//   const text2 = 'Con la información y fotografías recabadas diseñamos una ficha con lo más importante.'
//   const text3 = 'Subimos la ficha de propiedad a nuestra web y sitios d busqueda inmobiliaria.'
