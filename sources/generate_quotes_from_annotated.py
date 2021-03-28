import json
from collections import defaultdict

quotes = defaultdict(list)
counter = 0

with open('litclock_annotated.csv') as csv_file:
    for line in csv_file:
        quote = line.strip().split('|')
        quotes[quote[0]].append({
            'timeFragment': quote[1],
            'quote': quote[2],
            'book': quote[3],
            'author': quote[4],
        })
        counter += 1

print(json.dumps(quotes, indent=2))

# print(counter)
