export const fetchCountries = async () => {
    const response = await fetch('https://restcoutries.com/v3.1/all');
    if (!response.ok) {
        throw Error(response.status)
    }
    const data = await response.json();
    return data
}