import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) { }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();


    try {
      const token = request.headers.authorization;
    if (!token || !token.startsWith('Bearer ')) {
     throw  new UnauthorizedException({message:"Não autorizado"});
    }


    const jwtToken = token.split(' ')[1];
    const decoded = this.jwtService.verify(jwtToken);
  
    request.user = decoded;
    return true;
    } catch (error) {
      throw new UnauthorizedException({ message: "Token inválido" });
    }
}
}