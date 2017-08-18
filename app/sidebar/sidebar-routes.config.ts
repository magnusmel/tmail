import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
	{ path: 'campaigns', title: 'Campaigns',  icon:'library_books', class: '' },
	{ path: 'lists', title: 'Lists', icon: 'content_paste', class: '' },
	{ path: 'contacts', title: 'Contacts', icon: 'person', class: '' },
    { path: 'stats', title: 'Statistics',  icon:'timeline', class: '' },
    { path: 'maps', title: 'Settings',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
	{ path: 'login', title: 'Login', icon: 'login', class: '' },
];
