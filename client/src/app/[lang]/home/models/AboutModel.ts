import RouterEnum from '~/enums/RouterEnum'

export interface CardContent {
  title: string
  subtitle: string
  href: RouterEnum
  image: string
}

export interface About {
  id: string
  title: string
  card: CardContent
}
