export type ApiConfig = {
  baseURL: string
}

export const CONFIG: ApiConfig = {
  baseURL: process.env.API_URL || 'http://localhost:8080'
}
