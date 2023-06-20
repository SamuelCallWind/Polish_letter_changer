document.addEventListener('DOMContentLoaded', function() {
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
    '': 'Ź',
    'Ľ': 'Ą'
  };

  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var fileUploaded = document.getElementById('myFile');
    var file = fileUploaded.files[0];

    // Make so that if there is not file it sends an error

    if (!file) {
      alert('No file selected');
      return;
    };

    var reader = new FileReader();

    reader.onload = function(e) {
      var res = e.target.result;

      var changedResult = (function() {
        return res.split('').map((char) => replacements[char] || char).join('');
      })();

      var blob = new Blob ([changedResult], {type: "text/plain;charset=utf-8"});
      var downloadButton = document.querySelector('.downloadButton');
      
      downloadButton.style.display = "block";

      downloadButton.addEventListener('click', function() {
        var dl = document.createElement("a");
        dl.href = URL.createObjectURL(blob);
        dl.download = file.name.split('.').slice(0, -1).join('') + '_changed'
    
        document.body.appendChild(dl);
        dl.click();
        document.body.removeChild(dl);

        downloadButton.style.display = "none";
      });
    };

    reader.onerror = function() {
      console.log(reader.error);
    };

    reader.readAsText(file, 'ISO-8859-2');



  });
})
  

  