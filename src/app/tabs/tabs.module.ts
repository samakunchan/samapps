import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { ProjectsModule } from '../pages/projects/projects.module';
import { ProductsModule } from '../pages/products/products.module';
import { SettingsModule } from '../pages/settings/settings.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    DashboardModule,
    ProjectsModule,
    ProductsModule,
    SettingsModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
