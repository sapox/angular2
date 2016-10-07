import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import * as Backendless from 'backendless';

var APP_ID:string = '5850A545-2EA6-8D23-FF77-6FBD8FC23E00';
var APP_KEY:string = 'D2DCB06C-A805-6E5F-FF8B-6095B76D0300';
var APP_VER:string = 'v1';

Backendless.initApp(APP_ID, APP_KEY, APP_VER);

var user:Backendless.User = new Backendless.User();
user.email = 'michael@backendless.com';
user.password = "my_super_password";

try {
    Backendless.UserService.register(user);
} catch (error) {
    console.log(error);
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
