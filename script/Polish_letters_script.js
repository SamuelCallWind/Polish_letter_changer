var fs = require('fs');
const path = '/home/sam/Documents/subtitles/kirikou_pl.txt'
var iconv = require('iconv-lite');

try {
    const buffer = fs.readFileSync(path);

    const data = iconv.decode(buffer, 'ISO-8859-2');

    var new_file = '';

    for(let i = 0; i < data.length; i++){
        let char = data[i];

        
        if (char === '³'){
            char = 'ł';
        } 

        else if (char === '¹'){
            char = 'ą';
        }

        else if (char === ''){
            char = 'ś';
        }

        else if (char === 'æ'){
            char = 'ć';
        }

        else if (char === ''){
            char = 'ź';
        }

        else if (char === '¿'){
            char = 'ż';
        }

        else if (char === 'ê'){
            char = 'ę';
        }

        else if (char === 'ñ'){
            char = 'ń';
        }

        else if (char === ''){
            char = 'Ś';
        }
        new_file += char;

    }

} catch (err) {
    console.error('Error reading file', err);
}

var buffer = iconv.encode(new_file, 'ISO-8859-2');

fs.writeFileSync(path + '_changed', new_file);