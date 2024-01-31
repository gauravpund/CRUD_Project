import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public login=0;
  public register=0;

  public baseurl="https://crudbackend-production-b529.up.railway.app/";

  constructor() { }
}
