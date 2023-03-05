import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invitation, InvitationDocument } from 'src/schema/invitation.schema';
import { FileService } from '../file/file.service';

@Injectable()
export class InvitationService {

    constructor(@InjectModel(Invitation.name) private invitationModel: Model<InvitationDocument>,  private fileService: FileService,) { }


    async send(invitation: Invitation) {
        let createdInvitation = new this.invitationModel(invitation);
        await createdInvitation.save();
    }

    async getInvitations(id: string) {
        return await this.invitationModel.find({to: id, status: 'pending'});
    }


    async acceptInvitation(idReciever: string, idFile: string, idInvitation: string) {
        let file = await this.fileService.getById(idFile);
        file.members.push(idReciever);
        await this.fileService.update(idFile, {...file});
        await this.invitationModel.findOneAndDelete({id: idInvitation});
    }

    async rejectInvitation(idInvitation: string) {
        await this.invitationModel.findOneAndDelete({id: idInvitation})
    }



}



