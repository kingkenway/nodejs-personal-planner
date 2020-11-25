// const data = [
// 	{ item: 'Get chops' },
// 	{ item: 'Walk myself up high!' },
// 	{ item: 'Chop life' },
// ];

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Connect to the database
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env['DATABASE_URL']);

// Schema
const todoSchema = new mongoose.Schema({
	item: String
});

const Todo = mongoose.model('Todo', todoSchema);

// const itemOne = Todo({item: 'Chop life my borther!'}).save(function(err) {
// 	if (err) throw err;
// 	console.log('item saved!')
// })


module.exports = function (app) {
	app.get('/todo', (req, res) => {
		Todo.find({}, (err, data) => {
			if (err) throw err;
			res.render('todo', {todos: data});
		})
	});

	app.post('/todo', urlencodedParser, (req, res) => {
		const newTodo = Todo(req.body).save((err, data) => {
			if (err) throw err;
			res.json(data);
		});
	});

	app.delete('/todo/:item', (req, res) => {
		Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data) =>{
			if (err) throw err;
			res.json(data);
		});
	});

}


// https://mongoosejs.com/docs/deprecations.html