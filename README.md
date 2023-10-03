# Dictionary App

> This is a challenge by [Coodesh](https://coodesh.com/)
> You can see the exact description of challenge at the end of this README

This project is a digital english dictionary!

This is a challenge where I will create a react native app.
This app is a digital english dictionary, made with React Native and Expo, and it's using Firebase as database, and it's using https://dictionaryapi.dev/ API for searching details about the words.

- Scroll in an infinite list of words!
- You will be able to see everything about a word, its meaning and its phonetics!
- You can save your favorite words to access them easily whenever you want to!
- You can see your history to easy remember the words you already searched for!

- We will keep results of requested words, so we don't need to request again already known words.
- You can listen to the words by clicking the "volume" icon inside the Word Details screen.
- You can have your account with login and password, and with that, you can access your history and your favorite words in any device!

### Prerequisites

This application was developed on a machine with the following versions of Npm, Yarn and Node.js, and may not work correctly on other versions.

| Technologies                     | Version |
| -------------------------------- | ------- |
| [NPM](https://www.npmjs.com/)    | 9.6.7   |
| [Yarn](https://yarnpkg.com/)     | 1.22.19 |
| [Node Js](https://nodejs.org/en) | 18.17.0 |

Also make sure you have git installed.

## Install and Run

Follow these steps to run the project locally.
Using a terminal, go to the folder where you want to clone the repository, then run the following command:

```bash
git clone https://github.com/MatheusCordeiroP/dictionary-app.git
```

Then go to repository folder typing:

```bash
cd dictionary-app
```

Install project dependencies using Yarn or npm.

```bash
npm install
```

Once the dependencies are properly installed, run the project with the following command:

```bash
npx expo start
```

# Anotações Sobre o Desenvolvimento

Logo após ler as instruções sobre o projeto, o primeiro passo que fiz foi pensar em como eu iria implementar ele, para já tentar criar uma estrutura consistente para evitar a necessidade de ter que alterar muito código por questões inesperadas.

A primeira coisa que coloquei como prioridade foram colocar as funcionalidades obrigatórias e também as quais eu tinha familiaridade, portanto, a tarefa opcional de realizar uma integração com o firebase já estava nos planos desde o início.

Nesse ponto, também levei um tempo pensando no design do aplicativo, que apesar de seguir a ideia do wireframe, tentei adaptá-lo um pouco com uma estética com mais tons de cinza e com botões mais arredondados.

Então fui lá, criei o projeto no github, fiz o primeiro commit, com um rascunho do readme, e das primeiras páginas do projeto, e pouco depois, no mesmo dia, criei uma grande base do que seria toda a estruturas de telas do projeto.

Após o esqueleto do que viria a ser o projeto estar montado, comecei a me preocupar com as funções de integração com as APIs antes de voltar a cuidar da aparência, então realizei toda a base da integração com firebase, e depois, antes de integrar com a API do dicionário, eu me vi desafiado com a função de ter um scroll infinito de palavras, por que com a Array de palavras sugeridas, haviam 300.000 linhas de palavras, então fiquei pensando em como eu poderia fazer para usar tantas linhas sem acabar com a memória do celular criando uma array com tudo isso de fato, então pensei na seguinte solução:

Ao invés de usar uma array de palavras para pegar uma palavra aleatória, eu decidi usar o próprio array que a string é, e dessa forma, eu pego algum caractere na lista de palavras, pego 200 caracteres para frente dele, e entre esses caracteres, aí então eu os transformo em arrays de palavras, removo a primeira e a última palavra, que nesse ponto, estão potencialmente e provavelmente quebradas e ilegíveis, e entre as palavras que sobram, eu sorteio uma para ser a palavra aleatória, e dessa forma, eu não precisava guardar 300.000 palavras em uma array para pegar uma delas aleatóriamente, dessa forma, eu posso acessar a todas elas pegando apenas um conjunto aleatoriamente selecionado previamente.

Com isso ajustado, e com palavras surgindo corretamente, e firebase também, agora era hora de começar a me preocupar um pouco com aparência de volta, então comecei o desenvolvimento do WordComponent, que seria o componente que seria mostrado na home, na lista de palavras aleatórias.

Realizei então uma mudança na estrutura do projeto, Ao invés de fazer com que todas as telas fossem diferentes telas na stack, eu decidi fazer com que a Home fosse a tela que gerenciaria essas outras telas menores dentro dela, e a única tela realmente separada seria a tela de detalhes palavras. Junta isso com uma mudança no nome da pasta "containers", que passei a chamar de "screens" por achar mais adequado na situação.

Após essas mudanças, notei que parte da tela estava entrando em uma área não clicável, como por exemplo, atrás da barra de notificações, então adicionei um SafeAreaView corretamente para corrigir esse problema, e também, nesse ponto, adicionei o axios para começar a fazer buscas na API do dicionário, e comecei a perceber que várias das palavras não estavam sendo encontradas na API do freeDictionary, então eu entrei no [github deles](https://github.com/meetDeveloper/freeDictionaryAPI), e lá encontrei a pasta meta/wordList/english.txt, então peguei esse arquivo, fiz uma limpeza nele com uma macro para remover todas as palavras potencialmente ofensivas ou de baixo calão, e comecei a usar essa lista de palavras no lugar da anterior, e com ela, as palavras ficaram bem mais consistentes, apesar de eventualmente ainda possuir algumas palavras que não possuem resultado ao buscar na API (mesmo que a lista de palavras em questão esteja no próprio github deles).

Por fim, terminei a integração do dicionário, arrumei alguns detalhes na tela em que era mostrado a lista de palavras, fiz algumas correções para tornar a Home a tela padrão, e removi parte das funções redundantes que tinham na Home e na tela WordList, que basicamente, era a tela que recebeu a função de mostrar a lista infinita de palavras (coisa que antes, seria função da Home).

Agora, já chegando a parte final do projeto, comecei a trabalhar na maior parte dele em questão de linhas de código, apesar de ser uma bem simples. Deixar o visual dele mais bonito. Até esse momento, todas as telas tinham cores chamativas e botões meio desalinhados, pois o principal objetivo era criar uma base do que seria o código, e as cores chamativas ajudava a perceber os espaços dos elementos, mas uma vez que esse assunto estava decidido, agora era necessário decidir as cores finais dos elementos, além de ajustar algumas funções que não tinham sido colocadas até então, como o botão de pesquisa de palavras, pra você poder buscar palavras específicas sem precisar ficar procurando ela na lista infinita de palavras.

Coloquei também feedback com FlashMessages para eventos, coloquei validações para tornar o código um pouco mais forte, com a tela de cadastro fazendo validações básicas antes de enviar a solicitação de cadastro para o firebase, também adicionei algumas outras validações para impedir que o aplicativo agisse de formas inesperadas.

Após essa fase do desenvolvimento, o projeto já estava com sua carinha final, e agora comecei a fazer testes gerais e pensar mais a fundo a respeito dos outros requisitos opcionais, como a utilização de testes automatizados, ou a integração de uma ferramenta text-to-speech no aplicativo. Como o prazo já está curto, e os testes deveriam ter sido feitos em etapas antes no processo, coisa que acabei não fazendo, optei por não fazê-los, mas colocar a função de text-to-speech, e a ferramenta utilizada foi o "expo-speech". Após isso, fiz mais alguns vários testes, onde percebi um pequeno bug que estava acontecendo por entrar e sair com contas diferentes no mesmo dispositivo móvel, então fiz uma correção para isso, também corrigi algumas coisas menores, e com isso, terminei essa etapa do projeto e vim terminar de escrever esse texto no README.

Observações minhas sobre aspectos que eu gostaria de ter feito melhor no projeto:

- Primeiramente, como já citei acima, os testes, eu devia ter começado a fazer os testes automatizados anteriormente no desenvolvimento do projeto, e isso teria me ajudado bastante nas etapas futuras. Reconheço que isso seria ótimo para o projeto.
- Outro ponto, é que apesar de eu ter usado o typescript para escrever os códigos, em algumas situações em que eu poderia ter escrito uma interface, ao invés disso, acabei usando "any", o que não é algo que gosto de fazer, mas pela questão do tempo curto, acabei usando disso.
- Também gostaria de criar mais funções de asyncStorage, de forma com que a busca no asyncStorage fosse mais simples no meio do código, pois como foi escrito, em todas as instâncias do asyncStorage, eu precisava pegar ele, e depois tornar em JSON, e depois trabalhar com ele, sendo que se eu tivesse feito um código para simplificar isso, eu poderia chamar ele, e ele já me retornar o arquivo em JSON. É uma coisa boba, mas que senti falta em alguns momentos durante o código, e se eu fosse reescrever esse projeto, essa seria uma mudança que eu faria.

Bom, é isso, se tiverem qualquer dúvidas a respeito do desenvolvimento, sintam-se livres em me contatar no meu email. Obrigado pela atenção, e bom dia.

# Veja o Desafio Original!

# Mobile Challenge 🏅 2023 - Dictionary

## Introdução

Este é um desafio para que possamos ver as suas habilidades como Mobile Developer.

Nesse desafio você deverá desenvolver um aplicativo para listar palavras em inglês, utilizando como base a API [Free Dictionary API](https://dictionaryapi.dev/). O projeto a ser desenvolvido por você tem como objetivo exibir termos em inglês e gerenciar as palavras visualizadas, conforme indicado nos casos de uso que estão logo abaixo.

[SPOILER] As instruções de entrega e apresentação do challenge estão no final deste Readme (=

### Antes de começar

- Prepare o projeto para ser disponibilizado no Github, copiando o conteúdo deste repositório para o seu (ou utilize o fork do projeto e aponte para o Github). Confirme que a visibilidade do projeto é pública (não esqueça de colocar no readme a referência a este challenge);
- O projeto deve utilizar a Linguagem específica na sua Vaga (caso esteja se candidatando). Por exempo: Python, R, Scala e entre outras;
- Considere como deadline 5 dias a partir do início do desafio. Caso tenha sido convidado a realizar o teste e não seja possível concluir dentro deste período, avise a pessoa que o convidou para receber instruções sobre o que fazer.
- Documentar todo o processo de investigação para o desenvolvimento da atividade (README.md no seu repositório); os resultados destas tarefas são tão importantes do que o seu processo de pensamento e decisões à medida que as completa, por isso tente documentar e apresentar os seus hipóteses e decisões na medida do possível.

### Instruções iniciais obrigatórias

- Utilize as seguintes tecnologias:

#### Tecnologias (Mobile):

- Nativo ou Hibrido (Flutter, Ionic, React Native, etc)
- Estilização (Material, Semantic, etc). Ou escrever o seu próprio sob medida 👌
- Gestão de dados (Redux, Context API, IndexedDB, SQLite, etc)

Atente-se, ao desenvolver a aplicação mobile, para conceitos de usabilidade e adeque a interface com elementos visuais para os usuários do seu sistema.

#### Tecnologias (Back-End):

- Firebase, Supabase, etc

#### Organização:

- Aplicação de padrões Clean Code
- Validação de chamadas assíncronas para evitar travamentos

### Modelo de Dados:

Conforme indicado na documentação da API, a API retorna as informações de uma palavra, tais como etimologia, sinônimos, exemplos de uso, etc. Utilize os campos indicados na documentação dos endpoints para obter os dados necessários.

### Front-End:

Nessa etapa você deverá desenvolver uma aplicação móvel nativa ou hibrida para consumir a API do desafio.

**Obrigatório 1** - Você deverá atender aos seguintes casos de uso:

- Como usuário, devo ser capaz de visualizar uma lista de palavras com rolagem infinita
- Como usuário, devo ser capaz de visualizar uma palavra, significados e a fonética
- Como usuário, devo ser capaz de salvar a palavra como favorito
- Como usuário, devo ser capaz de remover a palavra como favorito
- Como usuário, devo ser capaz de visitar uma lista com as palavras que já vi anteriormente

A API não possui endpoint com a lista de palavras. Essa lista pode ser carregada em memória ou ser salva em banco de dados local ou remoto (por exemplo, com Firebase). Será necessário usar o [arquivo existente dentro do projeto no Github](https://github.com/dwyl/english-words/blob/master/words_dictionary.json).

**Obrigatório 2** - Salvar em cache o resultado das requisições, para agilizar a resposta em caso de buscas com parâmetros repetidos.

**Obrigatório 3** - Seguir o wireframe para a página de listagem dos dados. Pode-se alterar a posição dos itens, mantendo as funcionalidades solicitadas.

<img src="./img/wireframe.png" width="100%" />

**Diferencial 1** - Implementar um tocador de audio utilizando, por exemplo, https://responsivevoice.org/api ou recursos nativos;

**Diferencial 2** - Utilizar alguma ferramenta de Injeção de Dependência;

**Diferencial 3** - Escrever Unit Tests ou E2E Test. Escolher a melhor abordagem e biblioteca;

**Diferencial 4** - Implementar login com usuário e senha e associar os favoritos e histórico ao ID do usuário, salvando essa informação em banco de dados local ou remoto

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh:

> This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

Avisar sobre a finalização e enviar para correção.

1. Confira se você respondeu o Scorecard anexado na Vaga que se candidatou;
2. Confira se você respondeu o Mapeamento anexado na Vaga que se candidatou;
3. Acesse [https://coodesh.com/challenges/review](https://coodesh.com/challenges/review);
4. Adicione o repositório com a sua solução;
5. Grave um vídeo, utilizando o botão na tela de solicitar revisão da Coodesh, com no máximo 5 minutos, com a apresentação do seu projeto. Utilize o tempo para:

- Explicar o objetivo do desafio
- Quais tecnologias foram utilizadas
- Mostrar a aplicação em funcionamento
- Foque em pontos obrigatórios e diferenciais quando for apresentar.

6. Adicione o link da apresentação do seu projeto no README.md.
7. Verifique se o Readme está bom e faça o commit final em seu repositório;
8. Confira a vaga desejada;
9. Envie e aguarde as instruções para seguir no processo. Sucesso e boa sorte. =)

## Suporte

Use a [nossa comunidade](https://discord.gg/rdXbEvjsWu) para tirar dúvidas sobre o processo ou envie uma mensagem diretamente a um especialista no chat da plataforma.
