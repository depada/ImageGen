// import { defineConfig, loadEnv } from "vite";

// export default defineConfig(({ mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), "");
//   return {
//     // vite config
//     define: {
//       REACT_APP_FIREBASE_API_KEY: env.REACT_APP_FIREBASE_API_KEY,
//       REACT_APP_FIREBASE_AUTH_DOMAIN: env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//       REACT_APP_FIREBASE_PROJECT_ID: env.REACT_APP_FIREBASE_PROJECT_ID,
//       REACT_APP_FIREBASE_STORAGE_BUCKET: env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//       REACT_APP_FIREBASE_MESSAGING_SENDER_ID:
//         env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//       REACT_APP_FIREBASE_APP_ID: env.REACT_APP_FIREBASE_APP_ID,
//       REACT_APP_FIREBASE_MEASUREMENT_ID: env.REACT_APP_FIREBASE_MEASUREMENT_ID,
//     },
//   };
// });
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {

const env = loadEnv(
  'mock', 
  process.cwd(),
  '' 
)
  const processEnvValues = {
    'process.env': Object.entries(env).reduce(
      (prev, [key, val]) => {
        return {
          ...prev,
          [key]: val,
        }
      },
      {},
    )
  }

  return {
    plugins: [vue()],
    define: processEnvValues
  }
}