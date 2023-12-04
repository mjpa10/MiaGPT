import { Component } from '@angular/core';
import config from '../../../config.json';
import axios from 'axios';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css']
})
export class IaComponent {

    questionAnswerList: { role: string, content: string } [] = [];
    questionText: string = '';
    isloading = true;
    errorText = '';

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
      if (!this.questionAnswerList?.length){
        this.questionAnswerList = [];
      }

      this.questionAnswerList.push({ role: 'user', content: question });

      const response  = await axios.post(config.gptUrl, {
        model: 'gpt-3.5-turbo-instruct',
        messages: this.questionAnswerList,
        max_tokens: 600,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.gptApiKey}`
        }
      });

      const responseStr = response.data.choices[0].message.content;

      this.questionAnswerList.push({ role: 'assistant', content : responseStr });
    }


}


