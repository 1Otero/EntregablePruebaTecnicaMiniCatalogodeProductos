import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [{
 path: '',
 pathMatch: 'full',
 redirectTo: '/product/catalogo'
},{
 path: 'product',
 loadChildren: () => import('../components/components.module').then(c => c.ComponentsModule)
}];
