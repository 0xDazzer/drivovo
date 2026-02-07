import { createDb } from 'mongoose';

export default createDb({
    url: process.env.DATABASE_URL,
});