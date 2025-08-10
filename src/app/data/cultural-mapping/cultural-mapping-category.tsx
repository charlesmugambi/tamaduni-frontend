export interface TableConfig {
    /** Unique key for the table */
    key: string;
    /** Display label for the table */
    label: string;
    /** Table name used in API endpoint (e.g. `/api/{tableName}`) */
    tableName: string;
    /** Fields to show in previews (must include `media`) */
    previewFields: string[];
  }
  
  export interface CategoryConfig {
    /** Unique key for the category */
    key: string;
    /** Display label for the category */
    label: string;
    /** Tables belonging to this category */
    tables: TableConfig[];
  }
  
  /**
   * Configuration for the Cultural Mapping module.
   * This serves as the single source of truth for fetching and previewing data.
   */
  export const culturalMappingConfig: CategoryConfig[] = [
    {
      key: 'communityOrganizations',
      label: 'Community & Organizations',
      tables: [
        {
          key: 'culturalCommunityOrganizations',
          label: 'Cultural Community Organizations',
          tableName: 'cultural-community-organizations',
          previewFields: ['activity_name', 'location', 'media'],
        },
        {
          key: 'culturalOrganizations',
          label: 'Cultural Organizations',
          tableName: 'cultural-organizations',
          previewFields: ['organizationName', 'location', 'media'],
        },
      ],
    },
    {
      key: 'workshopsClasses',
      label: 'Workshops, Classes & Studios',
      tables: [
        {
          key: 'culturalWorkshopsAndClasses',
          label: 'Cultural Workshops and Classes',
          tableName: 'cultural-workshops-classes',
          previewFields: ['workshop_name', 'schedule', 'media'],
        },
        {
          key: 'creativeStudios',
          label: 'Creative Studios and Workspaces',
          tableName: 'creative-studios-workspaces',
          previewFields: ['studioName', 'facilities', 'media'],
        },
      ],
    },
    {
      key: 'artInstallations',
      label: 'Art Installations & Public Art',
      tables: [
        {
          key: 'communityArtInstallations',
          label: 'Community Art Installations',
          tableName: 'community-art-installations',
          previewFields: ['installation_name', 'artists', 'media'],
        },
      ],
    },
    {
      key: 'creativeProsEvents',
      label: 'Creative Professionals & Events',
      tables: [
        {
          key: 'creativeProfessionals',
          label: 'Creative Professionals',
          tableName: 'creative-professionals',
          previewFields: ['occupation', 'expertise', 'media'],
        },
        {
          key: 'creativeEventsPerformances',
          label: 'Creative Events and Performances',
          tableName: 'creative-events-performances',
          previewFields: ['eventName', 'date', 'media'],
        },
      ],
    },
    {
      key: 'festivalsCeremonies',
      label: 'Cultural Festivals, Ceremonies & Processions',
      tables: [
        {
          key: 'culturalEventsFestivals',
          label: 'Cultural Events & Festivals',
          tableName: 'cultural-events-festivals',
          previewFields: ['eventName', 'date', 'media'],
        },
        {
          key: 'traditionalCeremonies',
          label: 'Traditional Ceremonies',
          tableName: 'traditional-ceremonies',
          previewFields: ['ceremonyName', 'participants', 'media'],
        },
        {
          key: 'culturalParades',
          label: 'Cultural Parades & Processions',
          tableName: 'cultural-parades-processions',
          previewFields: ['paradeName', 'routeMap', 'media'],
        },
        {
          key: 'musicDancePerformances',
          label: 'Music & Dance Performances',
          tableName: 'music-dance-performances',
          previewFields: ['performanceName', 'performers', 'media'],
        },
      ],
    },
    {
      key: 'heritageSites',
      label: 'Heritage & Historic Sites',
      tables: [
        {
          key: 'heritageSites',
          label: 'Heritage Sites',
          tableName: 'heritage-sites',
          previewFields: ['site_name', 'visiting_hours', 'media'],
        },
        {
          key: 'historicLandmarks',
          label: 'Historic Landmarks',
          tableName: 'historic-landmarks',
          previewFields: ['landmark_name', 'architectural_style', 'media'],
        },
      ],
    },
    {
      key: 'naturalHeritage',
      label: 'Natural Heritage & Conservation',
      tables: [
        {
          key: 'naturalHeritageSites',
          label: 'Natural Heritage Sites',
          tableName: 'natural-heritage-sites',
          previewFields: ['siteName', 'ecologicalSignificance', 'media'],
        },
        {
          key: 'conservationistsNaturalists',
          label: 'Conservationists & Naturalists',
          tableName: 'conservationists-naturalists',
          previewFields: ['occupation', 'areasOfExpertise', 'media'],
        },
        {
          key: 'wildlifeReserves',
          label: 'Wildlife Reserves & National Parks',
          tableName: 'wildlife-reserves-national-parks',
          previewFields: ['name', 'floraAndFauna', 'media'],
        },
      ],
    },
    {
      key: 'environmentalEducation',
      label: 'Environmental Education & Outreach',
      tables: [
        {
          key: 'environmentalEducationOutreach',
          label: 'Environmental Education & Outreach',
          tableName: 'environmental-education-outreach',
          previewFields: ['organizationName', 'programs', 'media'],
        },
      ],
    },
    {
      key: 'parksRecreation',
      label: 'Parks, Sports & Recreation',
      tables: [
        {
          key: 'parksOutdoorActivities',
          label: 'Parks & Outdoor Activities',
          tableName: 'parks-outdoor-activities',
          previewFields: ['location_name', 'facilities', 'media'],
        },
        {
          key: 'sportsRecreationActivities',
          label: 'Sports & Recreation Activities',
          tableName: 'sports-recreation-activities',
          previewFields: ['facility_name', 'available_activities', 'media'],
        },
        {
          key: 'entertainmentVenues',
          label: 'Entertainment Venues',
          tableName: 'entertainment-venues',
          previewFields: ['venue_name', 'upcoming_events', 'media'],
        },
        {
          key: 'leisureActivities',
          label: 'Leisure Activities & Classes',
          tableName: 'leisure-activities-classes',
          previewFields: ['activity_name', 'schedule', 'media'],
        },
      ],
    },
  ];
  