import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';

@NgModule({
  declarations: [LayoutComponent, LoginPageComponent, RegisterPageComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
