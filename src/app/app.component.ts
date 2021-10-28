import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csbs';
  name = "nihal";
  getclick(name )
  {
    alert(name);
  }
  getevent(evt){
    console.log(evt);
  }
  disable = true;
  enableBox(){
    this.disable = this.disable==false?true:false;
  }
}
