import { client } from "@/sanity/lib/client";
import ProductDetailClient from "@/app/Component/ProductDetailClient";
import { Params } from 'next/dist/server/request/params';

// Define Params type
// type Params = {
//     slug: string;
// };

export default async function ProductDetailPage(context: { params: Promise<Params> }) {
    // const { slug } = params; // Directly destructure the slug
    const params = await context.params;

    if (!params || !params.slug) {
        return <div>Error: Invalid category slug.</div>;
    }

    const { slug } = params;

    // Fetch product details using the slug parameter
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

    // Handle the case where the product is not found
    if (!product) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center text-red-500">Product Not Found</h1>
            </div>
        );
    }

    // Return the product details to the ProductDetailClient component
    return <ProductDetailClient product={product} />;
}
