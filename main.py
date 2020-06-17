from bs4 import BeautifulSoup

import requests

def func1():
	write_file = open("testfile.txt","w") 

	with open("rando.txt") as file:
		for line in file.readlines():
			if len(line.strip()) > 0:
				write_file.write("'" + line.replace("\n", "") + "',\n");

	write_file.close()
	
def func2():
	url = "https://pitchfork.com/features/lists-and-guides/the-200-best-albums-of-the-2010s/"

	r  = requests.get(url)

	data = r.text

	soup = BeautifulSoup(data)

	write_file = open("rando.txt","w") 

	for link in soup.find_all('h2'):
		write_file.write((link.text).replace(":", " -")[:(link.text).index("(")] + "\n")
	
	write_file.close()
	
func2()
func1()