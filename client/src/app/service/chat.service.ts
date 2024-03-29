import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ChatModel } from '../model/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  participators: Array<any> = [];
  constructor(private socket:Socket) { }

  getMessageByRoomId(roomId: string){
    const channel = 'message-' + roomId;
    return this.socket.fromEvent(channel);
  }
  sendMessageByRoom(data: ChatModel){
    this.socket.emit('message',data);
  }
}
