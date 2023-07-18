import os
import json

# Get list of files in the art directory
files = os.listdir('art-club-redux/art/')

# Create a list of dictionaries where each dictionary has a static key "src" and a unique "id" and file path value
art_dict = [{'id': i, 'src': f'art-club-redux/art/{file}'} for i, file in enumerate(files)]

# Write the dictionary to a JSON file
with open('art.json', 'w') as f:
    json.dump(art_dict, f)
