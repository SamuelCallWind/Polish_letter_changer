const fs = require('fs');
const path = '/home/sam/Downloads/The.Matrix.1999.REMASTERED.1080p.BluRay.x265-RARBG.Polish.Official.srt';
const iconv = require('iconv-lite');

try {
  const buffer = fs.readFileSync(path);
  const data = iconv.decode(buffer, 'ISO-8859-2');

  const replacements = {
    '³': 'ł',
    '': 'ś',
    '¹': 'ą',
    'æ': 'ć',
    '': 'ź',
    'š': 'ą',
    '¿': 'ż',
    'ê': 'ę',
    'ñ': 'ń',
    '': 'Ś',
  };

  var new_file = data.split('').map(char => replacements[char] || char).join('');
  var buffer2 = iconv.encode(new_file, 'ISO-8859-2');

} catch(err) {
  console.error('unable to read the file', err);
}

fs.writeFileSync(path + '_changed', new_file);