var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'http://1.fwcdn.pl/po/05/71/30571/7529024.3.jpg'
	},
	{
		id: 2,
		title: 'Król lew',
		desc: 'Film o królu sawanny',
		img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img',{className: 'poster', src: movie.img}, )
		);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element,document.getElementById('app'));
