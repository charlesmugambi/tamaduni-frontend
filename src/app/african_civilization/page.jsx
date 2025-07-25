
// app/civilizations/page.jsx
'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchCivilizations } from "../lib/apis";

export default function CivilizationsPage() {
  const [civilizations, setCivilizations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCivilizations();
        setCivilizations(data);
      } catch (err) {
        setError("Failed to load civilizations. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl font-bold mb-2">Time Synopsis</h1>
        <p className="text-lg">3000–3500 BCE</p>
        <p className="text-sm mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
      </div>

      <h1 className="text-3xl font-bold my-6">Kingdom Nation States</h1>
      {loading && <p className="text-blue-500">Loading civilizations...</p>}
      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {!loading && !error && (
        <ul className="space-y-4">
          {civilizations.map((civ) => (
            <li
              key={civ.id}
              className="p-4 bg-yellow-200 rounded shadow cursor-pointer"
              onClick={() => router.push(`/african_civilization/${civ.id}`)}
            >
              <h2 className="text-xl font-bold">{civ.name}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}