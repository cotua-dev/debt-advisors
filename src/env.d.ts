/// <reference types="astro/client"/>

interface ImportMetaEnv {
    readonly PUBLIC_GOOGLE_API_KEY: string;
    readonly PUBLIC_API_URL: string;
    readonly PUBLIC_COTUA_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
