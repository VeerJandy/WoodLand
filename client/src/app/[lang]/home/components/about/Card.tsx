import Image from 'next/image'

import AppLink from '~/ui/app-link/AppLink'
import IconArrowRight from '~/ui/icons/IconArrowRight'
import Text from '~/ui/text/Text'

import { CardContent } from '../../models/AboutModel'

interface CardProps extends CardContent {}

const Card = ({ image, subtitle, title, href }: CardProps) => (
  <div className="relative mt-4 h-[30vh] overflow-hidden rounded-big p-4 md:mt-0 md:h-full">
    <div className="relative z-one flex h-full flex-col justify-end text-white">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <div>
          <Text as="h3" className="h3 font-bold" label={title} />
          <Text as="p" className="text-gray-1" label={subtitle} />
        </div>
        <AppLink
          href={href}
          button
          className="mt-3 md:mt-0"
          buttonProps={{
            label: 'common.read_more',
            background: 'blur',
            size: 'big',
            className: '!pl-2',
            icon: (
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-white">
                <IconArrowRight className="text-black" />
              </span>
            )
          }}
        />
      </div>
    </div>
    <Image src={image} alt="" fill quality={100} sizes="50vw" />
  </div>
)

export default Card
