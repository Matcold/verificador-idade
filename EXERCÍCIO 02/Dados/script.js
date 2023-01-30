function verificar() {
    var now = new Date()
    var ano = now.getFullYear()
    var anoNasci = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (anoNasci.value.length == 0 || Number(anoNasci.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = window.document.getElementsByName('txtsex')
        var idade = ano - Number(anoNasci.value)
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            gênero = 'masculino'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'Dados/crianca homem.png')

            } else if (idade < 26) {
                img.setAttribute('src', 'Dados/jovem homem.png')

            } else if (idade < 45) {
                img.setAttribute('src', 'Dados/homem coroa.png')

            } else {
                img.setAttribute('src', 'Dados/idoso homem.png')
            }

        } else if (sex[1].checked) {
            gênero = 'feminino'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'Dados/crianca mulher.png')

            } else if (idade < 26) {
                img.setAttribute('src', 'Dados/jovem mulher.png')

            } else if (idade < 45) {
                img.setAttribute('src', 'Dados/mulher coroa.png')

            } else {
                img.setAttribute('src', 'Dados/idosa mulher.png')
            }
            
        }
        res.innerHTML = `A pessoa é do sexo ${gênero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}
