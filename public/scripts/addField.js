// procurar o botao 
document.querySelector("#add-time")
//quando clicar no botar exercutar uma açao
.addEventListener('click', cloneField)

function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos. que campo??
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar

    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
