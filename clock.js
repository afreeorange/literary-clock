function setContent(element, content) {
    document.getElementById(element).innerHTML = content;
}

// Lol.
function leftPadWithZero(timeFragment) {
    if (timeFragment < 10) {
        return '0' + timeFragment.toString();
    }
    return timeFragment.toString();
}

function readableTime(hours, minutes) {
    if (hours == 0) {
        return '00:' + leftPadWithZero(minutes) + ' AM';
    }

    if (hours >= 12) {
        return (hours - 12) + ':' + leftPadWithZero(minutes) + ' PM';
    }

    return hours + ':' + leftPadWithZero(minutes) + ' AM';
}

function makeMapKey(hours, minutes) {
    return leftPadWithZero(hours) + ':' + leftPadWithZero(minutes);
}

function getNearestQuotes(quotesMap, dateObject) {
    // Assumption is that all hours have at least one minute with a quote
    // and that I'll find a quote within 15 minutes in the past :/
    let possibleMatches;

    for (let i = 0; i <= 15; i++) {
        possibleMatches = quotesMap[makeMapKey(dateObject.getHours(), dateObject.getMinutes() - i)];

        if (possibleMatches) {
            return {
                nearestHour: dateObject.getHours(),
                nearestMinute: dateObject.getMinutes() - i,
                matches: possibleMatches
            };
        }
    }
}

function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function currentDate(quotesMap) {
    const date = new Date();

    const nearestQuotes = getNearestQuotes(quotesMap, date);
    const theQuote = getRandomElement(nearestQuotes.matches);

    setContent('time', readableTime(nearestQuotes.nearestHour, nearestQuotes.nearestMinute));
    setContent(
        'quote',
        theQuote.quote.replace(
            theQuote.timeFragment,
            '<strong>' + theQuote.timeFragment + '</strong>'
        )
    );
    setContent('book', theQuote.book);
    setContent('author', theQuote.author);

    console.log(theQuote.timeFragment);

    setTimeout(
        currentDate,
        15000,
        quotesMap
    );
}

window.onload = () => {
    fetch('/quotes.json')
    .then(response => {
        return response.text()
    })
    .then(text => {
        document.getElementById('loading').style.display = 'none';
        currentDate(JSON.parse(text));
    });
}
