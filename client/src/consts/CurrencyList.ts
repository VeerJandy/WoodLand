import CurrencyEnum from '~/enums/CurrencyEnum'
import { Options } from '~/models/GlobalModels'

const CurrencyList: Options<CurrencyEnum> = [
  {
    title: 'currency.uah',
    value: CurrencyEnum.Uah
  },
  {
    title: 'currency.usd',
    value: CurrencyEnum.Usd
  },
  {
    title: 'currency.eur',
    value: CurrencyEnum.Eur
  }
]

export default CurrencyList
