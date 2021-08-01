import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './ticket/ticket.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'card', component: HomeComponent},
  { path: 'ticket', component: TicketComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
