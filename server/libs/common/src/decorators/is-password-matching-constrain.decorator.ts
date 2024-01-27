import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { SignupDto } from '~/modules/auth/dto'

@ValidatorConstraint({ name: 'isPasswordMatchingConstrain', async: false })
export class isPasswordMatchingConstrain
  implements ValidatorConstraintInterface
{
  validate(
    repeatPassword: string,
    validationArguments: ValidationArguments
  ): Promise<boolean> | boolean {
    const obj = validationArguments.object as SignupDto
    return obj.password === repeatPassword
  }

  defaultMessage(): string {
    return 'Passwords do not match'
  }
}
