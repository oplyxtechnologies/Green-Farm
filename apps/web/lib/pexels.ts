export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
}

export interface PexelsVideoFile {
  id: number;
  quality: string;
  file_type: string;
  width: number;
  height: number;
  fps: number;
  link: string;
}

export interface PexelsVideo {
  id: number;
  width: number;
  height: number;
  duration: number;
  url: string;
  image: string;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: PexelsVideoFile[];
}

export const PEXELS_API_KEY =
  process.env.PEXELS_API_KEY ||
  process.env.NEXT_PUBLIC_PEXELS_API_KEY ||
  "FJKknBx9zwzyaY9wBWpONiL8KygksecW7FUs61kP2EMXAtrBsezvyldi";

/**
 * Curated, verified high-resolution Pexels assets for Green Nepal Krishi Farm
 */
export const PEXELS_ASSETS = {
  // Hero Video (Aerial drone view of lush terrace crops & farmland)
  heroVideo: {
    id: 4232187,
    videoUrl:
      "https://videos.pexels.com/video-files/4232187/4232187-hd_1920_1080_24fps.mp4",
    posterUrl:
      "https://images.pexels.com/videos/4232187/pexels-photo-4232187.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    alt: "Aerial drone view of green cropland and organic fields",
  },
  // Alternative Drone Video
  heroVideoAlt: {
    id: 17353593,
    videoUrl:
      "https://videos.pexels.com/video-files/17353593/17353593-hd_1920_1080_24fps.mp4",
    posterUrl:
      "https://images.pexels.com/videos/17353593/pexels-photo-17353593.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    alt: "Aerial view of lush green agricultural fields",
  },
  // Commercial Produce & Crop Photography
  crops: {
    tomatoes: {
      id: 34316700,
      url: "https://images.pexels.com/photos/34316700/pexels-photo-34316700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
      alt: "Cluster of vine-ripened greenhouse tomatoes in full harvest",
    },
    mustardGreens: {
      id: 38279065,
      url: "https://images.pexels.com/photos/38279065/pexels-photo-38279065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
      alt: "Fresh leafy mustard greens growing in fertile organic soil",
    },
    basmatiRice: {
      id: 35245104,
      url: "https://images.pexels.com/photos/35245104/pexels-photo-35245104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
      alt: "Golden ripening basmati rice paddy ready for harvest",
    },
    apples: {
      id: 4117425,
      url: "https://images.pexels.com/photos/4117425/pexels-photo-4117425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
      alt: "Fresh crisp organic apples on orchard tree branch",
    },
    honey: {
      id: 4921856,
      url: "https://images.pexels.com/photos/4921856/pexels-photo-4921856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
      alt: "Pure wildflower honeycomb in glass jar",
    },
    bellPeppers: {
      id: 7543205,
      url: "https://images.pexels.com/photos/7543205/pexels-photo-7543205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
      alt: "Vibrant sweet red bell peppers fresh from protected culture",
    },
  },
  // Terroir & Facility Photography
  terroir: {
    chitwanFarmland: {
      id: 38521662,
      url: "https://images.pexels.com/photos/38521662/pexels-photo-38521662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
      alt: "Chitwan fertile farmlands and mountain valley terraces",
    },
    solarDrip: {
      id: 7791939,
      url: "https://images.pexels.com/photos/7791939/pexels-photo-7791939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
      alt: "Precision irrigation across wide commercial agricultural plots",
    },
    soilCompost: {
      id: 3696170,
      url: "https://images.pexels.com/photos/3696170/pexels-photo-3696170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
      alt: "Farmer holding rich biological vermicompost and living soil",
    },
    polyhouse: {
      id: 32738494,
      url: "https://images.pexels.com/photos/32738494/pexels-photo-32738494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
      alt: "Engineered multi-span commercial polyhouse greenhouses",
    },
  },
};

/**
 * Search Pexels Photos API
 */
export async function searchPexelsPhotos(
  query: string,
  perPage = 6,
  orientation: "landscape" | "portrait" | "square" = "landscape"
): Promise<PexelsPhoto[]> {
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        query
      )}&per_page=${perPage}&orientation=${orientation}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.warn(`Pexels API photo search error: ${res.statusText}`);
      return [];
    }

    const data = await res.json();
    return data.photos || [];
  } catch (err) {
    console.error("Failed to query Pexels API photos:", err);
    return [];
  }
}

/**
 * Search Pexels Videos API
 */
export async function searchPexelsVideos(
  query: string,
  perPage = 3,
  orientation: "landscape" | "portrait" = "landscape"
): Promise<PexelsVideo[]> {
  try {
    const res = await fetch(
      `https://api.pexels.com/videos/search?query=${encodeURIComponent(
        query
      )}&per_page=${perPage}&orientation=${orientation}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.warn(`Pexels API video search error: ${res.statusText}`);
      return [];
    }

    const data = await res.json();
    return data.videos || [];
  } catch (err) {
    console.error("Failed to query Pexels API videos:", err);
    return [];
  }
}
