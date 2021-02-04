// Cadastro

var cate = JSON.parse(localStorage.getItem('cate'))

var produtos = JSON.parse(localStorage.getItem("produtos"))

const select1 = document.getElementById('tipo-prod')

if(produtos == null) {
    produtos = []
}

function salvar(){
    produtos.push ({
        'nome' : document.getElementById('nome-produto').value,
        'ns' : document.getElementById('num-serie').value,
        'tipo' : document.getElementById('tipo-prod').value,
        'preco' : document.getElementById('preco').value,
        'caract' : document.getElementById('caract').value
    })

    const produtos_json = JSON.stringify(produtos)

    localStorage.setItem("produtos", produtos_json);

    document.getElementById('nome-produto').value = ""
    document.getElementById('num-serie').value = ""
    document.getElementById('tipo-prod').value = ""
    document.getElementById('preco').value = "R$"
    document.getElementById('caract').value = ""

    alert('Produto Cadastrado!')
}

function exibeOpt() {
    select1.innerHTML = ""

    for(i=0; i<cate.length; i++) {
    var opt = document.createElement('option')
    opt.setAttribute('value', cate[i])
    opt.innerText = cate[i]  
    select1.appendChild(opt)
}}

exibeOpt()
