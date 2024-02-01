import { Component, OnInit } from '@angular/core';
import { Iskill } from '../interface/interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  skillset2:string="javascript";
  skillarray:Array<Iskill>=[
    {
      skillName:"javascript",
      content:` <strong>javascript
      </strong>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam consequatur suscipit autem et doloribus
      provident!
`

    },
    {
      skillName:"angular",
      content:` <strong>angular
      </strong>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam consequatur suscipit autem et doloribus
      provident!
`

    },
    {
      skillName:"html",
      content:` <strong>html
      </strong>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam consequatur suscipit autem et doloribus
      provident!
`

    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
  skillset23(skill:string){
    console.log(skill);
    
    this.skillset2=skill

  }


}
