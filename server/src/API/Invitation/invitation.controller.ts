import { InvitationService } from './invitation.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Invitation } from 'src/schema/invitation.schema';
// import { FileModel } from 'src/Models/file.model';
import { FileService } from '../file/file.service';

@Controller('invitation')
export class InvitationController {

    constructor(private invitationService: InvitationService, private fileService: FileService) {}


    @Post('send')
    send(@Body() invitation: Invitation) {
        this.invitationService.send(invitation);
    }

    @Get('get/:id')
    getInvitations(@Param('id') idReciever: string){
        return this.invitationService.getInvitations(idReciever);
    }

    @Put('accept/:idUser/:idFile/:idInvitation')
    acceptInvitation(@Param('idUser') idUser: string, @Param('idFile') idFile: string, @Param('idInvitation') idInvitation: string) {
       return this.invitationService.acceptInvitation(idUser, idFile, idInvitation);
    }

    @Delete('reject/:idInvitation')
    rejectInvitation(@Param('idInvitation') idInvitation: string) {
        return this.invitationService.rejectInvitation(idInvitation);
    }

}
