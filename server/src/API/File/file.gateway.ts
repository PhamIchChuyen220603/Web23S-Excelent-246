// import { Sse } from '@nestjs/common';
// import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
// import { Observable } from 'rxjs';
// import { Server } from 'socket.io';
// import { FileService } from 'src/API/file/file.service';



// @WebSocketGateway({ cors: true })
// export class FileGateway{
//   @WebSocketServer() server: Server;
  
//   constructor(protected fileService: FileService) {}

//   handleConnection(client:any, ...arg: any[]){
//     console.log(`Client ${client.id} connected}`)
//   }

//   handleDisconnect(client:any){
//     console.log(`Client ${client.id} disconnected}`)
//   }


//   @SubscribeMessage('message')
//   handleMessage(client: any, payload: any): string {
//     // this.fileService.update(payload.fileId, payload);
//     console.log('message', payload);
//     this.server.emit('message-' + payload.fileId, payload);
//     return 'Hello world!';
//   }
// }