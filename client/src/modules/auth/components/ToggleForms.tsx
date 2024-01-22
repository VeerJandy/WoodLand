import IconArrowLink from '~/ui/icons/IconArrowLink'
import Text from '~/ui/text/Text'

interface ToggleFormsProps {
  isShowSignUpForm: boolean
  toggleSignUpForm: () => void
}

const ToggleForms = ({
  isShowSignUpForm,
  toggleSignUpForm
}: ToggleFormsProps) => (
  <div className="mt-4">
    {isShowSignUpForm ? (
      <div className="flex flex-col items-center">
        <Text as="p" label="auth.already_have_account" />
        <p
          className="flex cursor-pointer items-center gap-1 text-blue-4 hover:underline"
          onClick={toggleSignUpForm}
        >
          <Text label="common.sign_in" />
          <IconArrowLink size="10" />
        </p>
      </div>
    ) : (
      <div className="flex flex-col items-center">
        <Text as="p" label="auth.don't_have_account" />
        <p
          className="flex cursor-pointer items-center gap-1 text-blue-4 hover:underline"
          onClick={toggleSignUpForm}
        >
          <Text label="common.create" />
          <IconArrowLink size="10" />
        </p>
      </div>
    )}
  </div>
)

export default ToggleForms
