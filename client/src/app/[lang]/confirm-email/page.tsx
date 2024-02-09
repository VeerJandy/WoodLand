'use client'

import useConfirmEmail from './hooks/useConfirmEmail'

interface ConfirmEmailProps {
  searchParams: { email: string }
}

const ConfirmEmail = ({ searchParams: { email } }: ConfirmEmailProps) => {
  useConfirmEmail(email)

  return <></>
}

export default ConfirmEmail
