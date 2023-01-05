import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../Service/marvel-api.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service:MarvelApiService) { }

  allCharacters:any=[];
  ngOnInit(): void {
    this.service.allCharacters().subscribe((result)=>{
      console.log(result);
      this.allCharacters = result.data.results;
    })


  }



}
