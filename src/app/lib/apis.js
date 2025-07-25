// lib/apis.js
const BASE_URL = "https://api.dev.tamaduni.africa:3100";

export const fetchCivilizations = async () => {
  const res = await fetch(`${BASE_URL}/civilization/Kingdom`);
  if (!res.ok) throw new Error("Failed to fetch civilizations");
  return res.json();
};

export const fetchCivilizationDetails = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/civilization/Particular/${id}`);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to fetch civilization details: ${res.status} ${errorText}`);
    }
    return res.json();
  } catch (error) {
    console.error("fetchCivilizationDetails error:", error);
    throw error;
  }
};

export const fetchMobilityDrivers = async () => {
  const res = await fetch(`${BASE_URL}/mobility/Drivers`);
  if (!res.ok) throw new Error("Failed to fetch mobility data");
  return res.json();
};

export const fetchCivilizationCategories = async () => {
  const categories = [
    "Etymology",
    "Geography",
    "Trade",
    "Particular",
    "Spirituality",
    "PoliticalStructure",
    "Architecture"
  ];

  const results = await Promise.allSettled(
    categories.map(async (name) => {
      const res = await fetch(`${BASE_URL}/civilization/${name}`);
      if (!res.ok) throw new Error(`Failed to fetch ${name}`);
      const data = await res.json();
      return { title: name, description: `Explore ${name}`, count: data.length };
    })
  );

  return results.filter((r) => r.status === "fulfilled").map((r) => r.value);
};
