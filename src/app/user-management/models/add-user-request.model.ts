export class AddUserRequestModel {
  name: string | undefined;
  mobileNumber: string | undefined;
  contacts: Array<any> = new Array<any>();
  password: string | undefined;
  email: string | undefined;
}
