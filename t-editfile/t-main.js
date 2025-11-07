const sky = document.querySelector('.constellation');
const STAR_COUNT = 220;

const rand = (min, max) => Math.random() * (max - min) + min;

// 通常の星を生成
for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement('span');
  star.className = 'star';

  star.style.left = `${rand(0, 100)}%`;
  star.style.top  = `${rand(0, 100)}%`;
  star.style.width = star.style.height = `${rand(1, 3)}px`;

  star.style.setProperty('--base-opacity', rand(0.35, 0.9));
  star.style.setProperty('--twinkle', `${rand(1.6, 3.8)}s`);
  star.style.setProperty('--delay', `${rand(0, 4)}s`);

  sky.appendChild(star);
}

// 流れ星を生成
function spawnShootingStar() {
  const s = document.createElement('div');
  s.className = 'shooting';
  s.style.top = `${rand(5, 45)}%`;
  document.querySelector('.constellation').appendChild(s);
  setTimeout(() => s.remove(), 2000);
}

setInterval(() => {
  if (Math.random() < 0.3) spawnShootingStar();
}, 5000);

