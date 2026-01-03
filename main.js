const mapping = {
    "b":"phonemb",
    "d":"phonemd",
    "D":"phonemdmaj",
    "d_Z":"phonemdzmaj",
    "dz":"phonemdz",
    "f":"phonemf",
    "g":"phonemg",
    "h":"phonemh",
    "j":"phonemj",
    "k":"phonemk",
    "l":"phoneml",
    "m":"phonemm",
    "n":"phonemn",
    "N":"phonemnmaj",
    "p":"phonemp",
    "r":"phonemr",
    "R":"phonemrmaj",
    "R\\":"phonemrslash",
    "s":"phonems",
    "S":"phonemsmaj",
    "s\\":"phonemsslash",
    "t":"phonemt",
    "T":"phonemtmaj",
    "t_s":"phonemts",
    "v":"phonemv",
    "w":"phonemw",
    "x":"phonemx",
    "z":"phonemz",
    "Z":"phonemzmaj",
    "z\\":"phonemzslash",
    "{":"phonemacc",
    "@":"phonemat",
    "6":"phonemsix",
    "6_k":"phonemsixk", 
    "A":"phonemamaj",
    "a:":"phonemalong",
    "a~":"phonematilde",
    "e":"phoneme",
    "E:":"phonememajlong",
    "e:":"phonemelong",
    "E~":"phonememajtilde",
    "i":"phonemi",
    "i:":"phonemilong",
    "o":"phonemo",
    "O":"phonemomaj",
    "o:":"phonemolong",
    "u":"phonemu",
    "u:":"phonemulong",
    "y":"phonemy",
    "{:I":"phonemaccmajlongilong",
    "{:U":"phonemaccmajlongumaj",
    "@U":"phonematumaj",
    "3I":"phonemthreeimaj",
    "AI":"phonemamajimaj",
    "AU":"phonemamajumaj",
    "eI":"phonemeimaj",
    "i@":"phonemiat",
    "oI":"phonemoimaj",
    "oU":"phonemoumaj",
    "u@":"phonemuat"
}

