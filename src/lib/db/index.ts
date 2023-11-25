import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import * as dotenv from 'dotenv';

dotenv.config({
	path: '.env'
});

neonConfig.fetchConnectionCache = true;

const sql = neon("postgres://prabhukiran426:W28yjINBOZnM@ep-round-flower-98276924.us-east-2.aws.neon.tech/corgi");
export const db = drizzle(sql, { schema });
