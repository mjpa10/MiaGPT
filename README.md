# Alunos Involvidos

- Lidyce Amanda- 01550458
- Larissa Andrade -01564988
- Thiago Paulo - 01529069
- Matheus José - 01521951
- Joao Valadares - 01499788

# MiaGPT

Build simples da Mia usando a API do ChatGPT. Esse site consiste de 4 telas: "Quem Somos", "Nossos serviços", "Contatos" e "I.A".

## Começando:

Pra conseguir fazer uso do chat, você deve:

1. Gerar uma API KEY da OpenAI em: [OpenAI API key](https://platform.openai.com/account/api-keys)
2. Criar na pasta "src" um arquivo .json chamado "config"
3. Em config, copiar as seguintes linhas de código:
```bash
{
    "gptApiKey": "SuaKey", 
    "gptUrl": "https://api.openai.com/v1/chat/completions"
} 
```
Copie sua API KEY entre as aspas de "SuaKey"

1. Instale as dependências
```bash
npm install
```
2. Rode e converse com a Mia na página "I.A".
```bash
ng serve
```
