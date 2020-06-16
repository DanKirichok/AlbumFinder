write_file = open("testfile.txt","w") 

with open("rando.txt") as file:
	for line in file.readlines():
		if len(line.strip()) > 0:
			write_file.write("'" + line.replace("\n", "") + "',\n");

write_file.close()