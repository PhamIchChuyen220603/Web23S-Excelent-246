import { InvitationService } from './invitation.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Invitation } from 'src/schema/invitation.schema';
// import { FileModel } from 'src/Models/file.model';
import { FileService } from '../file/file.service';

@Controller('invitation')
export class InvitationController {

    constructor(private invitationService: InvitationService, private fileService: FileService) {}


    @Post('send/:id')
    send(@Body() invitation: Invitation, @Param('id') idReciever: string) {
        return this.invitationService.send(invitation, idReciever);
    }

    @Get('get/:id')
    getInvitations(@Param('id') idReciever: string){
        return this.invitationService.getInvitations(idReciever);
    }

    @Delete('accept/:idFile/:idReciever/:idInvitation')
    acceptInvitation(@Param('idFile') idFile: string, @Param('idReciever') idReciever: string, @Param('idInvitation') idInvitation: string) {
       return this.invitationService.acceptInvitation(idFile, idReciever, idInvitation);
    }

    @Delete('reject/:idInvitation')
    rejectInvitation(@Param('idInvitation') idInvitation: string) {
        return this.invitationService.rejectInvitation(idInvitation);
    }

}
