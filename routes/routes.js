const express = require('express')
const router = express.Router()

const controller = require('../controllers/controller')

//good
router.get('/', controller.getAll)

//good
router.post('/', controller.create)

//good
router.put('/:id', controller.update)

//good
router.delete('/:id', controller.removeWord)

//good.. when I didnt have def/ it kept getting confused with delete word
router.delete("/def/:DefId", controller.removeDef)

//good
router.get('/:name', controller.getByName)

//good 
router.post('/adddef/:WordId', controller.AddByDef)
//router.post('/:presId', sectionController.create)
//WordId HAS to match the... Word.findOne({_id:req.params.WordId})

module.exports = router