import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../shared/service/album.service';
import { Album } from '../shared/model/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  @Input() albumList:Album[]=[];
  @Input() artistName;
  @Input() gotResult:boolean;

  constructor(private albumService:AlbumService) { }

  ngOnInit() {
    /* console.log("this.albumLIst in ngOnInit: "+this.albumList);
    if(this.albumList){this.gotResult = true;} */
  }

 

 
  

}
