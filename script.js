const loadbutton = document.getElementById('loadButton');
const loader = document.getElementById('loader');
const demoForm = document.getElementById('my-form');

loadbutton.addEventListener('click', () => {
  loadbutton.diabled = true;
  loader.style.display = 'inline-block';

  setTimeout(()=>{
    loadbutton.disabled = false;
    loader.style.display = 'none';
    demoForm.requestFullscreen();
  }, 2000)
})