import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()

export class jwGuard extends AuthGuard('jwt'){}

// JwtGuard checks token