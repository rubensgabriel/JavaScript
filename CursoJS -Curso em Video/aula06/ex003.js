var nome = window.prompt('Qual é o seu nome?')
document.write(`Olá <strong>${nome}</strong>. Seu nome tem ${nome.length} letras.<br>`)
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}.<br>`)
document.write(`Seu nome em minusculas é ${nome.toLowerCase()}`)