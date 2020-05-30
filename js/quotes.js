var quotes = ['hello all my name is {name} and i work at {company}', 'hi everyeone my name be {name} me works at {company}',
    'whatup my man me name {name} i hustle at {company}', 'ayo dude i\'m {name} i work at {company}'];

var name = '';
var company = '';

function newQuote() {
    var rand = Math.floor(Math.random() * quotes.length);
    var quote = quotes[rand];
    quote = quote.replace('{name}', name);
    quote = quote.replace('{company}', company);
    document.getElementById('quoteDisplay').innerHTML = quote;
    console.log('neq qyote');
}

var nameInput = document.getElementById('nameInput');

nameInput.addEventListener('input', evt => {
    console.log('name input = ' + nameInput.value);
    name = nameInput.value;
});


var companyInput = document.getElementById('companyInput');

companyInput.addEventListener('input', evt => {
    console.log('company input = ' + companyInput.value);
    company = companyInput.value;
});
