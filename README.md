# eo1-workaround
Bringing EO1 back from the dead 🎨🧟

## Getting Started

1. Turn on your EO1, you will see the `Fetching art...` screen
2. Plug a [miniUSB hub](https://www.amazon.com/dp/B01HYJLZH6) into the back of the EO1
3. Plug in a keyboard and mouse
4. `Windows key + B` (this brings up the default browser)
5. Open this URL: https://download.mozilla.org/?product=fennec-latest&os=android&lang=multi (this will download and install Firefox) 
6. Pull down from the top left of the Android UI to show downloads and click on the Firefox download

## Next Steps

- Once you've completed the initial setup and have Firefox running you can choose one of three options for displaying art, ordered in increasing difficulty

## How to Use Hosted Solution (non-custom implementation)

- Navigate to https://eo1-workaround.onrender.com/ and click once on the image to bring it up in fullscreen mode
- this uses [art-club-redux](https://github.com/christianboyle/art-club-redux), which is a collection of all found art that used to be part of Electric Objects Art Club. 

## How to Use a Single Static Image (basic custom implementation)

1. Download [this file](https://gist.github.com/christianboyle/226e4cfd9431a0c46bdce6c34bb8ffba) 
1. Host it somewhere public
1. Replace [this path](https://gist.github.com/christianboyle/226e4cfd9431a0c46bdce6c34bb8ffba#file-index-html-L28) with an image of your choosing
1. Visit your public URL and refresh, click once to enter fullscreen, click again to exit

## How to Use Autorotation with Your Own Photos (advanced custom implementation)

1. Download the [source zip](https://github.com/christianboyle/eo1-workaround/releases/tag/1.0)
1. `rm art.json`
1. `rm .gitignore package.json package-lock.json`
1. `rm -rf art-club-redux`
1. `mkdir my-photos`
1. Add your photos to `my-photos`
1. Update [this path](https://github.com/christianboyle/eo1-workaround/blob/main/gen_art_json.py#L5) to point to your new directory `my-photos`
1. Update this [other path](https://github.com/christianboyle/eo1-workaround/blob/main/gen_art_json.py#L8) to your new directory as well `my-photos`
1. `python gen_art_json.py`
1. Upload the zip somewhere publicly accessible and open index.html in your browser

## Notes

1. We need to use Firefox instead of the default browser Android 4 (EO1's operating system) ships with, because it has support for the fullscreen API
2. We need to sideload Firefox, because we don't have access to the Google Play Store
3. The method to sideload Firefox was found in [this support ticket](https://support.mozilla.org/en-US/questions/1103697)
4. We can't use the hardware button or `F2` shortcut to toggle EO1 on/off, so unplugging is your only option
5. gifs render poorly when scaled up and I'm not sure what the secret sauce is to fix this, for now I recommend using 1080x1920 static images
6. You can adjust the brightness of the display manually by dragging down the top right corner of the Android UI and using the brightness slider control
