import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

export const cantActiveGuarPublic: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return isNotAuthenticated();
};

export const canMatchGuardPublic: CanMatchFn = (
  //Tipado CanMatchFN
  route: Route,
  segments: UrlSegment[]
) => {
  // console.log('CanMatch');
  // console.log({ route, segments });

  return isNotAuthenticated();
};

const isNotAuthenticated = (): Observable<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication().pipe(
    map((isAuth) => !isAuth),
    tap((isNotAuth) => {
      if (!isNotAuth) {
        router.navigateByUrl('/');
      }
    })
  );
};