const examples = {
    "Beeler": "https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5a/Lb-Beeler.ogg/Lb-Beeler.ogg.mp3",
    "Eechen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Lb-Eechen.ogg/Lb-Eechen.ogg.mp3",
    "beweeglech": "https://upload.wikimedia.org/wikipedia/commons/transcoded/5/57/Lb-beweeglech-m.ogg/Lb-beweeglech-m.ogg.mp3",
    "deenen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/2/25/Lb-deenen.ogg/Lb-deenen.ogg.mp3",
    "feelen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4b/Lb-feelen.ogg/Lb-feelen.ogg.mp3",
    "gegranzt": "https://upload.wikimedia.org/wikipedia/commons/transcoded/2/20/Lb-granzen.ogg/Lb-granzen.ogg.mp3",
    "heelen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/3/34/LL-Q9051_%28ltz%29-Procrastineur49-heelen.wav/LL-Q9051_%28ltz%29-Procrastineur49-heelen.wav.mp3",
    "doheem": "https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5d/Lb-doheem.ogg/Lb-doheem.ogg.mp3",
    "Jemen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a2/Lb-Jemen.ogg/Lb-Jemen.ogg.mp3",
    "tja": "https://upload.wikimedia.org/wikipedia/commons/transcoded/2/22/Lb-tja.ogg/Lb-tja.ogg.mp3",
    "Lëtzebuergesch": "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/77/Lb-L%C3%ABtzebuergesch.ogg/Lb-L%C3%ABtzebuergesch.ogg.mp3",
    "Keelen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cd/Lb-Keelen.ogg/Lb-Keelen.ogg.mp3",
    "sechs": "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/af/Lb-sechs.ogg/Lb-sechs.ogg.mp3",
    "Leetem": "https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ee/Lb-Leetem.ogg/Lb-Leetem.ogg.mp3",
    "kleesper": "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a1/Lb-kleesper.ogg/Lb-kleesper.ogg.mp3",
    "meeschten": "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/76/Lb-meeschten.ogg/Lb-meeschten.ogg.mp3",
    "oneens": "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/77/Lb-oneens.ogg/Lb-oneens.ogg.mp3",
    "dengen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/3/38/Lb-dengen.ogg/Lb-dengen.ogg.mp3",
    "piipseg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/8a/Lb-piipseg.ogg/Lb-piipseg.ogg.mp3",
    "ob": "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ac/Lb-ob.ogg/Lb-ob.ogg.mp3",
    "reeneg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0a/Lb-reeneg.ogg/Lb-reeneg.ogg.mp3",
    "dagsiwwer": "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/81/Lb-dagsiwwer.ogg/Lb-dagsiwwer.ogg.mp3",
    "schaardeg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/78/Lb-schaardeg.ogg/Lb-schaardeg.ogg.mp3",
    "russesch": "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7b/Lb-russesch.ogg/Lb-russesch.ogg.mp3",
    "haislech": "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d1/Lb-haislech.ogg/Lb-haislech.ogg.mp3",
    "Scheedgen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a3/Lb-Scheedgen.ogg/Lb-Scheedgen.ogg.mp3",
    "stréieg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/95/Lb-str%C3%A9ieg.ogg/Lb-str%C3%A9ieg.ogg.mp3",
    "Tënten": "https://upload.wikimedia.org/wikipedia/commons/transcoded/5/50/Lb-T%C3%ABnten.ogg/Lb-T%C3%ABnten.ogg.mp3",
    "fad": "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a0/Lb-fad.ogg/Lb-fad.ogg.mp3",
    "Zënsen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Lb-Z%C3%ABnsen.ogg/Lb-Z%C3%ABnsen.ogg.mp3",
    "latscheg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0e/Lb-latscheg.ogg/Lb-latscheg.ogg.mp3",
    "woubäi": "https://upload.wikimedia.org/wikipedia/commons/transcoded/3/30/Lb-woub%C3%A4i.ogg/Lb-woub%C3%A4i.ogg.mp3",
    "Kuchen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Lb-Kuchen.ogg/Lb-Kuchen.ogg.mp3",
    "Dag": "https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5a/Lb-Dag.ogg/Lb-Dag.ogg.mp3",
    "Summer": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bf/LL-Q9051_%28ltz%29-Procrastineur49-Summer.wav/LL-Q9051_%28ltz%29-Procrastineur49-Summer.wav.mp3",
    "Juli": "https://upload.wikimedia.org/wikipedia/commons/transcoded/6/68/Lb-Juli.ogg/Lb-Juli.ogg.mp3",
    "legendär": "https://upload.wikimedia.org/wikipedia/commons/transcoded/6/60/Lb-legend%C3%A4r.ogg/Lb-legend%C3%A4r.ogg.mp3",
    "Dschibuti": "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0f/Lb-Dschibuti.ogg/Lb-Dschibuti.ogg.mp3",
    "Adjektiv": "https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5c/LL-Q9051_%28ltz%29-Procrastineur49-Adjektiv.wav/LL-Q9051_%28ltz%29-Procrastineur49-Adjektiv.wav.mp3",
    "zwee": "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/14/Lb-zwee.ogg/Lb-zwee.ogg.mp3",
    "queesch": "https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6d/Lb-queesch.ogg/Lb-queesch.ogg.mp3",
    "déijéineg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/09/Lb-d%C3%A9ij%C3%A9ineg.ogg/Lb-d%C3%A9ij%C3%A9ineg.ogg.mp3",
    "reegelrecht": "https://upload.wikimedia.org/wikipedia/commons/transcoded/2/26/Lb-reegelrecht.ogg/Lb-reegelrecht.ogg.mp3",
    "hafteg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/71/Lb-hafteg.ogg/Lb-hafteg.ogg.mp3",
    "Kach": "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a8/LL-Q9051_%28ltz%29-Procrastineur49-Kach.wav/LL-Q9051_%28ltz%29-Procrastineur49-Kach.wav.mp3",
    "Haassel": "https://upload.wikimedia.org/wikipedia/commons/transcoded/3/36/Lb-Haassel.ogg/Lb-Haassel.ogg.mp3",
    "Kap": "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9f/Lb-Kap.ogg/Lb-Kap.ogg.mp3",
    "Helzen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ed/Lb-Helzen.ogg/Lb-Helzen.ogg.mp3",
    "eng": "https://upload.wikimedia.org/wikipedia/commons/transcoded/4/42/Lb-eng.ogg/Lb-eng.ogg.mp3",
    "Häff": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bf/Lb-H%C3%A4ff.ogg/Lb-H%C3%A4ff.ogg.mp3",
    "Hëlzer": "https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5f/Lb-H%C3%ABlzer.ogg/Lb-H%C3%ABlzer.ogg.mp3",
    "Brécken": "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1d/Lb-Br%C3%A9cken.ogg/Lb-Br%C3%A9cken.ogg.mp3",
    "néng": "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/03/Lb-n%C3%A9ng.ogg/Lb-n%C3%A9ng.ogg.mp3",
    "heefeg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/2/29/Lb-heefeg.ogg/Lb-heefeg.ogg.mp3",
    "Keeser": "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c2/LL-Q9051_%28ltz%29-Procrastineur49-Keeser.wav/LL-Q9051_%28ltz%29-Procrastineur49-Keeser.wav.mp3",
    "är": "https://upload.wikimedia.org/wikipedia/commons/transcoded/2/23/Lb-%C3%A4r.ogg/Lb-%C3%A4r.ogg.mp3",
    "hiwweleg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/4/48/Lb-hiwweleg.ogg/Lb-hiwweleg.ogg.mp3",
    "siwen": "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/92/Lb-siwen.ogg/Lb-siwen.ogg.mp3",
    "hellliicht": "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ce/Lb-hellliicht.ogg/Lb-hellliicht.ogg.mp3",
    "Holztem": "https://upload.wikimedia.org/wikipedia/commons/transcoded/2/2c/Lb-Holztem.ogg/Lb-Holztem.ogg.mp3",
    "Sprooch": "https://upload.wikimedia.org/wikipedia/commons/transcoded/4/40/LL-Q9051_%28ltz%29-Procrastineur49-Sprooch.wav/LL-Q9051_%28ltz%29-Procrastineur49-Sprooch.wav.mp3",
    "no": "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fa/Lb-no.ogg/Lb-no.ogg.mp3",
    "husch": "https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e3/Lb-husch.ogg/Lb-husch.ogg.mp3",
    "kuuschteg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d7/Lb-kuuschteg.ogg/Lb-kuuschteg.ogg.mp3",
    "üppeg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f3/Lb-%C3%BCppeg.ogg/Lb-%C3%BCppeg.ogg.mp3",
    "weltberüümt": "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d9/Lb-weltber%C3%BC%C3%BCmt.oga/Lb-weltber%C3%BC%C3%BCmt.oga.mp3",
    "haiteg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ae/Lb-haiteg.ogg/Lb-haiteg.ogg.mp3",
    "deier": "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/99/Lb-deier.ogg/Lb-deier.ogg.mp3",
    "Schrauf": "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/84/LL-Q9051_%28ltz%29-Procrastineur49-Schrauf.wav/LL-Q9051_%28ltz%29-Procrastineur49-Schrauf.wav.mp3",
    "räich": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/ba/Lb-r%C3%A4ich.ogg/Lb-r%C3%A4ich.ogg.mp3",
    "rau": "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/8e/Lb-rau.ogg/Lb-rau.ogg.mp3",
    "eréischt": "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/14/Lb-er%C3%A9ischt.ogg/Lb-er%C3%A9ischt.ogg.mp3",
    "béid": "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/8d/Lb-b%C3%A9id.ogg/Lb-b%C3%A9id.ogg.mp3",
    "houer": "https://upload.wikimedia.org/wikipedia/commons/transcoded/6/61/Lb-houer.ogg/Lb-houer.ogg.mp3",
    "doudvoll": "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a4/Lb-doudvoll.ogg/Lb-doudvoll.ogg.mp3",
    "Hielem": "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7c/Lb-Hielem.ogg/Lb-Hielem.ogg.mp3",
    "Biergem": "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f9/Lb-Biergem.ogg/Lb-Biergem.ogg.mp3",
    "dir": "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1a/Lb-dir.ogg/Lb-dir.ogg.mp3",
    "alljoers": "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1e/Lb-alljoers.ogg/Lb-alljoers.ogg.mp3",
    "huel": "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c4/Lb-huel.ogg/Lb-huel.ogg.mp3",
    "Lëtzebuerg": "https://upload.wikimedia.org/wikipedia/commons/transcoded/4/42/Lb-L%C3%ABtzebuerg.ogg/Lb-L%C3%ABtzebuerg.ogg.mp3",
    "sauer": "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/85/Lb-Sauer.ogg/Lb-Sauer.ogg.mp3",
    "Comptoir": "https://lod.lu/uploads/AAC/comptoir1.m4a",
    "spadséieren": "https://lod.lu/uploads/AAC/spadseieren1.m4a",
    "Jeans": "https://lod.lu/uploads/AAC/jeans1.m4a",
    "Drogen": "https://lod.lu/uploads/AAC/drog1.m4a",
    "Chance": "https://lod.lu/uploads/AAC/chance1.m4a",
    "nämlech": "https://lod.lu/uploads/AAC/namlech1.m4a",
    "Dinde": "https://lod.lu/uploads/AAC/dinde1.m4a",
    "Tut": "https://lod.lu/uploads/AAC/tut2.m4a",
    "Direktioun": "https://lod.lu/uploads/AAC/direktioun1.m4a",
    "Abenteuer": "https://lod.lu/uploads/AAC/abenteuer1.m4a",
    "Facebook": "./sounds/examples/facebook.mp3",
    "Xavier": "./sounds/examples/xavier.mp3",
    "with": "./sounds/examples/with.mp3"
}

