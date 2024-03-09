import getService from '../../utils/getService'
import { movieSchema } from '~/server/schema/movies'
interface IReturn {
    results: any[]
    page: number
}
export default defineEventHandler(async () => {
  try {
    const response = await getService({
      path: 'movie/upcoming'
    }) as IReturn

    return movieSchema.parse(response.results)
  } catch (e) {
    console.error('Error fetching configuration', e)
  }
})
