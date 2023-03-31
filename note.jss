const form = document.querySelector('form');
const notesContainer = document.getElementById('notes-container');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	// Get the values from the form
	const title = this.elements['note-title'].value;
	const text = this.elements['note-text'].value;

	// Create a new note element
	const note = document.createElement('div');
	note.classList.add('note');

	// Create the note's title element
	const titleElement = document.createElement('h3');
	titleElement.textContent = title;

	// Create the note's text element
	const textElement = document.createElement('p');
	textElement.textContent = text;

	// Add the title and text elements to the note element
	note.appendChild(titleElement);
	note.appendChild(textElement);

	// Add the note element to the notes container
	notesContainer.appendChild(note);

	// Clear the form
	this.reset();
});
