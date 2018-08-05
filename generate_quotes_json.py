import sys
import json
from collections import defaultdict

import requests
from bs4 import BeautifulSoup

QUOTES_URI='https://www.theguardian.com/books/table/2011/apr/21/literary-clock'

quotes = defaultdict(list)

try:
    html_data = requests.get(QUOTES_URI).text
except Exception as e:
    sys.stderrr.write('Something went wrong...\n')
    sys.stderrr.write(str(e) + '\n')
    sys.exit(1)

soup = BeautifulSoup(html_data, 'html.parser')
table_of_quotes = soup.find('table', {'class': 'stand-alone'})

for row in table_of_quotes.findAll('tr'):
    cells = row.findAll('td')
    quote_data = [_.text.strip() for _ in cells]

    if quote_data and all(quote_data):
        quotes[quote_data[0]].append({
            'quote': quote_data[1],
            'book': quote_data[2],
            'author': quote_data[3],
        })

print(json.dumps(quotes, indent=4))
