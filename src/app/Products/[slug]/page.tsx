import ProductDetailClient from "@/app/Component/ProductDetailClient";
import { client } from "@/sanity/lib/client";

export default async function ProductDetailPage({ params }) {
    const { slug } = params;

    // Fetch product details
    const product = await client.fetch(
        `*[_type == "Product" && slug.current == $slug][0]{
            name,
            price,
            "imageUrl": image.asset->url,
            size,
            gender,
            description,
            Brand->{
                name
            },
            Category->{
                name
            },
            Subcategory->{
                name
            },
            type,
            style,
            color
        }`,
        { slug }
    );

    if (!product) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center text-red-500">Product Not Found</h1>
            </div>
        );
    }

    return <ProductDetailClient product={product} />;
}
