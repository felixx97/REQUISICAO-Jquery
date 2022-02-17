function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+ cep +"/json/";

    console.log(url);
    $.ajax({
        url: url,
        type: 'GET',
        success: function (response){
            console.log(response);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("complemento").innerHTML = response.complemento;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("ddd").innerHTML = response.ddd;
        }
    })
}