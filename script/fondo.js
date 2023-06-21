let cielo = document.getElementById('cielo');
let sol = document.getElementById('sol');
let nuve2 = document.getElementById('nuve2');
let nuve1 = document.getElementById('nuve1');
let montaña2 = document.getElementById('montaña2');
let montaña1 = document.getElementById('montaña1');
let base = document.getElementById('base');
let arbol2 = document.getElementById('arbol2');
let arbol1 = document.getElementById('arbol1');


function updateParallax() {
  let value = window.scrollY;

  cielo.style.top = Math.min(value * 1, 500) + 'px';
  sol.style.top = Math.min(value * 1.4, 510) + 'px';
  nuve2.style.left = Math.min(value * 1.5 ) + 'px';
  nuve1.style.left = Math.min(value * -1.5 ) + 'px';
  montaña2.style.top = Math.min(value * 0.9, 360) + 'px';
  montaña1.style.top = Math.min(value * 0.39, 130) + 'px';
  arbol2.style.left = Math.min(value * 0.25, 500) + 'px';
  arbol1.style.left = Math.min(value * -0.25, 500) + 'px';
}

window.addEventListener('scroll', () => {
  if (window.innerWidth >= 800) {
    updateParallax();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 800) {
    cielo.style.top = Math.min(value * 0, 500) + 'px';
    sol.style.top = Math.min(value * 0, 500) + 'px';
    nuve2.style.left = Math.min(value * 0, 500) + 'px';
    nuve1.style.left = Math.min(value * 0, 500) + 'px';
    montaña2.style.top = Math.min(value * 0, 500) + 'px';
    montaña1.style.top = Math.min(value * 0, 500) + 'px';
    arbol2.style.left = Math.min(value * 0, 500) + 'px';
    arbol1.style.left = Math.min(value * 0, 500) + 'px';
  }
});