// Mapping IPA -> X-SAMPA based on available phonems
const ipaToXsampaMap = {
    // Consonants
    'p': 'p', 'b': 'b', 't': 't', 'd': 'd', 'k': 'k', 'g': 'g',
    'm': 'm', 'n': 'n', 'ŋ': 'N',
    'f': 'f', 'v': 'v', 's': 's', 'z': 'z', 'ʃ': 'S', 'ʒ': 'Z',
    'χ': 'X', 'ʁ': 'R', 'h': 'h',
    'l': 'l', 'j': 'j', 'w': 'w', 'ɡ': 'g',

    'dʒ': 'd_Z', 'ts': 't_s', 'dz': 'dz',
    'ʀ': 'R\\', 'ɕ': 's\\', 't': 't', 'θ': 'T', 'ʑ': 'z\\',

    // long vowels 
    'iː': 'i:', 'uː': 'u:',
    'eː': 'e:', 'oː': 'o:',
    'ɛː': 'E:', 'aː': 'a:', 

    // short vowels
    'i': 'i', 'y': 'y', 'u': 'u',
    'e': 'e', 'o': 'o',
    'ɔ': 'O',
    'ɑ': 'A',
    'ə': '@', 'ɐ': '6',

    // nasal vowels
    'ɛ̃': 'E~', 'ɑ̃': 'a~',

    // Diphtongs
    'iə': 'i@', 'uə': 'u@', 'æːɪ': '{:I', 'æːʊ': '{:U', 'ɜɪ': '3I', 
    'ɑɪ': 'AI', 'ɑʊ': 'AU', 'eɪ': 'eI', 'ɐ̰': '6_k', 'oɪ': 'oI', 'oʊ': 'oU',
    'əʊ': '@U', 

    // Other
    'ˈ': '"',
};

