ffff = 'Art, Design and Architecture' + '.json'

for ffff in ['Arts', 'Business and Economics', 'Education', 'Engineering', 'Information Technology', 'Law', 'Medicine, Nursing and Health Sciences', 'Pharmacy and Pharmaceutical Sciences', 'Science']:
	ffff += '.json'
	with open(ffff) as f:
		x  = f.read()
		
	import json

	y = json.loads(x)
	z = []

	for k, v in y.items():
		z.append({'unitcode': k, 'unitname': v})
		
		
	with open(ffff, 'w') as f:
		json.dump(z, f, indent=2)
	
	