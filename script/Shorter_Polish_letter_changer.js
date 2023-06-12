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

try {
  const buffer = fs.readFileSync(path);
  const data = iconv.decode(buffer, 'ISO-8859-2');

  

  var new_file = data.split('').map(char => replacements[char] || char).join('');
  var buffer2 = iconv.encode(new_file, 'ISO-8859-2');

} catch(err) {
  console.error('unable to read the file', err);
}

fs.writeFileSync(path + '_changed', new_file);


document.getElementById('uploadButton').addEventListener('click', function() {
  var fileUploaded = document.getElementById('myFile');
  var file = fileUploaded.files[0];

  // Make so that if the file isn't a correct file, it sends an error

  if (!file) {
    alert('No file selected');
    return;
  };

  var reader = new FileReader();

  reader.onload = function(e) {
    var res = e.target.result;

    function changesFunction() {
      var changedResult = res.split('').map((char) => replacement[char] || char).join('');
    };

    var encoder = new TextEncoder('UTF-8');
    var encodedText = encoder.encode(changedResult);

    
  }


});