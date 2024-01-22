'use client'

import { useAuthModal } from '~/modules/auth'
import { useConfetti } from '~/modules/confetti'
import { useUser } from '~/modules/user'
import Button from '~/ui/button/Button'

const Page = () => {
  const { open } = useAuthModal()
  const { runOnceConfetti } = useConfetti()
  const { user } = useUser()

  return (
    <section className="container">
      <Button label="open modal" onClick={open} />
      <Button label="runOnceConfetti" onClick={runOnceConfetti} />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </section>
  )
}

export default Page
