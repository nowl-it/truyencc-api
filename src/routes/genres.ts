import GenresController from '@/controllers/genres'
import router from './router'

const genres = new GenresController()

router.get('/genre', async (req, res) => {
    const response = await genres.getAll()
    
    console.log("TOTAL:", response.length);
    res.json(response)
})
