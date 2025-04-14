const container = document.querySelector('.container');
const swapBtn = document.getElementById('swap-btn');

// Tambahkan gambar ke dalam tombol
const img = document.createElement('img');
img.src = 'static/images/Circle Medusa.png';
img.alt = 'Swap View';
img.width = 40;
img.height = 40;
img.style.transition = 'transform 0.3s ease';

swapBtn.appendChild(img);

// Styling tombolnya langsung dari JS
Object.assign(swapBtn.style, {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0'
});

// Hover effect (rotasi gambar)
swapBtn.addEventListener('mouseenter', () => {
  img.style.transform = 'rotate(360deg)';
});

swapBtn.addEventListener('mouseleave', () => {
  img.style.transform = 'rotate(0deg)';
});

// Toggle logic
let current = 'list';

swapBtn.addEventListener('click', () => {
  if (current === 'list') {
    container.classList.remove('list-mode');
    container.classList.add('grid-mode');
    current = 'grid';
  } else {
    container.classList.remove('grid-mode');
    container.classList.add('list-mode');
    current = 'list';
  }
});
