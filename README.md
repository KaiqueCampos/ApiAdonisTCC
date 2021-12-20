<p align="center">
  <img 
src="https://user-images.githubusercontent.com/70600553/146774102-d84dbc51-7c3c-46af-af70-5f8e2ca21a22.png"
width=250
/>
</p>

<h1 align='center'>Adonis API - Saúde em Mãos</h1>
<br>

# 📕 Sobre o Projeto 

#### Esse projeto foi criado para o TCC da Etec de Taboão da Serra no curso de Análise e Desenvolvimento de Sistemas Integrado ao Ensino Médio.
#### O aplicativo Saúde em Mãos foi feito para auxíliar as pessoas que cuidam de idosos e os próprios idosos no gerenciamento de medicamentos, consultas, primeiros-socorros, números de emergência e hospitais/clíncias próximas. Tem-se como funcionalidades:  
 - Notificar os medicamentos a serem tomados no dia;
 - Mostrar um painel semanal dos medicamentos que precisam ser tomados;
 - Cadastrar um medicamento em datas específicas ou em dias únicos;
 - Mostrar um tutorial (vídeo ou texto) rápido e prático de primeiro-socorros em acidentes que mais ocorrem com idosos;
 - Ligar para a emergência (polícia, bombeiro ou ambulância) com menos de dois cliques;
 - Lembrete de consultas em hospitais ou clínicas com informações de horário, data, nome, especialidade e número de contato;
 - Marcar consultas como concluidas ou não concluidas;
 - Tutoriais para o uso da plataforma dentro da aplicação.

# 💻 Tecnologias usadas
 - AdonisJs
 - MySql 
 
# 💻 Como Instalar?
```
# Instale o AdonisJS
$ npm i --global @adonisjs/cli

# Clone o backend
$ git clone https://github.com/KaiqueCampos/ApiAdonisTCC.git

# Instale as dependencias
$ yarn install
# ou
$ npm install

# Certifique-se de configurar o .ENV da mesma maneira do .ENV.example
# É preciso do MySql instalado e de um banco de dados criado (as informações desse banco de dados precisam estar no .ENV)

# Criar as tabelas dentro do banco de dados
$ adonis migration:run

# Rodar o servidor
$ adonis serve --dev
```
