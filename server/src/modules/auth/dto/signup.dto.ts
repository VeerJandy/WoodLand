import {
  Equals,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  NotContains,
  Validate
} from 'class-validator'
import { isPasswordMatchingConstrain } from '~/common/decorators'

export class SignupDto {
  @IsEmail({}, { message: 'invalid_email' })
  readonly email: string

  @IsString()
  @NotContains(' ', { message: 'spaces_not_allowed' })
  @MinLength(6, { message: 'min_length_password' })
  @MaxLength(20, { message: 'max_length_password' })
  readonly password: string

  @IsString()
  @NotContains(' ', { message: 'spaces_not_allowed' })
  @MinLength(6, { message: 'min_length_password' })
  @MaxLength(20, { message: 'max_length_password' })
  @Validate(isPasswordMatchingConstrain)
  readonly repeatPassword: string

  @IsString()
  @IsNotEmpty({ message: 'first_name_is_required' })
  @MaxLength(100, { message: 'max_length_name' })
  readonly firstName: string

  @IsString()
  @IsNotEmpty({ message: 'last_name_is_required' })
  @MaxLength(100, { message: 'max_length_name' })
  readonly lastName: string

  @IsBoolean()
  @Equals(true)
  readonly isAgree: boolean
}
