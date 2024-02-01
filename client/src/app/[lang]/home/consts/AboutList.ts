import RouterEnum from '~/enums/RouterEnum'

import type { About } from '../models/AboutModel'

const AboutList: About[] = [
  {
    id: '1',
    title: 'home.about.scroll_title_1',
    card: {
      title: 'home.about.card_title_1',
      subtitle: 'home.about.card_subtitle_1',
      href: RouterEnum.Home,
      image:
        'https://images.pexels.com/photos/8832028/pexels-photo-8832028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: '2',
    title: 'home.about.scroll_title_2',
    card: {
      title: 'home.about.card_title_2',
      subtitle: 'home.about.card_subtitle_2',
      href: RouterEnum.Home,
      image:
        'https://images.pexels.com/photos/7166993/pexels-photo-7166993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: '3',
    title: 'home.about.scroll_title_3',
    card: {
      title: 'home.about.card_title_3',
      subtitle: 'home.about.card_subtitle_3',
      href: RouterEnum.Home,
      image:
        'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: '4',
    title: 'home.about.scroll_title_4',
    card: {
      title: 'home.about.card_title_4',
      subtitle: 'home.about.card_subtitle_4',
      href: RouterEnum.Home,
      image:
        'https://images.pexels.com/photos/16126230/pexels-photo-16126230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: '5',
    title: 'home.about.scroll_title_5',
    card: {
      title: 'home.about.card_title_5',
      subtitle: 'home.about.card_subtitle_5',
      href: RouterEnum.Home,
      image:
        'https://images.pexels.com/photos/8605903/pexels-photo-8605903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: '6',
    title: 'home.about.scroll_title_6',
    card: {
      title: 'home.about.card_title_6',
      subtitle: 'home.about.card_subtitle_6',
      href: RouterEnum.Home,
      image:
        'https://images.pexels.com/photos/8820187/pexels-photo-8820187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  }
]

export default AboutList
