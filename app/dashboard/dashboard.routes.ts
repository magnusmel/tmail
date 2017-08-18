import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { StatsComponent } from './stats/stats.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MapsComponent } from './maps/maps.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'lists', component: ListsComponent },
    { path: 'campaigns', component: CampaignsComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    ListsComponent,
    CampaignsComponent,
    StatsComponent,
    NotificationsComponent,
    ContactsComponent,
    MapsComponent,
    UpgradeComponent
]
