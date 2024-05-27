export type CountryDetails = {
    name: {
        common: string,
    },
    cca2: string,
    currencies: {
        [key: string]: {
            name: string,
            symbol: string
        }
    } | undefined,
    capital: string[] | undefined,
    region: string,
    languages: {
        [key: string]: string
    } | undefined
    borders: string[] | undefined;
    maps: {
        googleMaps: string,
    };
    population: number;
    continents: string[];
    flags: {
        svg: string
    }
}
