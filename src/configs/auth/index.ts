import dotenv from 'dotenv';

dotenv.config()

const config = {
    secret : process.env.SECRET_KEY,
    expires_in : process.env.ESPIRE_IN
}

export default config