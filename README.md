# A 24-Hour Literary Clock

Shows a with a quote for (almost) every minute of the day. Inspired by [this](https://www.instructables.com/id/Literary-Clock-Made-From-E-reader/). [See it in action here](https://public.nikhil.io/literary-clock/index.html).

## Development

Bootstrapped with Vite (Preact + TypeScript).

```bash
# Start server
pnpm dev

# Build
pnpm build

# Build with base URL
pnpm build --base=/some-base
```

### Notes

Some cleanup and hand-editing was necessary for ~150 annotations. Python's `fuzzywuzzy` didn't seem like it would help. The `csv` module didn't appear to capture all the quotes so ended up doing a `string.split` on "`|`".

### TODO

* [x] Mobile
* [ ] Split the JSON up into smaller files (?)
* [ ] Fade in and out
* [ ] Read [this](https://johnresig.com/blog/how-javascript-timers-work/) and [this](http://www.geekabyte.io/2014/01/javascript-effect-of-setting-settimeout.html)
* [ ] Loading
* [ ] Error
* [ ] Complete typographic corrections in source CSV
* [ ] Prevent unnecessary rerenders
* [ ] Dark and Light modes
* [ ] Change typefaces
* [ ] Resize to fit viewport height
* [ ] Remove unnecessary quotes in source

## Sources

* Jaap Meijers' [annotated CSV](https://www.instructables.com/id/Literary-Clock-Made-From-E-reader/)
* [The Guardian](https://www.theguardian.com/books/table/2011/apr/21/literary-clock). For the first version. Realized that Meijer's CSV had more quotes _and_ was annotated 🤘

## License

MIT
