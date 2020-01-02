import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { SearchBarInfiniteDisplayComponent } from './search-bar-infinite-display/search-bar-infinite-display.component';


const routes: Routes = [
  {path:'',component:SearchBarComponent},
  {path:'infinate',component:SearchBarInfiniteDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
