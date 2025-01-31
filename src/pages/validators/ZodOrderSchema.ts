import { z } from 'zod'

// creating a schema for bike validation
const ZodOrderSchema = z.object({
    email: z.string().email().min(1, 'Email is required').trim(), // Ensures the string is not empty,
    productId: z.string().trim(),
    quantity: z.number().min(0, 'Quantity cannot negative or zero'), // Ensures price is not negative
    totalPrice: z.number().min(0,'Total Price cannot negative or zero'),
});

export default ZodOrderSchema;
