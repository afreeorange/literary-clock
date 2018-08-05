import json
import csv
from collections import defaultdict

quotes = defaultdict(list)

with open('litclock_annotated.csv') as csv_file:
    reader = csv.reader(csv_file, delimiter='|')

    for row in reader:
        quotes[row[0]].append({
            'timeFragment': row[1],
            'quote': row[2],
            'book': row[3],
            'author': row[4],
        })

print(json.dumps(quotes, indent=4))
