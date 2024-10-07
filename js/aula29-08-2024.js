const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

const numeros = []
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if(!numeros.includes(numero)){
        numeros.push(numero)
        resp1.innerText = `Números: ${numeros}`
        frm.inNumero.value = ""
        frm.inNumero.autofocus()
    } else {
        alert("Este número já foi inserido")
        frm.inNumero.value = ""
        frm.inNumero.autofocus()
    }
})
frm.btVerificar.addEventListener("click", ()=>{
    for(let i = 0; i<numeros.length; i++){
        if(numeros[i] < numeros[i+1]){
            resp2.innerText = "Sim... São Números Crescentes."
        } else  if(numeros[i] > numeros[i+1]){
            resp2.innerText = "Atenção.... Números NÃO estão em ordem crescente."
           return
        }
    }
})