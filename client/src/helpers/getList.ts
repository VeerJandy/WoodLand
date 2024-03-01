import type { Option, Options } from '~/models/GlobalModels'

export const getMaterialList = async (): Promise<Options> => {
  return [
    {
      title: 'Material 1',
      value: '1'
    },
    {
      title: 'Material 2',
      value: '2'
    },
    {
      title: 'Material 3',
      value: '3'
    },
    {
      title: 'Material 4',
      value: '4'
    },
    {
      title: 'Material 5',
      value: '5'
    },
    {
      title: 'Material 6',
      value: '6'
    }
  ]
}
export const getCategoryHighList = async (): Promise<Options> => {
  return [
    {
      title: 'Category 1',
      value: '1'
    },
    {
      title: 'Category 2',
      value: '2'
    },
    {
      title: 'Category 3',
      value: '3'
    },
    {
      title: 'Category 4',
      value: '4'
    },
    {
      title: 'Category 5',
      value: '5'
    },
    {
      title: 'Category 6',
      value: '6'
    }
  ]
}
export const getCategoryLowList = async (
  highCategory: Option
): Promise<Options> => {
  return [
    {
      title: 'Category 1',
      value: '1'
    },
    {
      title: 'Category 2',
      value: '2'
    },
    {
      title: 'Category 3',
      value: '3'
    },
    {
      title: 'Category 4',
      value: '4'
    },
    {
      title: 'Category 5',
      value: '5'
    },
    {
      title: 'Category 6',
      value: '6'
    }
  ]
}
