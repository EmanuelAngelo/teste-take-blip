function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario, users){

    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    //tdCreate =  document.createElement("td")

    tdId.innerHTML =  usuario.id
    tdNome.innerHTML = usuario.language  //languages
    //tdCreate.innerHTML =  usuario.created_at
    
   

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    //linha.appendChild(tdCreate);

    return linha

}


function main (){
    let data = fazGet("https://api.github.com/users/takenet/repos")
    let usuario = JSON.parse(data);
    //console.log(usuario)
    let tabela = document.getElementById("tabela")
    usuario.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha)
    });

    var linaguagens = usuario.filter(users => users.language == "C#");
        linaguagens.forEach(users =>{
        console.log(users);  //aqui no console ele mostra so as que tem c#
})

}



main()