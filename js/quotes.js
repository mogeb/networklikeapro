var jobStartQuotes = ['im {name} im starting at {company}',
    'me name {name} me works at {company}'];
var jobQuitQuotes = ['im {name} im leaving at {company}',
    'me name {name} me leaving {company}'];
var celebrateAnniversaryQuotes = ['im {name} im celebrating at {company}',
    'me name {name} me celebrates at {company}'];
var conferenceSpeakingQuotes = ['im {name} im speaking at {conference}',
    'me name {name} me speaks at {conference}'];
var winningAwardQuotes = ['im {name} im won the award {award}',
    'me name {name} me won {award}'];

var name = '';
var company = '';
var conference = '';
var award = '';

var nameSection = document.getElementById('nameSection');
var companySection = document.getElementById('companySection');
var conferenceSection = document.getElementById('conferenceSection');
var awardSection = document.getElementById('awardSection');

var nameInput = document.getElementById('nameInput');
nameInput.addEventListener('input', evt => {
    name = nameInput.value;
});

var companyInput = document.getElementById('companyInput');
companyInput.addEventListener('input', evt => {
    company = companyInput.value;
});

var conferenceInput = document.getElementById('conferenceInput');
conferenceInput.addEventListener('input', evt => {
    conference = conferenceInput.value;
});

var awardInput = document.getElementById('awardInput');
awardInput.addEventListener('input', evt => {
    award = awardInput.value;
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
    } else if (category == 'award') {
        quotes = winningAwardQuotes;
    }
    
    var rand = Math.floor(Math.random() * quotes.length);
    var quote = quotes[rand];
    quote = quote.replace('{name}', name);
    quote = quote.replace('{company}', company);
    quote = quote.replace('{conference}', conference);
    quote = quote.replace('{award}', award);

    document.getElementById('quoteDisplay').innerHTML = quote;
}

function dropDownFunction() {
    var category = document.getElementById("category").value;

    if (category == 'jobStart') {
        console.log('update');
        nameSection.style.display = "block";
        companySection.style.display = "block";
        conferenceSection.style.display = "none";
        awardSection.style.display = "none";
    } else if (category == 'jobQuit') {
        console.log('update');
        nameSection.style.display = "block";
        companySection.style.display = "block";
        conferenceSection.style.display = "none";
        awardSection.style.display = "none";
    } else if (category == 'anniversary') {
        console.log('update');
        nameSection.style.display = "block";
        companySection.style.display = "block";
        conferenceSection.style.display = "none";
        awardSection.style.display = "none";
    } else if (category == 'conference') {
        console.log('update');
        nameSection.style.display = "block";
        companySection.style.display = "none";
        conferenceSection.style.display = "block";
        awardSection.style.display = "none";
    } else if (category == 'award') {
        console.log('update');
        nameSection.style.display = "block";
        companySection.style.display = "none";
        conferenceSection.style.display = "none";
        awardSection.style.display = "block";
    }
}

dropDownFunction();
