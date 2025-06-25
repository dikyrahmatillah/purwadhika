"use client";

import DeleteButton from "@/components/delete-button";
import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  image: string;
  description: string;
  created: number;
  stock: number;
  objectId: string;
}

export default async function Home() {
  const response = await fetch(
    "https://stylishkitty-us.backendless.app/api/data/products"
  );

  const data = (await response.json()) as Product[];

  return (
    <main className=" py-6 px-4">
      <Link href={"/create"} className="underline mb-5 block">
        Add new product
      </Link>
      <div className="grid grid-cols-3 gap-4">
        {data.map((product) => (
          <article key={product.objectId}>
            <div className="relative h-32">
              <Image
                src={product.image}
                alt={product.description}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-semibold text-2xl mt-2">{product.name}</h2>
            <p>{product.description}</p>
            <div className="mt-2">
              <button className="border p-2">Edit</button>
              <DeleteButton objectId={product.objectId} />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
