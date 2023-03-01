import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Auth, AuthDocument } from "src/schema/auth.schema";
import { AuthModel } from '../../Models/auth.model'

@Injectable({})
export class AuthService {
    constructor(@InjectModel(Auth.name) private authModel: Model<AuthDocument>) { }


    async signIn(user: AuthModel) {
        let createdUser = new this.authModel(user);
        await createdUser.save();
    }
    findUserById(id: string) {
        return this.authModel.findOne({ userId: id });
    }
    signUp() {
        console.log('sign up');
    }

}


