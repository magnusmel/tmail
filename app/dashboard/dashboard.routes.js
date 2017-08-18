"use strict";
var home_component_1 = require('./home/home.component');
var lists_component_1 = require('./lists/lists.component');
var stats_component_1 = require('./stats/stats.component');
var campaigns_component_1 = require('./campaigns/campaigns.component');
var notifications_component_1 = require('./notifications/notifications.component');
var login_component_1 = require('./login/login.component');
var contacts_component_1 = require('./contacts/contacts.component');
var maps_component_1 = require('./maps/maps.component');
var upgrade_component_1 = require('./upgrade/upgrade.component');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'lists', component: lists_component_1.ListsComponent },
    { path: 'campaigns', component: campaigns_component_1.CampaignsComponent },
    { path: 'stats', component: stats_component_1.StatsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'upgrade', component: upgrade_component_1.UpgradeComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    lists_component_1.ListsComponent,
    campaigns_component_1.CampaignsComponent,
    stats_component_1.StatsComponent,
    notifications_component_1.NotificationsComponent,
    login_component_1.LoginComponent,
    contacts_component_1.ContactsComponent,
    maps_component_1.MapsComponent,
    upgrade_component_1.UpgradeComponent
];
//# sourceMappingURL=dashboard.routes.js.map