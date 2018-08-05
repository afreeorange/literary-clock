line_count = 0

with open('litclock_annotated.csv') as csv_file:
    for line in csv_file:
        line_count += 1
        quote_data = line.strip().split('|')

        if quote_data[1] not in quote_data[2]:
            print(line_count, quote_data)
