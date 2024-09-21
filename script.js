var url 

async function buscarCEP() {

    let cep = txt_cep.value

    const url_cep = "https://viacep.com.br/ws/" + cep + "/json"

    const resposta = await fetch(url_cep)
    const dados = await resposta.json()

    span_cidade.innerText = dados['localidade']
    span_estado.innerText = dados['uf']
    span_ddd.innerText = dados['ddd']
    span_logradouro.innerText = dados['logradouro']
    span_bairro.innerText = dados['bairro']

    let nome_cidade =  dados['localidade'].replaceAll(" ","%20")

    url = "https://api.hgbrasil.com/weather?format=json-cors&key=cb4fe311&city_name=" +nome_cidade+","+dados['uf']
    consumirAPI()

}

//__________________________________________________________________________________________________________________________________________________________________\\

async function consumirAPI() {
    const resultado = await fetch(url)
    const dados = await resultado.json()

    let condicao = dados['results']['description']
    let cidade = dados['results']['city']
    let temperatura = dados['results']['temp']
    let temperatura0 = dados['results']['forecast'][0]['max'] + "ºC" + " - " + dados['results']['forecast'][0]['min']
    let vento = dados['results']['wind_speedy']
    let data_hora = dados['results']['date'] + " - " + dados['results']['time']
    let semana = dados['results']['forecast'][0]['weekday']
    let umidade = dados['results']['humidity']

    span_description.innerText = condicao
    span_city.innerText = cidade 
    span_temp.innerText = temperatura
    span_temp0.innerText = temperatura0
    span_wind.innerText = vento
    span_data_hora.innerText = data_hora
    span_semana.innerText = semana
    span_umidade.innerText = umidade

    //__________________________________________________________________________________________________________________________________________________________________\\

    let data1 = dados['results']['forecast'][1]['date']
    let semana1 = dados['results']['forecast'][1]['weekday']
    let condicao1 = dados['results']['forecast'][1]['description']
    let temperatura1 = dados['results']['forecast'][1]['max'] + "ºC" + " - " + dados['results']['forecast'][1]['min']
    let umidade1 = dados['results']['forecast'][1]['humidity']
    let vento1 = dados['results']['forecast'][1]['wind_speedy']

    span_data1.innerText = data1
    span_semana1.innerText = semana1
    span_description1.innerText = condicao1
    span_temp1.innerText = temperatura1
    span_umidade1.innerText = umidade1
    span_wind1.innerText = vento1

    //__________________________________________________________________________________________________________________________________________________________________\\

    let data2 = dados['results']['forecast'][2]['date']
    let semana2 = dados['results']['forecast'][2]['weekday']
    let condicao2 = dados['results']['forecast'][2]['description']
    let temperatura2 = dados['results']['forecast'][2]['max'] + "ºC" + " - " + dados['results']['forecast'][2]['min']
    let umidade2 = dados['results']['forecast'][2]['humidity']
    let vento2 = dados['results']['forecast'][2]['wind_speedy']

    span_data2.innerText = data2
    span_semana2.innerText = semana2
    span_description2.innerText = condicao2
    span_temp2.innerText = temperatura2
    span_umidade2.innerText = umidade2
    span_wind2.innerText = vento2

    //__________________________________________________________________________________________________________________________________________________________________\\

    let data3 = dados['results']['forecast'][3]['date']
    let semana3 = dados['results']['forecast'][3]['weekday']
    let condicao3 = dados['results']['forecast'][3]['description']
    let temperatura3 = dados['results']['forecast'][3]['max'] + "ºC" + " - " + dados['results']['forecast'][3]['min']
    let umidade3 = dados['results']['forecast'][3]['humidity']
    let vento3 = dados['results']['forecast'][3]['wind_speedy']

    span_data3.innerText = data3
    span_semana3.innerText = semana3
    span_description3.innerText = condicao3
    span_temp3.innerText = temperatura3
    span_umidade3.innerText = umidade3
    span_wind3.innerText = vento3

    //__________________________________________________________________________________________________________________________________________________________________\\

    let data4 = dados['results']['forecast'][4]['date']
    let semana4 = dados['results']['forecast'][4]['weekday']
    let condicao4 = dados['results']['forecast'][4]['description']
    let temperatura4 = dados['results']['forecast'][4]['max'] + "ºC" + " - " + dados['results']['forecast'][4]['min']
    let umidade4 = dados['results']['forecast'][4]['humidity']
    let vento4 = dados['results']['forecast'][4]['wind_speedy']

    span_data4.innerText = data4
    span_semana4.innerText = semana4
    span_description4.innerText = condicao4
    span_temp4.innerText = temperatura4
    span_umidade4.innerText = umidade4
    span_wind4.innerText = vento4
}