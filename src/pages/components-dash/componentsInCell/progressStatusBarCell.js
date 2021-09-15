export default (currentProgress) => {
  const progressStatusBarCell = document.createElement('div');
  progressStatusBarCell.setAttribute('class', 'dash__progressStatusBarCell');
  // progressStatusBarCell children
  const currentStatus = document.createElement('div');
  currentStatus.innerText = currentProgress; // user.currentProgressDashViewStr
  // nesting
  progressStatusBarCell.appendChild(currentStatus);
  return progressStatusBarCell;
};
