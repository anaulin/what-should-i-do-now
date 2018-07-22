// client-side js
// run by the browser each time your view template is loaded
 

// Array of things to do. Can be HTML.
const thingsToDo = [
  'Go for a walk. <br/>On your own, or with someone you like.',
  'Read a book. <br/>Could be an inspiring one, or a funny one, or a book that teaches you something. <br/> Start <a href="https://www.goodreads.com/">here</a>',
  'Learn something new. <br/> It can be as small or as big as you feel up to. <br/> You could start <a href="https://www.youtube.com/channel/UCsXVk37bltHxD1rDPwtNM8Q">here</a>.',
  'Tidy up your space.<br/> Get some inspiration <a href="http://a.co/2FXgxLh">here</a>.'
];

var randomThing = thingsToDo[Math.floor(Math.random() * thingsToDo.length)];

document.getElementById("thingToDo").innerHTML = randomThing
