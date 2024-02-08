import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/authentication/auth.service"; 


export const nonAuthGuardGuard: CanActivateFn =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
  //return inject(AuthService).isNotSignedIn();
};