// src/components/CarList.tsx
import React, { useEffect, useState } from 'react';
import { getCars } from '../api/carService';

interface Car {
    year: number;
    make: string;
    model: string;
}

const CarList: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const carData = await getCars();
                setCars(carData);
            } catch (err) {
                setError('Failed to fetch cars');
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Car List</h1>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
