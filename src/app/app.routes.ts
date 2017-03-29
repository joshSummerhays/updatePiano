import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WaitlistComponent } from './waitlist/waitlist.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';

const AppRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'waitlist', component: WaitlistComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(AppRoutes);