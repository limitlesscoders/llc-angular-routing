import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './custom-material.module';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserService } from './user/user.service';

@NgModule({
  imports:[ 
        BrowserModule,
        FormsModule,
      
        CustomMaterialModule,

        AppRoutingModule ],
  declarations: [
         AppComponent,
         UserListComponent,
         UserDetailComponent,
         HomeComponent
        ],
  providers:[UserService],      
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
