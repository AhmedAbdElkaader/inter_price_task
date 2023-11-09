import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const auth_service = inject(AuthService);
  const router = inject(Router);
  if(auth_service.getToken()){
    router.navigateByUrl('/pages/users')
    return false
  }else {
    return true;

  }
};
