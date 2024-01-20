'use client'

import useToggle from '~/hooks/useToggle'
import Button from '~/ui/button/Button'
import Modal from '~/ui/modal/Modal'

const Page = () => {
  const [isOpen, , close, open] = useToggle()

  return (
    <section className="container">
      <Button label="Open" onClick={open} />

      <Modal title="Title" isOpen={isOpen} onClose={close}>
        wef
      </Modal>
    </section>
  )
}

export default Page
