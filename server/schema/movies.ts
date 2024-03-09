import z from 'zod'

export const movieSchema = z.array(z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  id: z.number(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.string(),
  video: z.boolean()
}))
