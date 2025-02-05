import swaggerUi from 'swagger-ui-express'
import swaggerConfig from '../../build/swagger.json'

import './genres'
import './novel'

import router from './router'

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))

router.get('/', async (req, res) => {
    const dir = process.cwd()
    res.sendFile(`${dir}/index.html`)
})
