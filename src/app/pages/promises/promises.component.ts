import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers()
     .then(usuarios => console.log(usuarios));
    
  }
  
  public getUsers() {
    const promise = new Promise( resolve => {
      fetch('https://reqres.in/api/users?page=2')
      .then( resp => resp.json())
      .then( body => console.log(body.data));
    })
    return promise;
  }
}
