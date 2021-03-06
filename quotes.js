let lastQuote;

// Lol.
function leftPadWithZero(timeFragment) {
  if (timeFragment < 10) {
    return "0" + timeFragment.toString();
  }
  return timeFragment.toString();
}

function readableTime(hours, minutes) {
  if (hours == 0) {
    return "00:" + leftPadWithZero(minutes) + " AM";
  }

  if (hours >= 12) {
    return hours - 12 + ":" + leftPadWithZero(minutes) + " PM";
  }

  return hours + ":" + leftPadWithZero(minutes) + " AM";
}

function makeMapKey(hours, minutes) {
  return leftPadWithZero(hours) + ":" + leftPadWithZero(minutes);
}

function getNearestQuotes(quotesMap, dateObject) {
  // Assumption is that all hours have at least one minute with a quote
  // and that I'll find a quote within 15 minutes in the past.
  let possibleMatches;

  for (let i = 0; i <= 15; i++) {
    possibleMatches =
      quotesMap[makeMapKey(dateObject.getHours(), dateObject.getMinutes() - i)];

    if (possibleMatches) {
      return {
        nearestHour: dateObject.getHours(),
        nearestMinute: dateObject.getMinutes() - i,
        matches: possibleMatches,
      };
    }
  }
}

function getRandomElement(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// https://github.com/kellym/smartquotes.js
function smarten(str) {
  return str
    .replace(/'''/g, "\u2034") // triple prime
    .replace(/(\W|^)"(\S)/g, "$1\u201c$2") // beginning "
    .replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, "$1\u201d$2") // ending "
    .replace(/([^0-9])"/g, "$1\u201d") // remaining " at end of word
    .replace(/''/g, "\u2033") // double prime
    .replace(/(\W|^)'(\S)/g, "$1\u2018$2") // beginning '
    .replace(/([a-z])'([a-z])/gi, "$1\u2019$2") // conjunction's possession
    .replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/gi, "$1\u2019$3") // ending '
    .replace(
      /(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/gi,
      "\u2019$2$3"
    ) // abbrev. years like '93
    .replace(
      /(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/gi,
      "$1\u2019"
    ) // backwards apostrophe
    .replace(/'/g, "\u2032");
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

function setContent(quoteObject) {
  let hour = quoteObject.nearestHour;
  let minute = quoteObject.nearestMinute;
  let timeFragment = smarten(quoteObject.timeFragment);
  let book = smarten(quoteObject.book);
  let author = smarten(quoteObject.author);
  let quote = smarten(quoteObject.quote).replace(
    timeFragment,
    "<strong>" + timeFragment + "</strong>"
  );

  document.getElementById("time").innerHTML = readableTime(hour, minute);
  document.getElementById("book").innerHTML = book;
  document.getElementById("author").innerHTML = author;
  document.getElementById("quote").innerHTML = quote;
}

function sleepFor(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function setQuote(quotesMap) {
  let theQuote = getQuote(quotesMap);
  let timeNow = new Date();

  if (timeNow.getMinutes() !== theQuote.nearestMinute) {
    document.getElementById("time").classList.add("approximate-time");
  } else {
    document.getElementById("time").classList.remove("approximate-time");
  }

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

window.onload = function () {
  fetch("/quotes.json")
    .then((response) => {
      if (response.status != 200) {
        document.getElementById("oh-crap").style.visibility = "visible";
      }
      return response.text();
    })
    .then((text) => {
      document.getElementById("loading").style.display = "none";
      let quotesMap = JSON.parse(text);

      // This is crappy. Eminently possible that the first invocation
      // will show a quote that the random quote picker will pick :/
      setQuote(quotesMap);
      setInterval(setQuote, 15000, quotesMap);
    });
};
