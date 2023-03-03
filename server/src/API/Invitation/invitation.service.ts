import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invitation, InvitationDocument } from 'src/schema/invitation.schema';
@Injectable()
export class InvitationService {

    constructor(@InjectModel(Invitation.name) private invitationModel: Model<InvitationDocument>) { }


    async send(invitation: Invitation) {
        let createdInvitation = new this.invitationModel(invitation);
        await createdInvitation.save();
    }


}



