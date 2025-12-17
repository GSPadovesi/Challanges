# Classificação visual de caracóis 🌀

## 🧠 Sobre o Desafio

Este projeto foi criado como um desafio de lógica e visualização.
A proposta é implementar o algoritmo **Snail Sort**, que percorre uma matriz em formato de espiral, e transformar esse processo em uma animação interativa usando HTML, CSS e JavaScript.

## 🎯 Objetivo

Permitir que o usuário escolha o tamanho da matriz (3x3, 4x4, 5x5...) e visualize
o algoritmo percorrendo os números em espiral, com destaque animado em cada célula.

## ⚙️ Como Funciona

1. O usuário seleciona o tamanho da matriz.
2. O grid é gerado dinamicamente com base na escolha.
3. Ao clicar em "Iniciar Contagem", uma contagem regressiva é exibida.
4. Quando a contagem chega a zero, o algoritmo Snail Sort percorre a matriz
   e destaca visualmente cada número na ordem correta da espiral.

## 💻 Estrutura do Projeto

📂 /Classificação-visual-de-caracóis
┣ 📄 index.html → Estrutura principal da página
┣ 📄 styles.css → Estilo do layout e das animações
┣ 📄 system.js → Lógica principal do desafio (Snail, timer, grid)
┗ 📄 README.md → Documentação do desafio

## 🚀 Como Usar

Instruções de uso (abrir o HTML, selecionar tamanho, iniciar).

## 🧩 Tecnologias Utilizadas

- HTML5
- CSS3 (Grid Layout)
- JavaScript (puro, sem frameworks)

## 🧠 Lógica do Algoritmo (Snail Sort)

O algoritmo percorre a matriz da seguinte forma:

1. Da esquerda para a direita na linha superior.
2. De cima para baixo na última coluna.
3. Da direita para a esquerda na linha inferior.
4. De baixo para cima na primeira coluna.
   Esse processo se repete até que todos os elementos sejam visitados,
   formando o percurso em espiral.

## 📱 Melhorias Futuras (Opcional)

- Tornar o layout totalmente responsivo para mobile.
- Permitir ajustar a velocidade da animação.
- Adicionar efeitos visuais (ex: transições mais suaves).
- Mostrar a sequência final do percurso após a execução.

## 👨‍💻 Autor

👨‍💻 Desenvolvido por Gabriel Santana
📎 [https://github.com/GSPadovesi]
