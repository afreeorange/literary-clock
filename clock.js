function setContent(element, content) {
    document.getElementById(element).innerText = content;
}

// Lol.
function leftPadWithZero(timeFragment) {
    if (timeFragment < 10) {
        return '0' + timeFragment.toString();
    }
    return timeFragment.toString();
}

function readableTime(hours, minutes) {
    let meridiem = 'AM';
    if (hours == 0) {
        return '00:' + leftPadWithZero(minutes) + ' ' + meridiem;
    }
    if (hours > 11) {
        meridiem = 'PM';
    }
    return hours + ':' + leftPadWithZero(minutes) + ' ' + meridiem;
}

function makeMapKey(hours, minutes) {
    return leftPadWithZero(hours) + ':' + leftPadWithZero(minutes) + ':00h';
}

function getNearestQuotes(quotesMap, dateObject) {
    // Assumption is that all hours have at least one minute with a quote
    // and that I'll find a quote within 15 minutes in the past :/
    for (var i = 0; i <= 15; i++) {
        let possibleMatches = quotesMap[makeMapKey(dateObject.getHours(), dateObject.getMinutes() - i)]

        if (possibleMatches) {
            return {
                nearestHour: dateObject.getHours(),
                nearestMinute: dateObject.getMinutes() - i,
                matches: possibleMatches
            };
            break;
        }
    }

    return null;
}

function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function currentDate(quotesMap) {
    const date = new Date();

    nearestQuotes = getNearestQuotes(quotesMap, date);
    theQuote = getRandomElement(nearestQuotes.matches);

    setContent('time', readableTime(nearestQuotes.nearestHour, nearestQuotes.nearestMinute));
    setContent('quote', theQuote.quote);
    setContent('book', theQuote.book);
    setContent('author', theQuote.author);

    setTimeout(
        currentDate,
        15000,
        quotesMap
    );
}

window.onload = () => {
    fetch('/quotes.json')
        .then(r => {
            return r.text()
        })
        .then(t => {
            document.getElementById('loading').style.display = 'none';
            currentDate(JSON.parse(t))
        });
}
