import NovelController from '@/controllers/novel'
import router from '@/routes/router'

const {
    getFirstPage,
    getPage,
    getNewFirstPage,
    getNewPage,
    getNovel,
    getHotFirstPage,
    getHotPage,
    getGenreFirstPage,
    getGenrePage,
    getChapter,
    readChapter,
    getChapterByPage,
} = new NovelController()

router.get('/novel', async (req, res) => {
    const novelFull = await getFirstPage()

    console.log(novelFull.length)

    res.json(novelFull)
})

router.get('/novel/trang-:page', async (req, res) => {
    const page = parseInt(req.params.page)
    const novelFull = await getPage(page)
    res.json(novelFull)
})

router.get('/novel/new', async (req, res) => {
    const newNovel = await getNewFirstPage()
    res.json(newNovel)
})

router.get('/novel/new/trang-:page', async (req, res) => {
    const page = parseInt(req.params.page)
    const hot = await getNewPage(page)
    res.json(hot)
})

router.get('/novel/hot', async (req, res) => {
    const hot = await getHotFirstPage()
    res.json(hot)
})

router.get('/novel/hot/trang-:page', async (req, res) => {
    const page = parseInt(req.params.page)
    const hot = await getHotPage(page)

    res.json(hot)
})

router.get('/novel/genre/:genre', async (req, res) => {
    const genre = req.params.genre
    const novelFull = await getGenreFirstPage(genre)
    res.json(novelFull)
})

router.get('/novel/genre/:genre/trang-:page', async (req, res) => {
    const genre = req.params.genre
    const page = parseInt(req.params.page)
    const novelFull = await getGenrePage(genre, page)
    res.json(novelFull)
})

router.get('/novel/:id', async (req, res) => {
    const novelInfo = await getNovel(req.params.id)

    res.json(novelInfo)
})

router.get('/novel/:id/chapter', async (req, res) => {
    const chapter = await getChapter(req.params.id)
    res.json(chapter)
})

router.get('/novel/:id/chapter/trang-:page', async (req, res) => {
    const chapter = await getChapterByPage(
        req.params.id,
        parseInt(req.params.page),
    )
    res.json(chapter)
})

router.get('/novel/:id/chapter/:chapter', async (req, res) => {
    const id = req.params.id
    const chapter = parseInt(req.params.chapter)
    const content = await readChapter(id, chapter)
    res.json(content)
})
