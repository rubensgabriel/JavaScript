function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <= 3){
                //Bebê
                img.setAttribute('src', 'bebe-h.png')
            }
            if (idade >= 4 && idade <= 12){
                //Criança
                img.setAttribute('src', 'criança-h.png')
            }
            if (idade >= 13 && idade <= 18){
                //Adolescente
                img.setAttribute('src', 'adolescente-h.png')
            }
            if (idade >= 19 && idade < 60 ){
                //Adulto
                img.setAttribute('src', 'adulto-h.png')
            }
            if (idade >= 60 && idade < 150 ){
                //Idoso
                img.setAttribute('src', 'idoso-h.png')
            }
            if (idade >= 150 ){
                //Falecido
                img.setAttribute('src', 'morte.png')
            }
        }
        else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <= 3){
                //Bebê
                img.setAttribute('src', 'bebe-m.png')
            }
            if (idade >= 4 && idade <= 12){
                //Criança
                img.setAttribute('src', 'criança-m.png')
            }
            if (idade >= 13 && idade <= 18){
                //Adolescente
                img.setAttribute('src', 'adolescente-m.png')
            }
            if (idade >= 19 && idade < 60 ){
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            }
            if (idade >= 60 && idade < 150 ){
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
            if (idade >= 150 ){
                //Falecido
                img.setAttribute('src', 'morte.png')
            }
        }
        res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}