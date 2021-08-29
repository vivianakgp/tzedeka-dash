export default () => {
  const btnsChangeViewsToCell = document.createElement('div');
  btnsChangeViewsToCell.setAttribute('class', 'blackboard__containerBtnChangeView');
  // btnsChangeViewsToCell children *
  const btnPreviousProgressView = document.createElement('button');
  const btnNextProgressView = document.createElement('button');
  btnNextProgressView.setAttribute('id', 'btnNextProgressView');
  btnNextProgressView.setAttribute('class', 'BtnChangeView');
  btnNextProgressView.innerHTML = 'Siguiente';
  btnPreviousProgressView.setAttribute('id', 'btnPreviousProgressView');
  btnPreviousProgressView.setAttribute('class', 'BtnChangeView');
  btnPreviousProgressView.innerHTML = 'Anterior';
  // nesting
  btnsChangeViewsToCell.appendChild(btnPreviousProgressView);
  btnsChangeViewsToCell.appendChild(btnNextProgressView);

  return btnsChangeViewsToCell;
};
