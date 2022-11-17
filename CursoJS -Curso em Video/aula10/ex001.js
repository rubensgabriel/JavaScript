var a = window.document.getElementById('area')
        a.addEventListener('click',clicar)
        a.addEventListener('mouseenter',entrar)
        a.addEventListener('mouseout',sair)
        a.addEventListener('mousedown',pressionar)

        function clicar(){
            a.innerText = 'Clicou!'
            a.style.background = 'yellow'
        }
        function entrar(){
            a.innerText = 'Entrou'
            a.style.background = 'green'
        }
        function sair(){
            a.innerText = 'Saiu'
            a.style.background = 'rgb(30, 180, 30)'
        }
        function pressionar(){
            a.innerText = 'Pressionando'
            a.style.background = 'red'
        }