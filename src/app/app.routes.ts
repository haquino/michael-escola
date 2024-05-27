import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserComponent } from './pages/user/user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './pages/table/table.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard',      component: DashboardComponent },
      { path: 'user',           component: UserComponent },
      { path: 'table',          component: TableComponent },
      { path: 'typography',     component: TypographyComponent },
      { path: 'icons',          component: IconsComponent },
      { path: 'maps',           component: MapsComponent },
      { path: 'notifications',  component: NotificationsComponent },
      { path: 'upgrade',        component: UpgradeComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]