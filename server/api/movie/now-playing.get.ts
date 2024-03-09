import getService from '../../utils/getService'

export default defineEventHandler(async () => {
  try {
    const response = await getService({
      path: 'movie/now_playing'
    })

    return response
  } catch (e) {
    console.error('Error fetching configuration', e)
  }
})
