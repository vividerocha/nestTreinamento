import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService{
  /*
  //Service is creating its own dependencies
  // DONT DO THIS ON REAL APPS
  messagesRepo: MessagesRepository;
  constructor(){  
    this.messagesRepo = new MessagesRepository();
  }
  */
  constructor(public messagesRepo: MessagesRepository){}

  async findOne(id: string){
    return this.messagesRepo.findOne(id);
  }

  async findAll(){
    return this.messagesRepo.findAll();
  }

  async create(content: string){
    return this.messagesRepo.create(content);
  }
}