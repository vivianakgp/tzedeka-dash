export default () => {
  const progressStatusBarCell = document.createElement('div');
  progressStatusBarCell.setAttribute('class', 'dash__progressStatusBarCell');
  // progressStatusBarCell children
  const currentStatus = document.createElement('div');
  currentStatus.innerText = 'sisisisisis';// user.currentProgressDashViewStr
  // nesting
  progressStatusBarCell.appendChild(currentStatus);
  return progressStatusBarCell;
};

