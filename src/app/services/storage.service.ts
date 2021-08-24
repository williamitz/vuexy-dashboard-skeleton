import { Injectable } from '@angular/core';
import { dasTheme } from '../interfaces/dashTheme.interface';
import { IUserStorage } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public token = '';
  public currentPage = 'home';
  public dataUser: IUserStorage = {
    pkUser: 0,
    userName: '',
    fullName: '',
    email: '',
    phone: '',
    role: '',
    dateBorn: '',
    verified: 0
  };

  public theme: dasTheme = dasTheme.LIGHT;

  constructor( ) { }

  onSaveCredentials( token: string, data: any ) {
    this.token = token;
    this.dataUser = data;
    localStorage.setItem('token', token);
    localStorage.setItem('dataUser', JSON.stringify( data ));
  }

  onGetItem( name: string, isJson = false ) {
    return isJson ? JSON.parse( localStorage.getItem(name) ) : localStorage.getItem(name);
  }

  onSetItem( name: string, data: any, isJson = false ) {
    localStorage.setItem(name, isJson ? JSON.stringify( data ) : data );
  }


  onLoadToken() {
    this.token = localStorage.getItem('token') || '';
  }

  onLoadCurrentPage() {
    this.currentPage = localStorage.getItem('currentPage') || 'home';
  }

  onSetTheme( theme: dasTheme ) {
    localStorage.setItem('theme', theme );
    this.theme = theme;
  }

  onLoadTheme() {
    let theme = localStorage.getItem('theme') || dasTheme.LIGHT;
    this.theme = theme == dasTheme.LIGHT ? dasTheme.LIGHT : dasTheme.DARK;
  }

  onLoadData() {

    const data = JSON.parse( localStorage.getItem('dataUser') ) ;
    // console.log('data user', data);
    if (data) {
      this.dataUser = {
        pkUser: data.pkUser,
        userName: data.userName,
        fullName: data.fullName,
        email: data.email,
        role: data.role,
        phone: data.phone,
        dateBorn: data.dateBorn,
        document: data.document,
        verified: data.verified || 0,
      };
    }
  }

  onClear() {
    localStorage.removeItem('dataUser');
    localStorage.removeItem('token');
    localStorage.removeItem('theme');
    // localStorage.removeItem('currentPage');
    
    // this.currentPage = '';
    this.token = '';
    this.dataUser = {
      pkUser: 0,
      userName: '',
      fullName: '',
      email: '',
      phone: '',
      role: '',
      dateBorn: '',
      verified: 0
    };
  }
}
