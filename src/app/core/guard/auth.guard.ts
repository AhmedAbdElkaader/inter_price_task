import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const auth_service = inject(AuthService);
  const router = inject(Router);
  if(auth_service.getToken()){
    return true
  }else {
    router.navigateByUrl('/login')
    return false;

  }
  
};
