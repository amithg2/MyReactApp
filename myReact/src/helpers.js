export const BASE_URL = "https://vpic.nhtsa.dot.gov/api/";
export async function getAllMan() {
  const response = await fetch(
    `${BASE_URL}vehicles/GetAllManufacturers?format=json&page=1`
  );
  const res = await response.json();
  return res.Results;
}

export async function getMan(carMaker){
    const response = await fetch(
        `${BASE_URL}vehicles/GetManufacturerDetails/${carMaker}?format=json`
    );
    const res = await response.json();
    return res.Results;
}