## 1. Benchmarking e Prototipação

Foi utilizada a ferramenta Figma para fazer a prototipação de como seria o formulário.
* As cores e o design foram escolhidos de forma que acompanhassem a identidade visual do site da EloGroup.
* A ilustração é vetor open source.

O protótipo final e as propostas podem ser encontradas [aqui](https://www.figma.com/file/VkMh0GFZisjpcIeaMIkM0Y/EloGroup?node-id=1%3A2). 

<br>

## 2. Desenvolvimento

Foi escolhido o Angular pelo fato de possuir os Reactive Forms, que são robutos, reusáveis e testáveis, diferentes de outras tecnologias similares como React e VUE. E como os inputs são a parte principal da aplicação, esta foi considerada a tecnologia que mais se adapta ao problema.

O design é resposível para qualquer tamanho de tela.

O projeto foi feito com base [neste outro projeto](https://github.com/bernardohrl/Telzir), onde também fiz um formulário. Por este motivo há poucos commits.


## 3. Organização de Arquivos
 A maior parte dos arquivos são gerados pelo angular para funcionamento correto do framework. Os arquivos/módulos que foram alterados são:

- src/styles.css 

> Neste arquivo foram colocados os CSS que são utilizados em toda aplicação.

- src/models/

> Nesta pasta definicas as classes que são utilizadas na aplicação.

- src/helpers/

> Nesta pasta são definidas funcionalidades auxiliáres, neste caso as funções que recuperam os dados necessários para apresentar as informações ao usuário.

- src/assets/

> Esta pasta contém todas imagens que são usadas na aplicação.


- src/assets/app/app.component.*

> Angular é um framework orientado a componentes, e estes 3 arquivos (.html, .scss e .ts) representam um. Este é o componente principal da aplicação, tanto que se observarmos, ele possui apenas a declaraçao e estilização do header -componente comum a todas as páginas da aplicação- e a declaração do componente 'dadosPessoais'.

- src/assets/app/app.module.ts

> Neste arquivo, são declarados quais componentes (prontos e disponíveis para ser baixados via NPM) poderão ser usados nos componentes que foram desenvolvidos na aplicação.  

- src/assets/app/componenets

> Esta pasta deve conter todos os componentes da aplicação.

- src/assets/app/componenets/dadosPessoais

> Este componente possui a parte funcional da aplicação, a aplicação é separada em: <br>

> **dadosPessoais.component.html:**
> \- Declaração do HTML do componente, declaração de componentes prontos, além de permite diretivas do angular como NgIf e NgFor.

> **dadosPessoais.component.scss:**
> \- Neste arquivo é declarado todo estilo do HTML, sendo utilizado a linguagem de folha de estilo SASS.

> **dadosPessoais.component.ts:**
> \- Este arquivo apresenta todo o javascript necessário para o componente funcionar, além de "linkar" suas variaveis com o HTML.

