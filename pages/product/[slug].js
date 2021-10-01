import { useRouter } from 'next/dist/client/router'
import Layout from '../../components/Layout'
import data from '../../utils/data'
export default function ProductScreen() {
  const router = useRouter()
  const { slug } = router.query
  const product = data.products.find((a) => a.slug === slug)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <Layout>
      <div>{product.name}</div>
    </Layout>
  )
}
