import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { filter,debounceTime, map, toArray, take } from 'rxjs/operators';
import { Album } from '../model/album';

const albumApi = environment.albumApi;

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  //fetch album data from api 
  getAlbums(artist_name):Observable<any>{
     return this.httpClient.get(`${albumApi}/search?term=${artist_name}&media=music&entity=album&attribute=artistTerm&limit=300`)
          .pipe(
            map(res => {
              console.log(res);
              return (res as any).results}),
            
            
          )        
  } 

  //fetch limited number of albums from api
  getLimitedAlbums(artist_name,batch , dataLength,lastKey?){
    let query = {
      orderByKey:true,
      limitToFirst:batch
    }

    if (lastKey) query['startAt'] = lastKey;

    return this.httpClient
    .get(`${albumApi}/search?term=${artist_name}&media=music&entity=album&attribute=artistTerm&limit=300`)
    .pipe(
      map(res => {
        console.log(res);
        return (res as any).results}),
        map(res =>{
          res.slice(batch , dataLength)
        })
      /* map(data =>data.slice(batch,)) */
      
    ) 
  } 
  
}
