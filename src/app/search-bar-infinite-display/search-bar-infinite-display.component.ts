import { Component, OnInit } from '@angular/core';
import { Search } from '../shared/model/Search';
import { Album } from '../shared/model/album';
import { AlbumService } from '../shared/service/album.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar-infinite-display',
  templateUrl: './search-bar-infinite-display.component.html',
  styleUrls: ['./search-bar-infinite-display.component.scss']
})
export class SearchBarInfiniteDisplayComponent implements OnInit {
  
  search:Search=new Search("");
  albumList:Album[]=[];
  typeAheadSearchList=[];
  debouncer = new Subject();
  gotResult = false;

  constructor(private albumsService:AlbumService) { }

  ngOnInit() {
    this.debouncer.pipe(debounceTime(1000))
    .subscribe(val=>{
      this.albumsService.getAlbums(val).subscribe(data=>{
        //console.log("data is: "+data);
      this.typeAheadSearchList = data.slice(0,10);
      
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
