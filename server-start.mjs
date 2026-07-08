// Force the host to 0.0.0.0 so external traffic (like Railway's proxy) can reach the server
process.env.HOST = '0.0.0.0';
import('./.output/server/index.mjs');
