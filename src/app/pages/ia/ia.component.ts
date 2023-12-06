import { Component } from '@angular/core';
import config from '../../../config.json';
import axios from 'axios';

const MAX_RETRIES = 1;

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css']
})
export class IaComponent {

  questionAnswerList: { role: string, content: string }[] = [];
  questionText: string = '';
  isloading = false;
  errorText = '';

  constructor() {
    this.questionAnswerList = [];
    // Introdução como Mia.
    const introduction = "De agora em diante, você é Mia, uma assistente virtual que funciona exatamente como o Chatgpt.";
    this.questionAnswerList.push({ role: 'assistant', content: introduction });
  }

  async sendQuestion() {
    this.isloading = true;

    try {
      await this.questionToOpenAI(this.questionText);
      this.questionText = '';
    } catch (error: any) {
      console.error(error);
      this.errorText = error.message || error.error || 'Ocorreu um erro no solicitado!';
    } finally {
      this.isloading = false;
    }
  }

  async questionToOpenAI(question: string) {
    // Pergunta do usuário
    this.questionAnswerList.push({ role: 'user', content: question });

    let retries = 0;

    while (retries < MAX_RETRIES) {
      try {
        const response = await axios.post(config.gptUrl, {
          model: 'gpt-3.5-turbo',
          messages: this.questionAnswerList,
          temperature: 0.7,
          max_tokens: 600,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.gptApiKey}`
          }
        });

        const responseStr = response.data.choices[0].message.content;

        if (responseStr) {
          // Respostas da Mia
          this.questionAnswerList.push({ role: 'assistant', content: responseStr });
          console.log('Resposta da API:', response.data);
          return;
        }
      } catch (error: any) {
        if (error.response && error.response.status === 429) {
          // Se limite é alcançado, esperar e retentar
          const waitTime = Math.pow(2, retries) * 1000;
          await new Promise(resolve => setTimeout(resolve, waitTime));
          retries++;
        } else {
          // Outros erros
          throw error;
        }
      }
    }

    // Se limite maximo alcançado, exception
    throw new Error('Número máximo de retentativas atingido');
  }
}
