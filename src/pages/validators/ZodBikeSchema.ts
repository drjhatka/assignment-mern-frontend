import { z } from 'zod'

// creating a schema for bike validation
const ZodBikeSchema = z.object({
    name: z
        .string()
        .min(1, 'Name is required') // Ensures the string is not empty
        .trim(),
    brand: z
        .string()
        .min(1, 'Brand is required') // Ensures the string is not empty
        .trim(),
    price: z
        .number()
        .min(0, 'Price cannot be negative or zero'), // Ensures price is not negative
    category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']),
    description: z
        .string()
        .min(1, 'Description is required') // Ensures the string is not empty
        .max(300, 'Description cannot be more than 300 characters')
        .trim(),
    quantity: z
        .number()
        .min(1, 'Quantity must be at least 1'), // Ensures quantity is at least 1
    inStock: z.boolean().default(true) // Default to true if not provided
});

export default ZodBikeSchema;
