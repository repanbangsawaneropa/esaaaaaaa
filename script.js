document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const triangle = document.querySelector('.triangle');
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('night');
      updateTriangleColor();
    });
  
    function updateTriangleColor() {
      if (body.classList.contains('night')) {
        triangle.style.borderLeftColor = '#1d3955'; // night color
      } else {
        triangle.style.borderLeftColor = '#9acee2'; // day color
      }
    }
    updateTriangleColor();
  });

  $(document).ready(function () {

    // Tambahkan kode berikut untuk autoplay musik
    var music = document.getElementById("background-music");
    
    // Fungsi untuk memulai pemutaran musik
    function playMusic() {
        music.play();
    }

    // Memulai musik saat halaman dimuat
    playMusic();

    // Memulai musik saat user berinteraksi dengan halaman
    document.addEventListener('click',playMusic);
});