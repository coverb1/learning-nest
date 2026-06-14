import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class ArtistJwtGuard extends AuthGuard('jwt') {

  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException('Unauthorized access');
    }

  console.log(user)
  if (user.ArtistId) {
    return user
  }
throw err || new UnauthorizedException()
  }
}
// This file checks if a user is logged in using JWT before allowing access to a route.