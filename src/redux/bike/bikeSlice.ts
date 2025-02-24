import { PayloadAction } from '../../../node_modules/@reduxjs/toolkit/src/createAction';
import { Bike } from '../../types/types';
import { createSlice } from '../../../node_modules/@reduxjs/toolkit/src/createSlice';



type FiltersState = {
    brand: string;
    category: string;
    price: string;
    allBikes: Bike[]; // Store the full list of bikes
    filteredBikes: Bike[];
};

const initialState: FiltersState = {
    brand: "all",
    category: "Mountain",
    price: "1k",
    allBikes: [],
    filteredBikes: [],
};

export const bikeSlice = createSlice({
    name: 'bike',
    initialState,
    reducers: {
     // Type 'Bike' is not assignable 
        setFilters: (state, action: PayloadAction<{ brand: string; category: string; price: string }>) => {
            state.brand = action.payload.brand;
            state.category = action.payload.category;
            state.price = action.payload.price;

            // Apply filters
            state.filteredBikes = state.allBikes.filter((bike) =>
                (state.brand === "all" || bike.brand === state.brand) &&
                (state.category === "All" || bike.category.toString() === state.category) &&
                (state.price === "all" || bike.price <= parseInt(state.price))
            );
        },
        setFilteredBikes: (state) => {
             state.allBikes.filter(bike=>bike) // ✅ Ensures a new array instance
          },
    }
})

export const { setFilters, setFilteredBikes } = bikeSlice.actions
export default bikeSlice.reducer