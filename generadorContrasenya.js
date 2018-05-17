module.exports = {
  generarCodigo: function(longitudContrasenya) {
    var caracteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
      'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', '0', '1', '2', '3', '4',
      '5', '6', '7', '8',
      '9'
    ];

    var arrayCodigo = [];

    function random(max) {
      return Math.floor(Math.random() * (max));
    }

    for (let i = 0; i < longitudContrasenya; i++) {
      arrayCodigo[i] = caracteres[random(caracteres.length)];
    }

    var codigo = arrayCodigo.join('');

    return codigo;

  }

};
