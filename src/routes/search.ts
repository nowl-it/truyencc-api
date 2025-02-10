import Searching from '@/crawler/search'
import router from './router'

router.get('/search/:search', async (req, res) => {
    const response = await Searching(req.params.search)

    res.json(response)
})
