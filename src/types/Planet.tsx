export interface Planet {
  name: string;
  // overview: {
  //   content: string
  //   source: string
  // }
  // structure: {
  //   content: string
  //   source: string
  // }
  // geology: {
  //   content: string
  //   source: string
  // }
  informations: PlanetInfo[];
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  // images: {
  //   planet: string;
  //   internal: string;
  //   geology: string;
  // };
}

interface PlanetInfo {
  content: string;
  source: string;
  image: string;
}
