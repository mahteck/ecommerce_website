import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function Product() {
    const data = await client.fetch(`*[_type == "Product"]{name,description,price,image,category ->{name}}`);
    console.log(data);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Products:</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data && Array.isArray(data) && data.map((item, index) => (
                    <div key={item.id || index} style={{ marginBottom: "20px" }}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                        {/* Render product name */}
                        <h2 className="text-lg font-semibold">{item.name || "Unnamed Product"}</h2>

                        {/* Render product image */}
                        <div className="w-full h-50 relative mb-4 items-center">
                            <Image
                                src={item.image ? urlFor(item.image).url() : '/placeholder.jpg'}
                                alt={item.description || 'No description'}
                                width={200}
                                height={400}
                                className="rounded-md"
                            />
                        </div>

                        {/* Render product category */}
                        <p className="text-sm text-gray-600">Category: {item.category && item.category.name ? item.category.name : "No category"}</p>

                        {/* Render product description */}
                        <p className="text-sm mt-2">{item.description || "No description available"}</p>

                        {/* Render product price */}
                        <p className="text-lg font-semibold mt-2">Price: ${item.price || "N/A"}</p>
                    </div >
                ))
                }
            </div>
        </div >
    );
}
