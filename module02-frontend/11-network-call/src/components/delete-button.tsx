"use client";
async function handleDelete(id: string) {
  await fetch(
    `https://stylishkitty-us.backendless.app/api/data/products/${id}`,
    {
      method: "DELETE",
    }
  );

  alert("Item has been deleted!");
}

export default function DeleteButton({ objectId }: { objectId: string }) {
  return (
    <button
      className="border p-2"
      onClick={() => {
        handleDelete(objectId);
      }}
    >
      Delete
    </button>
  );
}
