export type Planet = {
    name: string,
    rotation_period: number,
    orbital_period: number,
    diameter: number,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: number,
    population: number,
    residents: string[],
    films: string[],
    created: string,
    edited: string,
    url: string,
    //added manually
    id: number
};

export type Resident = {
    name: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: [],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
};