function ipaToXsampa(ipaText) {
    let result = '';
    let i = 0;

    while (i < ipaText.length) {
        let matched = false;

        // try to match longest sequences first
        for (let len = 3; len >= 1; len--) {
            const substring = ipaText.substring(i, i + len);

            if (ipaToXsampaMap.hasOwnProperty(substring)) {
                result += ipaToXsampaMap[substring];
                i += len;
                matched = true;
                break;
            }
        }

        // if no match found, add ? and move to next char
        if (!matched) {
            // ignore spaces and special characters
            const char = ipaText[i];
            if (char === ' ') {
                result += ' ';
            } else if (char === '-' || char === '|' || char === '‖' || char === 'ˌ' || char === '.') {
                console.log('char removed: '+ char)
            } else {
                // unrecognized char
                result += '?';
            }
            i++;
        }
    }

    return result;
}


function lbVoicesAvailable() {
    if ('speechSynthesis' in window) {
        const voices = window.speechSynthesis.getVoices();
        const lbVoice = voices.find(voice =>
            voice.lang == 'lb-LU'
        );
        if (lbVoice.length !== 0) {
            return true
        }
    }
    return false
}

function speak(word) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance();

        utterance.text = word;
        utterance.rate = 0.8; 
        utterance.pitch = 1.0;
        utterance.volume = 0.6;

        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(voice =>
            voice.lang == 'lb-LU' && voice.name == window.voice
        );

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        window.speechSynthesis.speak(utterance);
    }
}

