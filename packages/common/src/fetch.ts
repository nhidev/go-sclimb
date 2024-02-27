import type { IRequestInit } from '@24dot7/types';

import { STORAGE_ACCESS_TOKEN } from './constant';
import * as storage from './storage';

export class HttpError extends Error {
  status: number;

  response: Response;

  statusText: string;

  constructor(response: Response) {
    const { status, statusText } = response;

    super(statusText || String(status));

    this.name = 'HttpError';
    this.status = status;
    this.statusText = statusText;
    this.response = response;
  }
}

export async function fetchRequest<Data>(path: string, { host, method, headers, ...rest }: IRequestInit = {}) {
  const apiDomain = host ?? (import.meta.env.VITE_BASE_API_URL as string) ?? '';
  const token = storage.get<string>(STORAGE_ACCESS_TOKEN);

  const headersConfig: HeadersInit = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(headers && { ...headers }),
  };

  const response = await fetch(`${apiDomain}${path}`, { method, headers: headersConfig, ...rest });

  if (response.ok) {
    return response.json() as Data;
  }

  // const errorData = (await response.json()) as Error;

  throw new HttpError(response);
}

export function sendJSON<Data>(
  path: string,
  params: Record<string, string | Blob> = {},
  { body, headers, ...rest }: IRequestInit = {}
) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(params)) formData.append(key, value);

  const config: IRequestInit = {
    body: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...(headers && { ...headers }),
    },
    ...rest,
  };

  return fetchRequest<Data>(path, config);
}

export function sendFormData<Data>(
  path: string,
  params: Record<string, string | Blob> = {},
  { body, headers, ...rest }: IRequestInit = {}
) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(params)) formData.append(key, value);

  const config: IRequestInit = {
    body: formData,
    headers: {
      ...(headers && { ...headers }),
    },
    ...rest,
  };

  return fetchRequest<Data>(path, config);
}
