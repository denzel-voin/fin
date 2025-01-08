import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import type { IUser } from '../types/types';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
	constructor(private userService: UserService, private jwtService: JwtService) {
	}
	
	async validateUser(email: string, password: string): Promise<any> {
		const user = await this.userService.findOne(email);
		const passIsMatch = await argon2.verify(user.password, password);
		if (user && passIsMatch) {
			return user;
		}
		throw new BadRequestException('Пароль некорректный');
	}
	
	async login(user: IUser) {
		const {id, email} = user;
		return {
			id, email, token: this.jwtService.sign({id, email})
		}
	}
}
