# phonetic-keyboard-lb

A phonetic transcription tool for the Luxembourgish voices in RHVoice.

# How to install
If you are on Windows or on MacOS, RHVoice should be installed, together with the Luxembourgish voices.

Clone this repository and launch a webserver with the following command:
```
python -m http.server
```

# How to run
It has mainly been tested on Firefox, because RHVoice voices are available via the Web Speech API.
Open the following URL in Firefox: `http://localhost:8000`.
The first time, all the sounds will not work, you will need to authorize this webpage to play sounds.

# License
This software is (c) Information and press service of the luxembourgish government and licensed under the MIT license.