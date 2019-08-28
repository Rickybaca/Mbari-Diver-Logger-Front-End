import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllDivers(){
    return this.http.get('http://localhost:8080/diver/getAll')
  }

  addDiver(diver: object){
    return this.http.post<string>('http://localhost:8080/diver/add' , diver)//+ '/' + diver
  }

  getDiverById(id){
    return this.http.get('http://localhost:8080/diver/get/'+id)
  }

  addLog(log: object){
    return this.http.post('http://localhost:8080/log/add', log)
  }

  getAllLogs(){
    return this.http.get('http://localhost:8080/log/getAll')
  }

  getLogById(id){
    return this.http.get('http://localhost:8080/log/get/'+id)
  }

  authenticateUser(uName, pw){
    return this.http.get('http://localhost:8080/user/authenticate/'+uName +'/'+pw, {responseType: 'text'});
  }

  addUser(user: object){
    return this.http.get('http://localhost:8080/user/add' + '/' + user, user)
  }

  getAllUsers(){
    return this.http.get('http://localhost:8080/user/getAll')
  }

  getUserById(){
    return this.http.get('http://localhost:8080/user/get/{id}')
  }
}
