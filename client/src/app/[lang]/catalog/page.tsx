import AppLink from '~/ui/app-link/AppLink'
import User from '~/ui/user/User'

const Catalog = () => {
  return (
    <section className="container py-24">
      <User
        name="John Doe"
        description={
          <AppLink href="/" className="text-blue-4">
            @johndoe
          </AppLink>
        }
      />
    </section>
  )
}

export default Catalog
