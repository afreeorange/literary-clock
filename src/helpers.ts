import quotes, { Quote } from "./quotes";

const readableTime = (d: Date) => {
	const hours = d.getHours();
	const minutes = d.getMinutes();

	if (hours === 0) {
		return `00:${minutes.toString().padStart(2, "0")} AM`;
	}

	if (hours >= 12) {
		return `${hours - 12}:${minutes.toString().padStart(2, "0")} PM`;
	}

	return `${hours}:${minutes.toString().padStart(2, "0")} AM`;
};

const randomQuote = (qs: Quote[]) => qs[Math.floor(Math.random() * qs.length)];

// https://github.com/kellym/smartquotes.js
const smarten = (s: string) =>
	s
		// triple prime
		.replace(/'''/g, "\u2034")
		// beginning "
		.replace(/(\W|^)"(\S)/g, "$1\u201c$2")
		// ending "
		.replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, "$1\u201d$2")
		// remaining " at end of word
		.replace(/([^0-9])"/g, "$1\u201d")
		// double prime
		.replace(/''/g, "\u2033")
		// beginning '
		.replace(/(\W|^)'(\S)/g, "$1\u2018$2")
		// conjunction's possession
		.replace(/([a-z])'([a-z])/gi, "$1\u2019$2")
		// ending '
		.replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/gi, "$1\u2019$3")
		.replace(
			/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/gi,
			"\u2019$2$3",
		) // abbrev. years like '93
		.replace(
			/(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/gi,
			"$1\u2019",
		) // backwards apostrophe
		.replace(/'/g, "\u2032");

export const getQuote = (d: Date): Quote => {
	let possibleMatches: Quote[] = [];
	const hour = d.getHours().toString().padStart(2, "0");

	/**
	 * Assumption is that all hours have at least one minute with a quote and
	 * that I'll find a quote within 15 minutes in the past.
	 */
	for (let i = 0; i <= 15; i++) {
		const minute = (d.getMinutes() - i).toString().padStart(2, "0");
		possibleMatches = quotes[`${hour}:${minute}`];

		if (possibleMatches && possibleMatches.length > 0) {
			break;
		}
	}

	const q = randomQuote(possibleMatches as Quote[]);

	return {
		...q,
		author: smarten(q.author),
		book: smarten(q.book),
		quote: smarten(
			q.quote.replaceAll(q.timeFragment, `<strong>${q.timeFragment}</strong>`),
		),
		timeFragment: readableTime(d),
	};
};
