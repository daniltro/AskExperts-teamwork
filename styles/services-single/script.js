const Button = document.querySelector('.play-button');
const Video = document.querySelector('.video__move');
const Overlay = document.querySelector('.in');

Button.addEventListener('click', ()=>{
	Button.style.display = 'none';
	Overlay.style.display = 'none';
	Video.play();
});