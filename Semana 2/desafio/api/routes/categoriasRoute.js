const {Router} = require ('express')
const CategoriaController = require('../controllers/CategoriaController')

const router = Router()


router.post('/categorias', CategoriaController.criarCategoria)
router.get('/categorias', CategoriaController.buscarTudo)
router.get('/categorias/prodCatAtvM10', CategoriaController.buscarPorAtivas)

module.exports = router