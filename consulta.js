// Consulta
var produtos = JSON.parse(localStorage.getItem('produtos'))

if (produtos == null) {
    produtos = []
}


var tabela = document.getElementById('tabela')

for (i = 0; i < produtos.length; i++) {
    var produto = produtos[i]
    var nome = produto['nome']
    var ns = produto['ns']
    var tipo = produto['tipo']
    var preco = produto['preco']
    var caract = produto['caract']

    var th = tabela.insertRow(1)
    var td = [th.insertCell(0), th.insertCell(1), th.insertCell(2), th.insertCell(3),th.insertCell(4)]
    td[0].innerHTML = nome
    td[1].innerHTML = ns
    td[2].innerHTML = tipo
    td[3].innerHTML = preco
    td[4].innerHTML = caract
}