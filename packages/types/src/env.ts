export interface ImportMetaEnv {
  readonly VITE_BASE_URL_ENDPOINT: string;
  readonly VITE_ACCESS_TOKEN: string;
  readonly VITE_ENVIRONMENT: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
