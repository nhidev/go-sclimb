interface ImportMetaEnv {
  readonly VITE_CLIENT_ID: string;
  readonly VITE_BASE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
