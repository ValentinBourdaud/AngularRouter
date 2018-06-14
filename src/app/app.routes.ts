import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { PATH_HOME, PATH_DETAIL, PATH_DETAIL_ID, PATH_DETAIL_FORMATIONS, PATH_DETAIL_SKILLS } from './constantes';
import { FormationsComponent } from './formations/formations.component';
import { ConnaissancesComponent } from './connaissances/connaissances.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { FormationsResolvers } from './formations/FormationsResolvers';
import { TimeAccessGuard } from './guards/time-access.guard';


export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomeComponent },
    {
        path: PATH_DETAIL_ID, component: DetailComponent, canActivate : [TimeAccessGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: PATH_DETAIL_FORMATIONS },
            { path: PATH_DETAIL_FORMATIONS, component: FormationsComponent, resolve : {formations:FormationsResolvers} },
            { path: PATH_DETAIL_SKILLS, component: ConnaissancesComponent, canActivate : [LoggedInGuard] }
        ]
    },
];