import React from "react";
import Image from "next/image";
import { getData } from "./http/http.service";
import { PostProduct, RelatedProduct } from "@/types/data.type";

export default async function Home() {
  const blogContent = await getData();

  if (!blogContent) {
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Blog Content</h1>
        <p className="text-red-500">Error loading content.</p>
      </main>
    );
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{blogContent.Title}</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Description</h2>
        <div
          className="prose prose-gray"
          dangerouslySetInnerHTML={{ __html: blogContent.Desc }}
        />
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Details</h2>
        <p><strong>Category:</strong> {blogContent.Category}</p>
        <p><strong>Created Date:</strong> {new Date(blogContent.CreatedDate).toLocaleDateString()}</p>
        <p><strong>Updated Date:</strong> {new Date(blogContent.UpdatedDate).toLocaleDateString()}</p>
        <p><strong>Visit Statistics:</strong> {blogContent.VisitStatictics}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Images</h2>
        <div className="flex space-x-4">
          <Image src={blogContent.Image} alt="Main" width={300} height={200} className="rounded-lg shadow" />
          <Image src={blogContent.ImageMedium} alt="Medium" width={300} height={200} className="rounded-lg shadow" />
          <Image src={blogContent.ImageThumbnail} alt="Thumbnail" width={300} height={200} className="rounded-lg shadow" />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Related Products</h2>
        {blogContent.RelatedProducts.map((relatedProduct: RelatedProduct, index: number) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-medium text-gray-600">
              Carousel Group: {relatedProduct.CarouselGroup}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              {relatedProduct.postProduct.map((product: PostProduct, idx: number) => (
                <div
                  key={idx}
                  className="p-4 border rounded-lg shadow hover:shadow-lg transition"
                >
                  <Image
                    src={product.ImagePath}
                    alt={product.Name}
                    width={300}
                    height={200}
                    className="object-cover rounded mb-2"
                  />
                  <h4 className="font-bold text-gray-800">{product.Name}</h4>
                  <p className="text-sm text-gray-600">
                    Price: {product.Price ?? "N/A"}
                  </p>
                  {product.OldPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      Old Price: {product.OldPrice}
                    </p>
                  )}
                  <a
                    href={product.ProductUrl}
                    className="text-blue-600 hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Product
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
