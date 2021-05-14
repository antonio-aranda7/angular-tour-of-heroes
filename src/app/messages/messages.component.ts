// 4 Agregar servicios / Crear MessagesComponent
// Resultado del Comando ng generate component messages
import { Component, OnInit } from '@angular/core';
// 4 / Mostrar el mensaje de HeroService
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(/*4/ Mostrar el mensaje de HeroService*/public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
