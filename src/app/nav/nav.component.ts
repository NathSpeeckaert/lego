import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  links : Array<Link> = [
    {title : "Accueil", url:"/"},
    {title : "Sets", url:"/set", children:[] }
  ]

  

  constructor() { }

  ngOnInit(): void {
  }
  toggleChildren(indice : number) : void{
    this.links[indice].isVisible = !this.links[indice].isVisible;
  }

}
