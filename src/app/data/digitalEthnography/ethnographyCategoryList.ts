// Digital Ethnography
import { Category } from "../../digital_ethnography/types/category";

export const digitalEthnographyCategoriesList: Category[] = [
  {
    key: 'tribe-overview',
    label: 'Tribe Overview',
    model: 'tribeOverview',
    previewFields: ['tribe_name', 'media'],
    synopsis: 'A comprehensive overview of the tribe’s origins, culture, and structure.',
    imageSrc: '/images/tribe-overview.jpg',
  },
  {
    key: 'architecture-and-construction',
    label: 'Architecture & Construction',
    model: 'architectureAndConstruction',
    previewFields: ['architectural_styles', 'media'],
    synopsis: 'Explore traditional building techniques and architectural styles.',
    imageSrc: '/images/architecture-and-construction.jpg',
  },
  {
    key: 'dietary-culinary-practices',
    label: 'Dietary & Culinary Practices',
    model: 'dietaryCulinaryPractices',
    previewFields: ['culinaryHeritage', 'media'],
    synopsis: 'Delve into the tribe’s dietary traditions and culinary heritage.',
    imageSrc: '/images/dietary-culinary-practices.jpg',
  },
  {
    key: 'economic-values-and-commerce',
    label: 'Economic Values & Commerce',
    model: 'economicValuesAndCommerce',
    previewFields: ['economicPractices', 'media'],
    synopsis: 'Insights into trade networks and economic systems.',
    imageSrc: '/images/economic-values-and-commerce.jpg',
  },
  {
    key: 'education-and-arts',
    label: 'Education & Arts',
    model: 'educationAndArts',
    previewFields: ['educationApproach', 'media'],
    synopsis: 'An overview of educational practices and artistic expressions.',
    imageSrc: '/images/education-and-arts.jpg',
  },
  {
    key: 'entertainment-and-recreation',
    label: 'Entertainment & Recreation',
    model: 'entertainmentAndRecreation',
    previewFields: ['culturalForms', 'media'],
    synopsis: 'Discover leisure activities and cultural performances.',
    imageSrc: '/images/entertainment-and-recreation.jpg',
  },
];


export const modulesConfig: Record<string, Category[]> = {
  digitalEthnography: digitalEthnographyCategoriesList,
}
