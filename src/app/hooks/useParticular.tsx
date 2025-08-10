import { useQuery } from '@tanstack/react-query';

export interface ParticularData {
  id: number;
  etymology?: string;
  history?: string;
  governance?: string;
  security_military?: string;
  justice_legal_system?: string;
  religious_spiritual_practices?: string;
  other_cultural_practices?: string;
  health_wellness?: string;
  education_arts?: string;
  dietary_culinary_practices?: string;
  economy_commerce?: string;
  natural_resource_management?: string;
  architecture_construction?: string;
  social_relations?: string;
  entertainment_recreation?: string;
  death_succession?: string;
  folklore?: string;
  language?: string;
  media?: string;
}

export function useParticular(id?: string) {
    return useQuery<ParticularData, Error>({
      queryKey: ['particular', id],
      queryFn: async () => {
        if (!id) throw new Error('No id provided');
        const res = await fetch(
          `${process.env.BASE_URL}/african_civilization/particular/${id}`
        );
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        const data = (await res.json()) as ParticularData;
        return data;
      },
      enabled: Boolean(id),       // only fetch when `id` is provided
      staleTime: 5 * 60 * 1000,   // data considered fresh for 5 minutes
    });
  }