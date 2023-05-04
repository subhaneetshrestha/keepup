import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent, RegisterComponent } from './pages';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
