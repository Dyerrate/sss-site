import type { Metadata } from "next"
import ProductsLanding from "@/app/components/ProductsLanding"

export const metadata: Metadata = {
  title: "Products | Sub Spatial Studio",
  description: "Explore apps and experiences crafted by Sub Spatial Studio.",
}

export default function ProductsPage() {
  return <ProductsLanding />
}
