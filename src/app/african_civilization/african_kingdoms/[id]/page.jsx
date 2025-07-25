// app/african_civilization/african_kingdoms/[id]/page.jsx
import { fetchCivilizationDetails } from "../../../lib/apis";

export default async function CivilizationDetailPage({ params }) {
  const { id } = params;

  try {
    const civilization = await fetchCivilizationDetails(id);

    return (
      <main className="mx-4 my-6">
        <h1 className="text-3xl font-bold mb-4">{civilization.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{civilization.description}</p>

        {civilization.image && (
          <img
            src={civilization.image}
            alt={civilization.title}
            className="w-full max-w-xl rounded-lg shadow-md"
          />
        )}

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">More Information</h2>
          <ul className="list-disc list-inside">
            <li><strong>Region:</strong> {civilization.region}</li>
            <li><strong>Period:</strong> {civilization.period}</li>
            <li><strong>Summary:</strong> {civilization.summary}</li>
          </ul>
        </section>
      </main>
    );
  } catch (error) {
    return (
      <div className="text-red-500 p-4">
        Error: {error.message || "Failed to load civilization details."}
      </div>
    );
  }
}
