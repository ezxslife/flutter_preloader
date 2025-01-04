<script defer>
  // 1) Create an overlay
  const overlay = document.createElement('div');
  Object.assign(overlay.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#FFFFFF', // or any color you want
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  });
  document.body.appendChild(overlay);

  // 2) Add the <lottie-player> element
  const lottiePlayer = document.createElement('lottie-player');
  lottiePlayer.setAttribute('src', 'https://lottie.host/e09b5233-c154-4c99-808a-88569163d713/ncdmDUEj3L.lottie');
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
</script>
