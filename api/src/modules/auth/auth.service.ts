import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { SigninDto } from './dto/signin.dto';
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = await this.usersRepository.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid crendetials.');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid crendetials.');
    }

    const accessToken = await this.generateAccessToken(user.id);

    return { accessToken };
  }

  async signup(signupDto: SignupDto) {
    const { name, email, password } = signupDto;

    const emailTaken = await this.usersRepository.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This email is already in use');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.usersRepository.create({
      data: {
        name,
        email,
        password: hashedPassword,
        categories: {
          createMany: {
            data: [
              // Income
              { name: 'Salário', icons: 'salary', type: 'INCOME' },
              { name: 'Freelance', icons: 'freelance', type: 'INCOME' },
              { name: 'Outro', icons: 'other', type: 'INCOME' },
              // Expense
              { name: 'Casa', icons: 'home', type: 'EXPENSE' },
              { name: 'Alimentação', icons: 'food', type: 'EXPENSE' },
              { name: 'Educação', icons: 'education', type: 'EXPENSE' },
              { name: 'Lazer', icons: 'fun', type: 'EXPENSE' },
              { name: 'Mercado', icons: 'grocery', type: 'EXPENSE' },
              { name: 'Roupas', icons: 'clothes', type: 'EXPENSE' },
              { name: 'Transporte', icons: 'transport', type: 'EXPENSE' },
              { name: 'Viagem', icons: 'travel', type: 'EXPENSE' },
              { name: 'Outro', icons: 'other', type: 'EXPENSE' },
            ],
          },
        },
      },
    });

    const accessToken = await this.generateAccessToken(user.id);

    return {
      accessToken,
    };
  }

  private async generateAccessToken(userId: string) {
    return await this.jwtService.signAsync({ sub: userId });
  }
}
