import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";

const queryClient = new QueryClient();

const fetchCategories = async () => {
  const res = await fetch("http://127.0.0.1:8000/categories/api/categories/");
  return res.json();
};

function CategoryAdmin() {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [listings, setListings] = useState("");

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const addCategory = useMutation({
    mutationFn: async (newCategory) => {
      const res = await fetch("http://127.0.0.1:8000/categories/api/categories/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCategory),
      });
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries(["categories"]),
  });

  const deleteCategory = useMutation({
    mutationFn: async (id) => {
      await fetch(`/api/categories/${id}/`, { method: "DELETE" });
    },
    onSuccess: () => queryClient.invalidateQueries(["categories"]),
  });

  const handleAdd = () => {
    if (!name || !icon || !listings) return;
    addCategory.mutate({ name, icon, listings: Number(listings) });
    setName("");
    setIcon("");
    setListings("");
  };

  return (
    <div className="pt-24"> 
     <div className="w-full h-screen p-10 flex gap-10">
      <div className="w-1/3 bg-white shadow-lg rounded-xl p-4">
        <div className="space-y-3">
          <input className="w-full p-2 border rounded" placeholder="Category Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="w-full p-2 border rounded" placeholder="Icon URL" value={icon} onChange={(e) => setIcon(e.target.value)} />
          <input className="w-full p-2 border rounded" placeholder="Number of Listings" type="number" value={listings} onChange={(e) => setListings(e.target.value)} />
          <button onClick={handleAdd} className="w-full bg-purple-600 hover:bg-blue-700 text-white p-2 rounded">Add Category</button>
        </div>
      </div>
      <div className="w-2/3">
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.id} className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg border border-gray-200">
                <div>
                  <p className="font-semibold text-gray-900">{cat.name}</p>
                  <p className="text-sm text-gray-500">Listings: {cat.listings}</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded" onClick={() => deleteCategory.mutate(cat.id)}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CategoryAdmin />
    </QueryClientProvider>
  );
}
