import {
  BadRequestException,
  ConflictException,
  Injectable
} from '@nestjs/common'
import * as bcrypt from 'bcryptjs'
import { UserService } from '~/modules/user/user.service'
import { TokenService } from '~/modules/token/token.service'
import type { SignupDto, SigninDto } from './dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService
  ) {}

  async signup(form: SignupDto, agent: string) {
    const candidate = await this.userService.findByEmailOrId(form.email)
    if (candidate) throw new ConflictException('email.exists_email')

    const user = await this.userService.create(form)
    const tokens = await this.tokenService.createTokens({
      userId: user.id,
      role: user.role,
      agent
    })

    return { user, tokens }
  }

  async signin(form: SigninDto, agent: string) {
    const user = await this.userService.findByEmailOrId(form.email)
    if (!user) {
      throw new BadRequestException('password.wrong_email_or_password email.')
    }

    const isPasswordCompare = await bcrypt.compare(form.password, user.password)
    if (!isPasswordCompare)
      throw new BadRequestException('password.wrong_email_or_password email.')

    const tokens = await this.tokenService.createTokens({
      userId: user.id,
      role: user.role,
      agent
    })

    return { user: this.userService.getUserForClient(user), tokens }
  }
}
