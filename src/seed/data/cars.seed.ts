import { v4 as uuid} from "uuid";

import { Car } from "src/cars/interfaces/car.interface";

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: "Toyota",
        model: "Supra"
    },
    {
        id: uuid(),
        brand: "Mitsubishi",
        model: "3000GT"
    },
    {
        id: uuid(),
        brand: "Nissan",
        model: "240SX"
    },
    {
        id: uuid(),
        brand: "Honda",
        model: "Acura NSX"
    },
    {
        id: uuid(),
        brand: "Mazda",
        model: "MX-5"
    },
    {
        id: uuid(),
        brand: "Subaru",
        model: "Impreza"
    },
]