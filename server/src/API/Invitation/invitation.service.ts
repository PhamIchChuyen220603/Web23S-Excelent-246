import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invitation, InvitationDocument } from 'src/schema/invitation.schema';
import { FileService } from '../file/file.service';

@Injectable()
export class InvitationService {

    constructor(@InjectModel(Invitation.name) private invitationModel: Model<InvitationDocument>,  private fileService: FileService,) { }


    async send(invitation: Invitation, idReciever: string) {
        // if(invitation.to == idReciever) {
        //     return{
        //         message: 'The user is already a member of the file',
        //     }
        // }
        let createdInvitation = new this.invitationModel(invitation);
        await createdInvitation.save();
    }

    async getInvitations(id: string) {
        return await this.invitationModel.find({to: id, status: 'pending'});
    }


    async acceptInvitation(idFile: string, idReciever: string, idInvitation: string) {
        let isAdded = false;
        let file = await this.fileService.getById(idFile);
        if(!file.members.includes(idReciever)) {
            file.members.push(idReciever);
            isAdded = true;
        }
        await this.fileService.update(idFile,file);
        if(isAdded == true){
            return await this.invitationModel.findOneAndDelete({id: idInvitation});
        }
    }

    async rejectInvitation(idInvitation: string) {
        await this.invitationModel.findOneAndDelete({id: idInvitation})
    }



}



