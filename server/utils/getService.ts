import { TEndpoints } from '../types/endpoints'

interface IGetService {
    path: TEndpoints,
    params?: Record<string, any>
}

const getService = async (args: IGetService) => {
  try {
    const API_KEY = process.env.TMDB_API_KEY
    const BASE_URL = process.env.TMDB_BASE_URL

    return await $fetch(args.path, {
      baseURL: BASE_URL,
      method: 'GET',
      params: {
        api_key: API_KEY,
        ...args.params
      },
      headers: {
        accept: 'application/json'
      }
    })
  } catch (e) {
    console.error('Error fetching data:', e)
  }
}

export default getService
