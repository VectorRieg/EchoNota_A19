import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// ✅ Certifique-se de que no arquivo app.routes.ts você exporta corretamente
// Exemplo:
// export const appRoutes: Routes = [
//   { path: '', component: LoginComponent }
// ];

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideClientHydration(withEventReplay()),
  ],
};
