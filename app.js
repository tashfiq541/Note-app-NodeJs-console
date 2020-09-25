const { argv } = require('yargs');
// const fs = require('fs');

// fs.appendFileSync('note.text', ' i append it', (err) => {
// 	if (err) throw err;
// });
// const validator = require('validator');

// console.log(validator.isEmail('tash@gmail.com'));
// console.log(validator.isURL('https://www.google.co.uk/'));

// const getNote = require('./notes');

// const msg = getNote();
// console.log(msg);

// const chalk = require('chalk');

// console.log(chalk.green('Success'));
// console.log(chalk.blue.bold.inverse('Hello World'));

// console.log(process.argv[2]);

const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
	command: 'add',
	describe: 'Adding a new Note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	}
});

yargs.command({
	command: 'remove',
	describe: 'Removing a new Note',
	builder: {
		title: {
			describe: 'Remove note',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.removeNote(argv.title);
	}
});

yargs.command({
	command: 'list',
	describe: 'Listing all Notes',
	handler() {
		notes.listNotes();
	}
});

yargs.command({
	command: 'read',
	describe: 'Reading a new Note',
	builder: {
		title: {
			describe: 'Remove note',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.readNote(argv.title);
	}
});

yargs.parse();

// const command = process.argv[2];

// if (command === 'add') {
// 	console.log('adding notes');
// }

// if (command === 'remove') {
// 	console.log('removing notes');
// }
