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
  show = true;
  ss="yes";
  disable = true;
  enableBox(){
    this.disable = this.disable==false?true:false;
    this.show = this.show==true?false:true;
  }
  color = 'green';

  items = ['nihal','shivam','aniket','amit','prakhar']
  data = [{
    name:'nihal',
    age:20
  },
  {
    name:'sanjana',
    age:21
  }
]
}
