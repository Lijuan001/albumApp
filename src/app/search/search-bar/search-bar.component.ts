import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/shared/service/album.service';
import { Album } from 'src/app/shared/model/album';
import { Search } from 'src/app/shared/model/Search';
import { map, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  search:Search=new Search("");
  albumList:Album[]=[];
  typeAheadSearchList=[];
  debouncer = new Subject();
  gotResult = false;

  constructor(private albumsService:AlbumService) { }

  ngOnInit() {
    this.debouncer.pipe(debounceTime(1000))//tay
    .subscribe(val=>{
      this.albumsService.getAlbums(val).subscribe(data=>{
        //console.log("data is: "+data);
      this.typeAheadSearchList = data.length>=10 ? data.slice(0,10) : data.slice(0,data.length);
      
        //console.log("testing: "+this.typeAheadSearchList);
      });
    });
  }

   //fetch albums info from api
   getAlbums(){
    //console.log("get albums");
    this.albumsService.getAlbums(this.search.searchField).subscribe(data=>{
      this.albumList = data;
      //console.log("album list: "+data);
    }); 
    this.gotResult = true;
     console.log("got result: "+this.gotResult);
  }

  //type ahead handler
  typeAheadHandler(event){
    //console.log("keyup event target value: "+event.target.value);
    let searchContent = event.target.value;
    this.debouncer.next(searchContent);
  }

  //process previous button
 /* previousHandler(event){
    this.albumsService.getAlbums(this.search.searchField)
    .pipe(map(data =>data.slice(0,10)))
    .subscribe(data=>this.albumList = data);
  }

  //process next button
  nextHandler(event){
    this.albumsService.getAlbums(this.search.searchField)
    .pipe(map(data =>data.slice(0,10)))
    .subscribe(data=>this.albumList = data);
  } */

  
}
