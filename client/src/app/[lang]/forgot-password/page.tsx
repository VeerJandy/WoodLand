interface ForgotPasswordProps {
  searchParams: { email: string }
}

const ForgotPassword = ({ searchParams: { email } }: ForgotPasswordProps) => {
  return (
    <section className="flex items-center justify-center pt-32">
      {email}
    </section>
  )
}

export default ForgotPassword
