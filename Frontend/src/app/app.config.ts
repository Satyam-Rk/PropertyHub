import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { HousingService } from './services/housing.service';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    HousingService,
    UserService,
    AlertifyService,
    AuthService,
    BrowserAnimationsModule,
    BsDropdownModule,
    provideAnimations()
  ]
};
