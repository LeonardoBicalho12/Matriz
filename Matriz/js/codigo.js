const caixa = document.querySelector("#caixa");
let cursos = [];

let resposta = "";

//Incluindo curso na matriz curso
while (resposta != "N") {
    let curso = prompt("Digite o nome do curso")
    cursos.push(curso.toUpperCase())
    resposta = prompt("Cadastrar outro curso S/N")
    if (resposta.toUpperCase() == "N") {
        cursos.forEach((aula) => {
            let p = document.createElement("p");
            p.innerHTML = aula + "<br>----------------<br>";
            caixa.appendChild(p);

        })
        break;
    }
}
//excluir
resposta = prompt("Excluir curso S/N")
if(resposta.toUpperCase()=="S"){
    let curso = prompt("Digite o nome do curso para excluir")
    /* pegando a posição do elemento dentro da matriz */
    alert("posicao do curso dentro da matrz") + cursos.indexOf(curso.toUpperCase)
    let posicao = curso.indexOf(curso.toUpperCase(),1);
    //apagando o curso com método splice
    cursos.splice(posicao);
    cursos.forEach((aula)=>{
        let p = document.createElement("p");
        p.innerHTML = aula + "<br>-----------------<br>";
        caixa.appendChild(p);

    })
}