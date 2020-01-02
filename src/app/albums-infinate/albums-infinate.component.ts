import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../shared/model/album';
import { AlbumService } from '../shared/service/album.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-albums-infinate',
  templateUrl: './albums-infinate.component.html',
  styleUrls: ['./albums-infinate.component.scss']
})
export class AlbumsInfinateComponent implements OnInit {
  @Input() albumList:Album[]=[];
  @Input() artistName;
  @Input() gotResult:boolean;

  movies = new BehaviorSubject([]);
  batch = 2         // size of each query
  lastKey = ''      // key to offset next query from
  finished = false  // boolean when end of database is reached

  
  constructor(private albumService:AlbumService) { }

  ngOnInit() {
    this.getMovies();
  }

  onScroll(){
    console.log('scrolled!!')
    this.getMovies()
  }


  private getMovies(key?) {
    if (this.finished) return

    this.albumService
        .getLimitedAlbums(this.artistName,this.batch+1, 6, this.lastKey)
        .subscribe(data=>{
          
        });
        
       /*  .do(movies => {
          do(res =>{
            /// set the lastKey in preparation for next query
            this.lastKey = res.last(movies)['$key']
            const newMovies = res.slice(movies, 0, this.batch)
  
            /// Get current movies in BehaviorSubject
            const currentMovies = this.movies.getValue()
  
            /// If data is identical, stop making queries
            if (this.lastKey == _.last(newMovies)['$key']) {
              this.finished = true
            }
  
            /// Concatenate new movies to current movies
            this.movies.next( _.concat(currentMovies, newMovies) )
            })
         
        .take(1)
        .subscribe()
  } */
}

}
