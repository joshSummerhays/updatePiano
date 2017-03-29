import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopContentComponent } from './top-content/top-content.component';
import { BottomContentComponent } from './bottom-content/bottom-content.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleContentComponent } from './middle-content/middle-content.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routes';
import { WaitlistComponent } from './waitlist/waitlist.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopContentComponent,
    BottomContentComponent,
    FooterComponent,
    MiddleContentComponent,
    AboutComponent,
    WaitlistComponent,
    PaymentComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

