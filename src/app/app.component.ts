import { Component, OnInit } from '@angular/core';
import { personajesModel } from './personajes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  nextPage: string = "";
  lastPage: string = "";
  currentApiURL: string = "";
  generalData : personajesModel.RootObject;
  processing: boolean;
  title = 'Rick y Morty';

ngOnInit() {
  this.generalData = <personajesModel.RootObject>{};
  this.processing = false;
}

  next() {
    this.currentApiURL = this.generalData.info.next;
    this.fetchPersonajes();

}

back() {
  this.currentApiURL = this.generalData.info.prev;
    this.fetchPersonajes();
}

  search(){
    this.currentApiURL="https://rickandmortyapi.com/api/character";
    this.fetchPersonajes();
  }

  fetchPersonajes(){
    window.scroll(0,0);
    this.processing=true;
    fetch(this.currentApiURL)
    .then(res => res.json())
    .then((data: personajesModel.RootObject) =>{
      this.generalData=data;
      this.processing=false;
    })
  }

}
