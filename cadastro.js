let listaDados = []; // var global;

function recebeDados(nome, email, telefone, endereco) {
  listaDados.push({
    nome: nome,
    email: email,
    telefone: telefone,
    endereco: endereco,
  });
  $("#lista").html(retornaDados());
}

function retornaDados() {
  let lista = [];
  for (let i = 0; i < listaDados.length; i++) {
    let dados = `<p>${listaDados[i].nome} </p>`;
    dados += `<p> ${listaDados[i].email} </p>`;
    dados +=`<p> ${listaDados[i].telefone} </p>`;
    dados +=`<p> ${listaDados[i].endereco} </p>`;
    lista.push(dados); // paragrafo com o nome.
  }
  return lista.join("");
}

function cadastraFront() {
  let nome = $("#inputNome").val();
  let email = $("#inputEmail").val();
  let telefone = $("#inputTelefone").val();
  let endereco = $("#inputEndereco").val();

  recebeDados(nome, email, telefone, endereco);
}

