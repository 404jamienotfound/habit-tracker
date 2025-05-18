const luigiRewards = [
  "images/luigi1.png",
  "images/luigi2.png",
  "images/luigi3.png",
  "images/luigi4.png",
  "images/luigi5.png",
  "images/luigi6.png",
  "images/Affirmation 1.png",
  "images/Affirmation 2.png"
];

function createGrid(containerId, habitKeyPrefix, color) {
  const grid = document.getElementById(containerId);
  const daysInMonth = 31;

  for (let i = 1; i <= 35; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    if (i > daysInMonth) {
      cell.classList.add('inactive');
    } else {
      const today = new Date().getDate();
      const key = `${habitKeyPrefix}-${i}`;
      const stored = localStorage.getItem(key);

      cell.textContent = i;

      if (stored === 'true') {
        cell.classList.add('filled');
        cell.style.backgroundColor = color;
      }

      if (i <= today && stored !== 'true') {
        cell.addEventListener('click', () => {
          cell.classList.add('filled');
          cell.style.backgroundColor = color;
          localStorage.setItem(key, 'true');
          // 🎁 Show Luigi Reward
        const rewardPopup = document.getElementById('reward-popup');
        const rewardImg = document.getElementById('reward-img');
        const randomIndex = Math.floor(Math.random() * luigiRewards.length);
        rewardImg.src = luigiRewards[randomIndex];
        rewardPopup.classList.remove('hidden');

// Auto-hide after 3 seconds
setTimeout(() => {
  rewardPopup.classList.add('hidden');
}, 3000);
        });
      } else {
        cell.style.cursor = 'default';
      }
    }

    grid.appendChild(cell);
  }
}

createGrid('code-grid', 'code', '#7b61ff');     // Purple for Code Practice
createGrid('workout-grid', 'workout', '#48dbfb'); // Aqua for Workout