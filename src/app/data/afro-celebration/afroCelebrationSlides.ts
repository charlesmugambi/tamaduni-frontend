// src/data/afroCelebrationSlides.ts

export interface Slide {
    moduleKey: string        // e.g. "crafts", "afro-film", "culinary", ...
    categoryKey: string      // the first categoryKey to navigate into
    imageSrc: string         // path to the static image asset
    label: string            // human‑readable module name
    synopsis: string         // static synopsis text
  }
  
  export const slides: Slide[] = [
    {
      moduleKey: 'crafts',
      label: 'Crafts',
      categoryKey: 'CraftsmenandArtisans',
      imageSrc: '/flags/film.PNG',
      synopsis:
        'Handcrafted treasures: meet skilled artisans, explore their tools, and discover traditional techniques passed through generations.'
    },
    {
      moduleKey: 'afro-film',
      label: 'Film and Cinema',
      categoryKey: 'FilmProfessionals',
      imageSrc: '/flags/film.PNG',
      synopsis:
        'Lights, camera, action: dive into Africa’s vibrant film scene, from visionary directors to world‑class festivals.'
    },
    {
      moduleKey: 'culinary',
      label: 'Culinary Arts',
      categoryKey: 'culinary-professionals',
      imageSrc: '/flags/film.PNG',
      synopsis:
        'Flavors of the continent: savor the stories behind legendary chefs, iconic dishes, and time‑honored recipes.'
    },
    {
      moduleKey: 'design',
      label: 'Design & Applied Arts',
      categoryKey: 'designers-and-artists',
      imageSrc: '/flags/film.PNG',
      synopsis:
        'Bold forms & colors: explore the work of top African designers and artists shaping the visual landscape.'
    },
    {
      moduleKey: 'digital',
      label: 'Digital & Multimedia',
      categoryKey: 'digital-artists',
      imageSrc: '/flags/film.PNG',
      synopsis:
        'Pixels & code: discover cutting‑edge digital art, multimedia installations, and the creators behind them.'
    },
    {
      moduleKey: 'environmental',
      label: 'Environmental & Land Art',
      categoryKey: 'land-artists',
      imageSrc: '/flags/film.PNG',
      synopsis:
        'Earth as canvas: witness large‑scale land art and environmental installations integrated into nature.'
    },
    {
      moduleKey: 'experimental',
      label: 'Experimental & Conceptual Art',
      categoryKey: 'conceptual-artists',
      imageSrc: '/flags/film.PNG',
      synopsis:
        'Ideas made visible: engage with boundary‑pushing conceptual works that challenge perception and form.'
    },
    {
      moduleKey: 'heritage',
      label: 'Heritage & Tourism',
      categoryKey: 'heritage-sites',
      imageSrc: '/flags/film.PNG',
      synopsis:
        'Timeless landmarks: journey through UNESCO sites, museums, and cultural institutions rich in history.'
    },
    {
      moduleKey: 'literary',
      label: 'Literary Arts',
      categoryKey: 'authors',
      imageSrc: '/flags/film.PNG',
      synopsis:
        'Words that endure: celebrate writers, poets, and literary festivals that honor African storytelling.'
    },
    {
      moduleKey: 'martial',
      label: 'Martial & Physical Arts',
      categoryKey: 'martial-instructors',
      imageSrc: '/flags/film.PNG',
      synopsis:
        'Discipline and strength: meet master instructors and explore the traditions of martial and physical arts.'
    }
  ]
  