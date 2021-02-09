import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ListaFotoComponent } from './fotos/lista-foto/lista-foto.component';
import { ListaUsuarioComponent } from './usuarios/lista-usuario/lista-usuario.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'usuarios', component: ListaUsuarioComponent },
    { path: 'fotos', component: ListaFotoComponent }
];