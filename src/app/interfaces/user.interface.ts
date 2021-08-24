export interface IUser {
  pkUser: number;
  // name: string;
  // surname: string;
  fullName: string;
  document: string;
  email: string;
  phone: string;
  fkDocument: number;
  // img: string;

  role: string;
  userName: string;
  dateBorn: string;

  prefix: string;

  statusRegister: boolean;

}

export interface IUserStorage {
  pkUser: number;
  userName: string;
  fullName: string;
  email: string;
  phone: string;
  // img: string;
  role: string;
  dateBorn: string;
  document?: string;
  verified: number;
}

export interface IProfileUser {
  userName: string;
  fullName: string;
  email: string;
  phone: string;
  // img: string;
  codeReferal: string;
  role: string;
  dateBorn: string;
  document?: string;
  urlInsignia?: string;
  chips: number;
  plays: number;
}
