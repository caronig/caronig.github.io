const SHEET_ID = "1SY8CrCyX_yNpdURlXxWup_pQWJ59X9vnOGlN0yE2aow";

const ACCESS_TOKEN =
  "ya29.A0AVA9y1uHVcjGMnVX8LhE1Ixynt76M57qRaJFMU786xB6lFxLmNsDxwfru6_cuaPN6-3gTOqvjerilEH-sqdsXbxcZvNAtG0n3KWI3kHup9xQYtZ3A3L-4ztekNDWLr1gru7CfZA8wln44XhvSzW-BGkswlyhaCgYKATASATASFQE65dr88T-uUUhm6zt9IyodYrLKKA0163";

fetch(
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/hojaMenu!A2:B`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
).then(function (response) {
  response.json().then(function (data) {

    const values = data.values;

    for (var i = 0; i < values.length; i++) {
        console.log(i);
        var lista = document.getElementById("lista-menu");
        var producto = document.createElement("div");
        producto.className = "menu-item";

        producto.innerHTML = `${values[i][0]}<span class="precio">${values[i][1]}</span>`;
 
        lista.appendChild(producto);
     }
  });
});
