import { Component } from '@angular/core';
import config from '../../../config.json';
import axios from 'axios';

let MAX_RETRIES = 3

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css']
})
export class IaComponent {

  questionAnswerList: { role: string, content: string }[] = []; //mostrando estrutura de perguntas e respostas, onde alguem pergunta(role) e a resposta(string)
  questionText: string = ''; //area de pergunta
  isloading = false; //carregando
  errorText = ''; // mensagem de erro

  constructor() {
    this.questionAnswerList = [];
    // Introdução como Mia.
    const introduction = `Eu sou a Mia, sua assistente virtual, como posso ajudar?`
    this.questionAnswerList.push({ role: 'assistant', content: introduction });
    //irá pegar essa "mensagem" do proprio chat e jogar no contexto, para fazer uma "lavagem cerebral" no chatgp achando que é a mia
  }

  async sendQuestion() {
    //ira carregar enquanto aguarda a resposta do gpt, se n conseguir, dá erro
    this.isloading = true;

    try {
      await this.questionToOpenAI(this.questionText); // esperando oq foi escrito no textarea ter sua resposta
      this.questionText = ''; // deixará em branco novamente o textarea
    } catch (error: any) {
      console.error(error);
      this.errorText = error.message || error.error || 'Ocorreu um erro no solicitado!'; // caso nao consiga resposta, irá dar erro!!
    } finally {
      this.isloading = false; // o carregando voltara a ser falso e sumira do dom
    }
  }

  async questionToOpenAI(question: string) {
    // Pergunta do usuário, onde user somos nos e content a pergunta no textarea
    this.questionAnswerList.push({ role: 'user', content: question });


    let retries = 0;

    while (retries < MAX_RETRIES) {
      // temos 3 tentavias de obter resposta, se não conseguir, dara erro de maximo de tentativas
      try {
        const response = await axios.post(config.gptUrl, { //aqui ele ira fazer a pergunta, um post, da pergunta na url do .config
          model: 'gpt-3.5-turbo', //modelo a ser usado
          messages: this.questionAnswerList, //mensagem será a que escrevemos no textarea
          temperature: 0.7,
          max_tokens: 600, //max de tokens pra resposta
        }, {
          headers: { // autorização com chave da api no .config
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.gptApiKey}`
          }
        });

        const responseStr = response.data.choices[0].message.content; //aqui recebos a resposta da ia

        if (responseStr) {
          // Respostas da Mia
          this.questionAnswerList.push({ role: 'assistant', content: responseStr });
          console.log('Resposta da API:', response.data);
          return;
          // resposta da ia, onde assistant é ela e content a resposta
        }
      } catch (error: any) { // se nao conseguir resposta em 3 tentativas
        if (error.response && error.response.status === 429) {  // se o codigo de erro for o 429= toomany request
          const waitTime = Math.pow(2, retries) * 1000;// Se limite é alcançado, esperar e retentar
          await new Promise(resolve => setTimeout(resolve, waitTime));
          retries++; //esperar muito...
        }
      }
    }

    // Se limite maximo alcançado, exception
    throw new Error('Número máximo de retentativas atingido');
  }

}