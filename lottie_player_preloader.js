// lottie_player_preloader.js (no <script> tags)
// 1) Create an overlay
const overlay = document.createElement('div');
Object.assign(overlay.style, {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999
});
document.body.appendChild(overlay);

// 2) Add the <lottie-player> element
const lottiePlayer = document.createElement('lottie-player');
lottiePlayer.setAttribute('src', 'https://lottie.host/your_file_here.lottie');
lottiePlayer.setAttribute('background', 'transparent');
lottiePlayer.setAttribute('speed', '1');
lottiePlayer.setAttribute('style', 'width: 200px; height: 200px;');
lottiePlayer.setAttribute('loop', '');
lottiePlayer.setAttribute('autoplay', '');
overlay.appendChild(lottiePlayer);

// 3) Hide overlay when Flutter finishes loading
window.addEventListener('load', () => {
  overlay.style.display = 'none';
});
