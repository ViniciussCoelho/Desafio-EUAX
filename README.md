![OrganizaDev](https://user-images.githubusercontent.com/71980503/127048559-e22e5ae2-afe4-45da-b763-b1665dd76c73.png)

## Descrição:

Site desenvolvido para o [Desafio Web Developer](https://github.com/Artia/desafios-desevolvimento/blob/master/desafio-fullstack.md) do [Grupo EUAX](https://grupoeuax.com.br/carreira/). O site é um organizador de projetos e ativades, desenvolvido a fim de facilitar a admnistração desses projetos.

## Acesso em:

https://viniciusscoelho.github.io/Desafio-EUAX/

## Tecnologias utilizadas:

* HTML5
* CSS3
* JavaScript

## Funcionalidades:

* Adição de projetos e atividades
* Editar projetos e atividades
* Deletar projetos e atividades
* Acompanhamento do progresso dos projetos
* Verifica se o projeto está atrasado.

## Como funciona?:

O site possui um formulário para a adição dos projetos, e outro para a adição das atividades. Além disso, existem duas tabelas (uma para os projetos, e outra para as atividades) onde as informações do formulário vão ser colocadas em uma linha da tabela respectiva. Ao inserir linhas nas tabelas o usuário tem a opção de deletá-las ou editá-las.

O responsável por passar as informações do formulário para a tabela são funções feitas em Javascript, as funcionalidades de edição, remoção, % Completo, e verificar se há atraso também são feitas em JavaScript.

## Como utilizar:

* Adicionando dados na tabela: para adicionar um projeto ou atividade, basta preencher o formulário e clicar em cadastrar.
* Deletando uma linha: para deletar uma linha basta clicar no botão "Deletar" ao lado da linha que deseja apagar.
* Editando uma linha: para editar uma linha basta clicar no botão "Editar" ao lado da linha que deseja alterar, e preencher o respectivo formulário com as novas informações. Após isso, basta clicar no botão cadastrar, e pronto!

## O que poderia ser melhorado:

* Por falta de experiência em back-end, optei por fazer só o front-end. Ou seja, ao reiniciar ou fechar a página, as informações não são salvas.
* As funções de deletar e editar não estão funcionando perfeitamente e possuem alguns bugs, como a % Completo e o atraso, que continuam os mesmos ao editar. Além disso, ao deletar uma linha, caso ela não seja a última, o próximo ID vai ficar repetido. Resolvi deixar as funções de deletar e edição pois não eram obrigatórias na proposta do desafio, mas não consegui consertar após muitas tentativas.
* Seria interessante ter uma validação onde só é possível adicionar uma atividade se o projeto existe.
* Uma outra funcionalidade interessante a ser adicionada seria uma relação de dependência entre os projetos e atividades. Por exemplo, se deletar um projeto as atividades relacionadas a ele também são deletadas.

## Conclusão:

Enfrentei algumas dificuldades, mas consegui completar o desafio proposto. Creio que apesar dos problemas citados no tópico acima, concluí a proposta e aprendi bastante ao longo do desenvolvimento.


