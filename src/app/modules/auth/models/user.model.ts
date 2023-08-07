import { AuthModel } from './auth.model';
import { AddressModel } from './address.model';
import { SocialNetworksModel } from './social-networks.model';

export class UserModel extends AuthModel {
  _id: string;
  name: string;
  password: string;
  email: string;
  pic: string;
  role: string;
  roles: number[] = [];
  firstName: string;
  middleName: string;
  lastName: string;
  userName: string;
  phoneNumber: string;

  address: string;
  city: string;
  county:string;
  pincode: string;
  documentType: string;
  documentNumber: string;
  documentFront: string;
  documentBack: string;
  skill: string;
  store: string;
  remark1: string;
  remark2: string;
  employeePhoto: string;

  setUser(_user: unknown) {
    const user = _user as UserModel;
    this._id = user._id;
    this.name = user.name || '';
    this.password = user.password || '';
    this.email = user.email || '';
    this.pic = user.pic || './assets/media/users/default.jpg';
    this.roles = user.roles || [];
  }
}


export class UserModelResponse {
  code: number;
  data: UserModel;
  message: string;
}