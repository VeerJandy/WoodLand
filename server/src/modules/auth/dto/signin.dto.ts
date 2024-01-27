import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  NotContains
} from 'class-validator'

export class SigninDto {
  @IsEmail({}, { message: 'invalid_email' })
  readonly email: string

  @IsString()
  @NotContains(' ', { message: 'spaces_not_allowed' })
  @MinLength(6, { message: 'min_length_password' })
  @MaxLength(20, { message: 'max_length_password' })
  readonly password: string
}
