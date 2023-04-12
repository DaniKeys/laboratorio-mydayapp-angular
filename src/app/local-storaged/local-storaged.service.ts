import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoragedService {

  public static readonly INPUT_TODOS : string = "mydayapp-angular";


  constructor() { }

  public setItem(key : string, value : any) : void{
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key : string) : any{
    return (localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key) as string) : null);
  }

  public hasItem(key : string) : boolean{
    return (localStorage.getItem(key) !== null ? true : false);
  }

  public removeItem(key : string){
    localStorage.removeItem(key);
  }

  public clear() : void{
    localStorage.clear();
  }
}
