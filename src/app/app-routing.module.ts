import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Example1Component} from './example1/example1.component';
import {Example2Component} from './example2/example2.component';
import {Example3Component} from './example3/example3.component';
import {Example4Component} from './example4/example4.component';


const routes: Routes = [
  {path: 'first', component: Example1Component},
  {path: 'second', component: Example2Component},
  {path: 'third', component: Example3Component},
  {path: 'fourth', component: Example4Component},
  {path: '**', redirectTo: 'first', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
