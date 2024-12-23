/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_APP_API_URL: string;
    // Add other environment variables as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
