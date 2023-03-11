import { Sse } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Server, Socket } from 'socket.io';
import { FileService } from 'src/API/file/file.service';
import { FileModel } from 'src/Models/file.model';



@WebSocketGateway({ cors: true })
export class FileGateway{
  @WebSocketServer() server: Server;
  
  constructor(private fileService: FileService) {}

  handleConnection(client:any, ...arg: any[]){
    console.log(`Client ${client.id} connected}`)
  }

  handleDisconnect(client:any){
    console.log(`Client ${client.id} disconnected}`)
  }


  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any) {
    console.log('message', payload);
    client.join('message-' + payload.fileId);
    client.broadcast.emit('message-' + payload.fileId, payload);
    
    return 'Hello world!';
  }


  // rooms:Array<{roomId:string,users:Array<{userInfo: AuthModel,socketId:string}>}>=[];
  // @WebSocketServer() server: Server;

  // handleDisconnect(client: Socket) {
  //   console.log('disconnect', client.id);
  //   let room = this.rooms.findIndex((room) => room.users.findIndex((user) => user.socketId === client.id) != -1);
  //   if(room !- -1){
  //     let user = this.rooms[room].users.findIndex((user) => user.socketId === client.id);
  //     if(user != -1){
  //       this.rooms[room].users.splice(user,1);
  //     }
  //     this.server.emit('leaveRoom', this.rooms[room]);
  //   }
  // }

  // handleConnection(client: Socket){
  //   console.log('connect', client.id);
  // }

  // @SubscribeMessage('joinRoom')
  // handleJoinRoom(client: Socket, payload: any) {
  //   console.log('join room', payload);
  //   client.join(payload.fileId);
  //   let room = this.rooms.findIndex((room) => room.roomId === payload.fileId);
  //   if(room == -1){
  //     // Thêm người dùng vô file
  //     this.rooms.push({roomId:payload.fileId, users:[{userInfo:payload.user, socketId:client.id}]});
  //   }
  //   else{
  //     this.rooms[room].users.push({userInfo:payload.user, socketId:client.id});
  //   }
  //   this.server.emit('joinRoom',this.rooms[this.rooms.findIndex((room)=>room.roomId===payload.fileId)]);
  // }

  // @SubscribeMessage('leaveRoom')
  // handleLeaveRoom(client: Socket,payload:any) {
  //   console.log('leave room',client.id)
  //   client.leave(payload.docId);
  //   let room = this.rooms.findIndex((room)=>room.roomId===payload.docId);
  //   if(room!=-1){
  //     let user = this.rooms[room].users.findIndex((user)=>user.userInfo.userId===payload.user.userId);
  //     if(user!=-1){
  //       this.rooms[room].users.splice(user,1);
  //     }
  //   }

  //   this.server.emit('leaveRoom',this.rooms[room]);
  // }

  // @SubscribeMessage('sendFileData')
  // handleUpdateFileData(client: Socket, payload: any){
  //   this.server.to(payload.fileId).emit('getSentFileData',payload.data);
  // }

  // @SubscribeMessage('sendNewFileData')
  // handleNewFileData(client: Socket, payload: any){
  //   this.server.to(payload.docId).emit('getSentDocumentData',payload.documentString);
  // }

  // @SubscribeMessage('saveFile')
  // handleSaveFile(client: Socket, payload: any){
  //   this.server.to(payload.fileId).emit('saveFileStatus',false);
  // }

  // @SubscribeMessage('saveFileComplete')
  // handleSaveFileComplete(client: Socket, payload: any){
  //   this.server.to(payload.fileId).emit('saveFileStatus',true);
  // }



}
