# AgendaSaude.api

### Para rodar adequadamente este projeto vc deve configurar:

* Variáveis de ambiente -> O banco utilizado é o mongoDB.
* ESLint -> O arquivo de configuração já está no repositório, no entanto é necessário instalar a extensão ESLint da microsoft e adicionar o seguinte código ao arquivo JSON de configuração do seu VSCode (Ctrl + Shift + P: User settings (JSON)):
  "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.addMissingImports": true
    },
  Essa configuração faz com que seu código seja corrigido automaticamente pelo ESLint ao salvá-lo.
* Instale todas as dependências com npm i;