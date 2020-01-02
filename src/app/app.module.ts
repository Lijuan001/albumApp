import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { AlbumsComponent } from './albums/albums.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AlbumsInfinateComponent } from './albums-infinate/albums-infinate.component';
import { SearchBarInfiniteDisplayComponent } from './search-bar-infinite-display/search-bar-infinite-display.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AlbumsComponent,
    AlbumsInfinateComponent,
    SearchBarInfiniteDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    InfiniteScrollModule,
   // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
