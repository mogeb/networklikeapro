// var quotes = ['hello all my name is {name} and i work at {company}', 'hi everyeone my name be {name} me works at {company}',
//     'whatup my man me name {name} i hustle at {company}', 'ayo dude i\'m {name} i work at {company}'];

var jobStartQuotes = ['im {name} im starting at {company}', 'me name {name} me works at {company}'];
var jobQuitQuotes = ['im {name} im leaving at {company}', 'me name {name} me leaving {company}'];
var celebrateAnniversaryQuotes = ['im {name} im celebrating at {company}', 'me name {name} me celebrates at {company}'];
var conferenceSpeakingQuotes = ['im {name} im speaking at {conference}', 'me name {name} me speaks at {conference}'];

var name = '';
var company = '';
var conference = '';

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

var conferenceInput = document.getElementById('conferenceInput');
conferenceInput.addEventListener('input', evt => {
    console.log('conference input = ' + conferenceInput.value);
    company = conferenceInput.value;
});

function newQuote() {
    var quotes;
    var category = document.getElementById("category").value;

    if (category == 'jobStart') {
        quotes = jobStartQuotes;
    } else if (category == 'jobQuit') {
        quotes = jobQuitQuotes;
    } else if (category == 'anniversary') {
        quotes = celebrateAnniversaryQuotes;
    } else if (category == 'conference') {
        quotes = conferenceSpeakingQuotes;
    }
    
    var rand = Math.floor(Math.random() * quotes.length);
    var quote = quotes[rand];
    quote = quote.replace('{name}', name);
    quote = quote.replace('{company}', company);
    quote = quote.replace('{conference}', conference);

    document.getElementById('quoteDisplay').innerHTML = quote;
    console.log(category);
    console.log('neq qyote');
}

function dropDownFunction() {
    console.log('dropdown');
}
