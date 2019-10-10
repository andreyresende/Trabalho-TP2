import requests as requests
import json

query = input('Digite sua pesquisa: ')
#http://dblp.org/search/publ/api?q=ass&format=json
url = "http://dblp.org/search/publ/api?q="+ query +"&format=json"

response = requests.get(url)
test = response.json()
array = test["result"]["hits"]["hit"]
count = test["result"]["hits"]["@sent"]
for i in range(int(count)):
    print(array[i]["info"]["title"])