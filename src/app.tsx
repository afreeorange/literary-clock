import { useState, useEffect } from "preact/hooks";

import { Quote, developmentQuotes } from "./quotes";
import { getQuote } from "./helpers";
import "./app.css";

const TICK_IN_MILISECONDS = 10000;

export function App() {
  const [time, setTime] = useState(new Date());
  const [quote, setQuote] = useState<Quote | null>(null);

  // TODO: Use this to prevent constant rerenders with each tick...
  // const currentTime = useRef(time);

  useEffect(() => {
    setQuote(getQuote(time));

    // NOTE: Uncomment during development ✨
    // setQuote(developmentQuotes[0]);
  }, [time]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), TICK_IN_MILISECONDS);
    return () => clearInterval(timer);
  }, []);

  if (quote) {
    return (
      <>
        <header>{quote.timeFragment}</header>
        <main>
          <p
            dangerouslySetInnerHTML={{
              __html: quote.quote,
            }}
          />
        </main>
        <footer>
          &ndash; {quote.author}, <em>{quote.book}</em>
        </footer>
      </>
    );
  }

  return null;
}
