// Shared category interface
export interface BaseCategory {
    key: string
    label: string
    model: string
    previewFields: string[]
  }
  
  // Crafts
  export interface CraftCategory extends BaseCategory {}
  export const craftCategoriesList: CraftCategory[] = [
    { key: 'CraftsmenandArtisans', label: 'Craftsmen and Artisans', model: 'crafts', previewFields: ['name', 'description', 'image'] },
    { key: 'CraftProjectsandCreations',label: 'Craft Projects and Creations', model: 'crafts', previewFields: ['name', 'description', 'image'] },
    { key: 'CraftWorkshopsandStudios', label: 'Craft Workshops and Studios', model: 'crafts', previewFields: ['name', 'description', 'image'] },
    { key: 'CraftFairsandMarkets',     label: 'Craft Fairs and Markets', model: 'crafts', previewFields: ['name', 'description', 'image'] },
    { key: 'CraftEducationandTrainingInstitutions ',label: 'Craft Education and Training', model: 'crafts', previewFields: ['name', 'description', 'image'] },
  ]
  
  // Culinary Arts
  export interface CulinaryCategory extends BaseCategory {}
  export const culinaryCategoriesList: CulinaryCategory[] = [
    { key: 'culinary-professionals', label: 'Culinary Professionals', model: 'culinaryProfessionals', previewFields: ['name', 'description', 'image'] },
    { key: 'restaurants',           label: 'Restaurants',             model: 'restaurants',            previewFields: ['name', 'cuisine_type', 'image'] },
    { key: 'culinary-events',       label: 'Culinary Events',         model: 'culinaryEvents',         previewFields: ['name', 'description', 'image'] },
    { key: 'culinary-schools',      label: 'Culinary Schools',        model: 'culinarySchools',        previewFields: ['name', 'courses_offered', 'image'] },
  ]
  
  // Design & Applied Arts
  export interface DesignCategory extends BaseCategory {}
  export const designCategoriesList: DesignCategory[] = [
    { key: 'designers-and-artists', label: 'Designers and Artists', model: 'designersAndArtists', previewFields: ['name', 'description', 'image'] },
    { key: 'design-projects',       label: 'Design Projects',         model: 'designProjects',          previewFields: ['name', 'description', 'image'] },
    { key: 'design-studios',        label: 'Design Studios',          model: 'designStudios',           previewFields: ['name', 'description', 'image'] },
    { key: 'design-exhibitions',    label: 'Design Exhibitions',      model: 'designExhibitions',       previewFields: ['name', 'description', 'image'] },
    { key: 'design-education',      label: 'Design Education',        model: 'designEducation',         previewFields: ['name', 'courses_offered', 'image'] },
  ]
  
  // Digital & Multimedia
  export interface DigitalCategory extends BaseCategory {}
  export const digitalCategoriesList: DigitalCategory[] = [
    { key: 'digital-artists',     label: 'Digital & Multimedia Artists', model: 'digitalArtists',       previewFields: ['name', 'description', 'image'] },
    { key: 'digital-projects',    label: 'Digital Projects',             model: 'digitalProjects',      previewFields: ['name', 'description', 'image'] },
    { key: 'digital-studios',     label: 'Digital Studios',              model: 'digitalStudios',       previewFields: ['name', 'description', 'image'] },
    { key: 'digital-exhibitions', label: 'Digital Exhibitions',          model: 'digitalExhibitions',   previewFields: ['name', 'description', 'image'] },
    { key: 'digital-education',   label: 'Digital Education',            model: 'digitalEducation',     previewFields: ['name', 'courses_offered', 'image'] },
  ]
  
  // Environmental & Land Art
  export interface EnvironmentalCategory extends BaseCategory {}
  export const environmentalCategoriesList: EnvironmentalCategory[] = [
    { key: 'land-artists',       label: 'Environmental Land Artists', model: 'landArtists',       previewFields: ['name', 'description', 'image'] },
    { key: 'land-installations', label: 'Land Art Installations',     model: 'landInstallations', previewFields: ['name', 'description', 'image'] },
    { key: 'land-sites',         label: 'Land Art Sites',             model: 'landSites',         previewFields: ['name', 'visiting_information', 'image'] },
    { key: 'land-festivals',     label: 'Land Art Festivals',         model: 'landFestivals',     previewFields: ['name', 'description', 'image'] },
  ]
  
  // Experimental & Conceptual Art
  export interface ExperimentalCategory extends BaseCategory {}
  export const experimentalCategoriesList: ExperimentalCategory[] = [
    { key: 'conceptual-artists',       label: 'Experimental & Conceptual Artists', model: 'conceptualArtists',       previewFields: ['name', 'description', 'image'] },
    { key: 'conceptual-installations', label: 'Experimental Installations',        model: 'conceptualInstallations', previewFields: ['name', 'description', 'image'] },
    { key: 'conceptual-galleries',     label: 'Conceptual Art Galleries',          model: 'conceptualGalleries',     previewFields: ['name', 'featured_artists', 'image'] },
    { key: 'conceptual-festivals',     label: 'Conceptual Art Festivals',          model: 'conceptualFestivals',     previewFields: ['name', 'description', 'image'] },
  ]
  
  // Film & Cinema
  export interface FilmCategory extends BaseCategory {}
  export const filmCategoriesList: FilmCategory[] = [
    { key: 'film-professionals',   label: 'Film Professionals',    model: 'filmProfessionals',   previewFields: ['name', 'description', 'image'] },
    { key: 'films',                label: 'Films',                 model: 'films',               previewFields: ['name', 'description', 'image'] },
    { key: 'production-companies', label: 'Production Companies',  model: 'productionCompanies', previewFields: ['name', 'description', 'image'] },
    { key: 'film-festivals',       label: 'Film Festivals',        model: 'filmFestivals',       previewFields: ['name', 'description', 'image'] },
    { key: 'film-schools',         label: 'Film Schools',          model: 'filmSchools',         previewFields: ['name', 'coursesOffered', 'image'] },
  ]
  
  // Heritage & Tourism
  export interface HeritageCategory extends BaseCategory {}
  export const heritageCategoriesList: HeritageCategory[] = [
    { key: 'heritage-sites',        label: 'Heritage Sites and Monuments', model: 'heritageSites',        previewFields: ['name', 'cultural_significance', 'image'] },
    { key: 'tourism-professionals', label: 'Tourism Professionals',        model: 'tourismProfessionals', previewFields: ['name', 'expertise', 'image'] },
    { key: 'museums-institutions',  label: 'Museums & Institutions',        model: 'museumsInstitutions',  previewFields: ['name', 'visitor_information', 'image'] },
    { key: 'tourism-events',        label: 'Tourism Events & Festivals',   model: 'tourismEvents',         previewFields: ['name', 'description', 'image'] },
  ]
  
  // Literary Arts
  export interface LiteraryCategory extends BaseCategory {}
  export const literaryCategoriesList: LiteraryCategory[] = [
    { key: 'authors',            label: 'Writers and Authors',         model: 'authors',          previewFields: ['name', 'description', 'image'] },
    { key: 'literary-works',     label: 'Literary Works',             model: 'literaryWorks',    previewFields: ['name', 'description', 'image'] },
    { key: 'publishers',         label: 'Publishing Houses',          model: 'publishers',       previewFields: ['name', 'notable_publications', 'image'] },
    { key: 'literary-festivals', label: 'Literary Festivals & Events',model: 'literaryFestivals',previewFields: ['name', 'description', 'image'] },
    { key: 'literary-education', label: 'Literary Education',         model: 'literaryEducation',previewFields: ['name', 'courses_offered', 'image'] },
  ]
  
  // Martial & Physical Arts
  export interface MartialCategory extends BaseCategory {}
  export const martialCategoriesList: MartialCategory[] = [
    { key: 'martial-instructors', label: 'Martial Arts Instructors',    model: 'martialInstructors', previewFields: ['name', 'biography', 'image'] },
  ]
  
  // Now bundle them into one map:
  export const modulesConfig: Record<string, BaseCategory[]> = {
    crafts:                 craftCategoriesList,
    culinary:               culinaryCategoriesList,
    design:                 designCategoriesList,
    digital:                digitalCategoriesList,
    environmental:          environmentalCategoriesList,
    experimental:           experimentalCategoriesList,
    film:                   filmCategoriesList,
    heritage:               heritageCategoriesList,
    literary:               literaryCategoriesList,
    martial:                martialCategoriesList,
  }
  