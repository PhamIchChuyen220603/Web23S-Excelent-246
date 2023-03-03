import { InvitationService } from './invitation.service';
import { Body, Controller, Post } from '@nestjs/common';
import { Invitation } from 'src/schema/invitation.schema';

@Controller('invitation')
export class InvitationController {

    constructor(private invitationService: InvitationService) {}


    @Post('send')
    send(@Body() invitation: Invitation) {
        this.invitationService.send(invitation);
    }
}
