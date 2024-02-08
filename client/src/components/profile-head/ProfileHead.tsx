'use client'

import Image from 'next/image'
import { memo } from 'react'

import { useUser } from '~/modules/user'
import Avatar from '~/ui/avatar/Avatar'
import Text from '~/ui/text/Text'

const ProfileHead = () => {
  const { user } = useUser()

  return (
    <section className="relative">
      <div className="container relative z-one flex items-center gap-4 pb-12 pt-16">
        <Avatar
          bordered
          src={user?.avatar}
          name={user?.name.firstName}
          className="size-32"
        />
        <div className="">
          <h1 className="h1 font-bold text-white">
            <Text label="common.hello" />, {user?.name.firstName}
          </h1>
          <p className="text-gray-1">{user?.email}</p>
        </div>
      </div>
      <Image
        src="https://images.pexels.com/photos/1583119/pexels-photo-1583119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="profile background"
        fill
        priority
        quality={100}
        sizes="100vw"
      />
    </section>
  )
}

export default memo(ProfileHead)
