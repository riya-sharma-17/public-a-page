import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  sidebarTitle:string="Services";
  navigationArray = [
    {'menulink': '#decoration' , 'menuname':'Online Courses','menuicon':'fa fa-home'},
    {'menulink': '#Photo/Vedio' , 'menuname':'Yoga','menuicon':'fa fa-home'},
    {'menulink': '#Catering' , 'menuname':'Talks','menuicon':'fa fa-home'},
    {'menulink': '#MusicDJ' , 'menuname':'Games','menuicon':'fa fa-home'},
    {'menulink': '#Makeup' , 'menuname':'Dance','menuicon':'fa fa-home'}
  ]






  

  mainpartTitle:string="Popular Events";
  imagesArray=[
    {'imageURL': 'assets/images/cake.jpg' , 'cardname':'Birthday Party'},
    {'imageURL': 'assets/images/anniversary.jpg' , 'cardname':'Anniversary'},
    {'imageURL': 'assets/images/farewell.jpg' , 'cardname':'Farewell'},
    {'imageURL': 'assets/images/conference.jpg' , 'cardname':'Conference'}
  ]
  
 
  constructor() { }
  ngOnInit(): void {
  }

}