async function lodSearch(word) {
    const url = `https://lod.lu/api/lb/search?query=${word}&lang=lb`
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        const results = result?.results
        let output = ''
        if (results?.length !== 0) {
            output = '<table><tr><th scope="col">Word</th><th scope="col">IPA</th><th scope="col">X-SAMPA</th></tr>'
            for (let i=0; i< results.length; i++) {
                const r = results[i]
                const ipa = await getLodIpa(r?.id)
                output += `<tr><td>${r?.word_lb}</td><td>${ipa}</td><td>${ipaToXsampa(ipa)}</td></tr>`
            }
            output += '</table>'
            document.getElementById('output').innerHTML = output
        }
    } catch (error) {
        console.error(error.message);
    }
}

async function getLodIpa(id) {
    const url = `https://lod.lu/api/lb/entry/${id}`
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        const ipa = result?.entry?.ipa
        return ipa
    } catch (error) {
        console.error(error.message);
    }
}

async function clipboard(text) {
    await navigator.clipboard.writeText(text)
}

function load() {
    document.addEventListener('DOMContentLoaded', () => {
        window.voice = document.getElementById('voice').value
        if (!lbVoicesAvailable()) {
            document.getElementById('speak-word').style.display = 'none'
        } else {
            document.getElementById('speak-word').addEventListener('click', e => {
                speak(document.getElementById('word').value.trim())
            })
        }
        document.getElementById('lod-search').addEventListener('click', e => {
            lodSearch(document.getElementById('word').value.trim())
        })
        document.getElementById('clipboard').addEventListener('click', e => {
            clipboard(document.getElementById('phonetic-transcription').value.trim())
        })
        Array.from(document.querySelectorAll('.panel button.phoneme')).forEach(e => {
            e.addEventListener('click', event => {
                const textarea = document.querySelector('#phonetic-transcription')
                textarea.value = textarea.value + event.target.textContent
            })
            e.addEventListener('mouseover', event => {
                const phonem = event.target.textContent.trim()
                const mp3 = `sounds/${window.voice.toLowerCase()}/${mapping[phonem]}.mp3`
                const player = document.querySelector('#audioPlayer')
                player.setAttribute('src', mp3)
                player.play()
            })
        })
        Array.from(document.querySelectorAll('.panel button.example')).forEach(e => {
            e.addEventListener('click', event => {
                target = event.target
                if (target.nodeName !== 'BUTTON') {
                    target = target.parentNode
                }
                const example = target.textContent.trim()
                console.log(example)
                const mp3 = examples[example]
                console.log(mp3)
                const player = document.querySelector('#audioPlayer')
                player.setAttribute('src', mp3)
                player.play()                
            })
        })
        document.getElementById('voice').addEventListener('change', e => {
            window.voice = e.target.value
        })

    })
}

load();
