import RouterEnum from '~/enums/RouterEnum'
import AppLink from '~/ui/app-link/AppLink'
import IconPlus from '~/ui/icons/IconPlus'

import CreateName from './[id]/consts/CreateName'

const Products = () => {
  return (
    <div className="mt-4 flex justify-end">
      <AppLink
        label="admin.products.create"
        href={`${RouterEnum.AdminProducts}/${CreateName}`}
        button
        buttonProps={{
          icon: <IconPlus />
        }}
      />
    </div>
  )
}

export default Products
