let lastQuote;

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
    // and that I'll find a quote within 15 minutes in the past.
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

function getQuote(quotesMap) {
    const date = new Date();
    const nearestQuotes = getNearestQuotes(quotesMap, date);

    const theQuote = {
        nearestHour: nearestQuotes.nearestHour,
        nearestMinute: nearestQuotes.nearestMinute,
    };

    Object.assign(theQuote, getRandomElement(nearestQuotes.matches));

    return theQuote;
}

function setContent(quote) {
    document.getElementById('time').innerHTML = readableTime(
        quote.nearestHour,
        quote.nearestMinute,
    );
    document.getElementById('quote').innerHTML = quote.quote.replace(
        quote.timeFragment,
        '<strong>' + quote.timeFragment + '</strong>',
    );
    document.getElementById('book').innerHTML = quote.book;
    document.getElementById('author').innerHTML = quote.author;
}

function sleepFor(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(
            resolve,
            milliseconds,
        )
    });
}

function setQuote(quotesMap) {
    let theQuote = getQuote(quotesMap);
    return setContent(theQuote);

    // // The very first time this is called
    // if (!lastQuote) {
    //     lastQuote = theQuote.quote;
    //     setContent(theQuote);
    // } else {

    //     // Same quote as randomly picked the last time. No fades, do nothing.
    //     if (theQuote.quote === lastQuote) {
    //         setContent(theQuote);
    //     } 

    //     // Different quote for the same time. Fade in and out.
    //     else {
    //         lastQuote = theQuote.quote;
    //         document.getElementById('wrapper').style.opacity = 0;

    //         sleepFor(5000).then(r => {
    //             setContent(theQuote);
    //             document.getElementById('wrapper').style.opacity = 1;
    //         })
    //     }
    // }
}

window.onload = () => {
    fetch('/quotes.json')
    .then(response => {
        if (response.status != 200) {
            document.getElementById('oh-crap').style.visibility = 'visible';
        }
        return response.text();
    })
    .then(text => {
        document.getElementById('loading').style.display = 'none';
        let quotesMap = JSON.parse(text);

        // This is crappy. Eminently possible that the first invocation
        // will show a quote that the random quote picker will pick :/
        setQuote(quotesMap);
        setInterval(
            setQuote,
            15000,
            quotesMap
        );
    });
}
