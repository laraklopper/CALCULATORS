//ensureJwtSecret.js
/*Load environment variables from a 
.env file using the dotenv package*/
 
require('dotenv').config(); // Load environment variables from a .env file
const fs = require('fs'); // Import the file system module
const path = require('path'); // Import the path module
const crypto = require('crypto'); // Import the crypto module for generating random bytes

// Absolute path to the .env file in the project root
const envFilePath = path.join(process.cwd(), '.env');

// Function to ensure that the JWT_SECRET is defined in the .env file
function ensureEnvHasKey(content, keyLine) {
    // Check if JWT_SECRET_KEY already exists anywhere in the file
    const hasKey = /(^|\r?\n)JWT_SECRET_KEY\s*=/.test(content);
    // If key does not exist, append it safely
    if (!hasKey) {
        return content + (content.endsWith('\n') ? '' : '\n') + keyLine;
    }
    // Replace empty or malformed JWT_SECRET_KEY lines
    return content.replace(
        /(^|\r?\n)JWT_SECRET_KEY\s*=\s*(?:\r?\n|$)/,
        `${process.platform === 'win32' ? '\r\n' : '\n'}${keyLine}`
    );
}

// Function to ensure that the JWT_SECRET_KEY is defined in the .env file
function ensureJwtSecret({ failIfMissingInProd = true } = {}) {
    // Determine environment (default: development)
    const nodeEnv = (process.env.NODE_ENV || 'development').toLowerCase();
    let jwtKey = (process.env.JWT_SECRET_KEY || '').trim();// Read existing JWT secret from environment
    /* Conditional rendering to check if the JWT key already exists
    if the key exists reuse it*/
    if (jwtKey) {
        return jwtKey;
    }
    // In production, missing JWT secret is a fatal error
    if (nodeEnv === 'production' && failIfMissingInProd) {
        console.error('[FATAL: ensureJwtSecret.js] JWT_SECRET_KEY is missing in production. Set it in the environment or .env.');
        process.exit(1);
    }

    // Generate a cryptographically secure random key (512-bit)
    jwtKey = crypto.randomBytes(64).toString('hex');
    // Format for .env
    const jwtSecretLine = `JWT_SECRET_KEY=${jwtKey}\n`;

    // If .env exists, update it
    if (fs.existsSync(envFilePath)) {
        const envContent = fs.readFileSync(envFilePath, 'utf-8');
        const updated = ensureEnvHasKey(envContent, jwtSecretLine.trim());
        // Only write if content changed
        if (updated !== envContent) {
            fs.writeFileSync(envFilePath, updated, { mode: 0o600 });
            console.log('[INFO] JWT secret key saved to .env');
        }
    } else {// Otherwise, create .env and write key
        fs.writeFileSync(envFilePath, jwtSecretLine, { mode: 0o600 });
        console.log('[INFO] .env created and JWT secret key added');
    }
    // Make key immediately available in runtime
    process.env.JWT_SECRET_KEY = jwtKey;
    return jwtKey;
}

module.exports = ensureJwtSecret; // Export the function for use in other parts of the application