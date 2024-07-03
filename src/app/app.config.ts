import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { ApplicationConfig } from '@angular/core';
import { httpErrorInterceptor } from './interceptors/http-error.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([httpErrorInterceptor]))],
};
