var cate = JSON.parse(localStorage.getItem('cate'))
const ul = document.querySelector('ul')
const nCat = document.getElementById('nCat')

    if(cate == null) {
        cate = []
    }

function listaOpt() {
            
    ul.innerHTML = ""
    for(i=0; i<cate.length;i++) {
        var li = document.createElement('li')
        var a = document.createElement('a')
        var span = document.createElement('span')

        a.setAttribute('href', '#')
        a.setAttribute('onclick', `removeOpt(${i})`)

        li.setAttribute('class', 'liElement')
        a.setAttribute('class', 'material-icons')


        
        

        ul.appendChild(li)
        li.appendChild(span)
        li.appendChild(a)

        

        span.innerText = cate[i]
        a.innerText = 'delete'

        
    }

}

function addCate () {
    cate.push(nCat.value)
    listaOpt()
    

    const produtos_json = JSON.stringify(cate)
    localStorage.setItem('cate', produtos_json)

    nCat.value = ""
    nCat.focus()
}

function removeOpt(pos) {
    cate.splice(pos,1)
    listaOpt()
    const produtos_json = JSON.stringify(cate)
    localStorage.setItem('cate', produtos_json)
}

listaOpt()