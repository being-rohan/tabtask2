import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  selectedskillset: string = "javascript"
  constructor() { }

  ngOnInit(): void {
  }
  skillset(skill:string){
    console.log(skill);
    
    this.selectedskillset=skill

  }

}
