var fs = require('fs');
const path = '/home/sam/Downloads/The.Matrix.1999.REMASTERED.1080p.BluRay.x265-RARBG.Polish.Official.srt'
var iconv = require('iconv-lite');

try {
    const buffer = fs.readFileSync(path);

    const data = iconv.decode(buffer, 'ISO-8859-2');

    var new_file = '';

    for(let i = 0; i < data.length; i++){
        let char = data[i];

        var replacement = {
            '³' : 'ł',
            '' : 'ś',
            '¹' : 'ą',
            'æ' : 'ć',
            '' : 'ź',
            '¿' : 'ż',
            'ê' : 'ę',
            'ñ' : 'ń',
            '' : 'Ś',
        };

        if (char in replacement) {
            char = replacement[char];
        }
        new_file += char;

    }

} catch (err) {
    console.error('Error reading file', err);
}

var buffer = iconv.encode(new_file, 'ISO-8859-2');

fs.writeFileSync(path + '_changed', new_file);