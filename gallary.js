const All = document.getElementById('All');

All.addEventListener('click', () => {

	All.style.color = 'red';
	Artwork.style.color = 'white';
	Network.style.color = "white";
	Creative.style.color = "white";
	Outside.style.color = "white";
	Photography.style.color = "white";

	const first = document.getElementById('first');
	first.style.display = 'inline-block';

	const second = document.getElementById('second');
	second.style.display = 'inline-block';

	const third = document.getElementById('third');
	third.style.display = 'inline-block';

	const fourth = document.getElementById('fourth');
	fourth.style.display = 'inline-block';

	const fifth = document.getElementById('fifth');
	fifth.style.display = 'inline-block';

	const sixth = document.getElementById('sixth');
	sixth.style.display = 'inline-block';



});


const Artwork = document.getElementById('Artwork');

Artwork.addEventListener('click', () => {


	All.style.color = "white";
	Artwork.style.color = 'red';
	Network.style.color = "white";
	Creative.style.color = "white";
	Outside.style.color = "white";
	Photography.style.color = "white";

	const second = document.getElementById('second');
	second.style.display = 'none';

	const third = document.getElementById('third');
	third.style.display = 'inline-block';

	const fourth = document.getElementById('fourth');
	fourth.style.display = 'inline-block';

});


const Creative = document.getElementById('Creative');

Creative.addEventListener('click', () => {

	All.style.color = "white";
	Artwork.style.color = 'white';
	Network.style.color = "white";
	Creative.style.color = "red";
	Outside.style.color = "white";
	Photography.style.color = "white";

	const first = document.getElementById('first');
	first.style.display = 'inline-block';

	const second = document.getElementById('second');
	second.style.display = 'inline-block';


	const third = document.getElementById('third');
	third.style.display = 'none';

	const fourth = document.getElementById('fourth');
	fourth.style.display = 'none';


	const fifth = document.getElementById('fifth');
	fifth.style.display = 'inline-block';

	const sixth = document.getElementById('sixth');
	sixth.style.display = 'inline-block';



});


const Network = document.getElementById('Network');

Network.addEventListener('click', () => {

	All.style.color = "white";
	Artwork.style.color = 'white';
	Network.style.color = "red";
	Creative.style.color = "white";
	Outside.style.color = "white";
	Photography.style.color = "white";

	const first = document.getElementById('first');
	first.style.display = 'inline-block';

	const second = document.getElementById('second');
	second.style.display = 'inline-block';

	const third = document.getElementById('third');
	third.style.display = 'inline-block';

	const fourth = document.getElementById('fourth');
	fourth.style.display = 'none';

	const fifth = document.getElementById('fifth');
	fifth.style.display = 'none';

	const sixth = document.getElementById('sixth');
	sixth.style.display = 'none';


});


const Outside = document.getElementById('Outside');

Outside.addEventListener('click', () => {


	All.style.color = "white";
	Artwork.style.color = 'white';
	Network.style.color = "white";
	Creative.style.color = "white";
	Outside.style.color = "red";
	Photography.style.color = "white";


	const first = document.getElementById('first');
	first.style.display = 'none';

	const second = document.getElementById('second');
	second.style.display = 'none';

	const third = document.getElementById('third');
	third.style.display = 'none';

	const fourth = document.getElementById('fourth');
	fourth.style.display = 'none';

	const fifth = document.getElementById('fifth');
	fifth.style.display = 'inline-block';

	const sixth = document.getElementById('sixth');
	sixth.style.display = 'inline-block';


});

const Photography = document.getElementById('Photography');

Photography.addEventListener('click', () => {

	All.style.color = "white";
	Artwork.style.color = 'white';
	Network.style.color = "white";
	Creative.style.color = "white";
	Outside.style.color = "white";
	Photography.style.color = "red";

	const first = document.getElementById('first');
	first.style.display = 'none';

	const second = document.getElementById('second');
	second.style.display = 'none';

	const third = document.getElementById('third');
	third.style.display = 'inline-block';

	const fourth = document.getElementById('fourth');
	fourth.style.display = 'none';

	const fifth = document.getElementById('fifth');
	fifth.style.display = 'none';

	const sixth = document.getElementById('sixth');
	sixth.style.display = 'none';


});