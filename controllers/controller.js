const express = require('express')
const Word = require('../models/Word')
const Definition = require('../models/Definition')

const getAll = (req, res) => {
    Word.find({}).populate('definitions').then(word => {
        res.json(word)
    })
}

// get individual word
const getByName = (req, res) => {
    Word.findOne({"word": req.params.name}).populate('definitions').then(word => res.json(word))
}
//not sure where to put .populate. I suppose its on the parent and it knows populate this child

const create = (req, res) => {
    Word.create(req.body).then(word => res.json(word))
}


//i need update for words for the notes
const update = (req, res) => {
    Word.findByIdAndUpdate(req.params.id, req.body).then(word => res.json(word))
}

// removes individual word
const removeWord = (req, res) => {
    Word.remove({_id: req.params.id}).then(word => res.json({
        "status": "success",
        "msg": "favorite deleted"
    }))
}



const removeDef = (req, res) => {
    Definition.remove({_id: req.params.DefId}).then(def => res.json({
        "status": "success",
        "msg": "def deleted"
    }))
}



const AddByDef = (req, res) => {
    Definition.create(req.body).then(def => Word.findOne({_id:req.params.WordId}).populate('definitions').then(W => {
        W.definitions.push(def._id)
        W.save()
        res.json(W)
    }))
}

//----------------
//didnt
//add def
// const AddByDef = (req, res) => {
//     Word.findOne({_id: req.params.name}).then(word =>{
//         Definition.create(word.definitions).then(wordwithdef => {
//             res.json(wordwithdef)
//             wordwithdef.save()
            
//         })
//     })
// }


//.populate('Definition')
//it seems like populate only works in tandum with finding the parent

//worked




// const AddByDef = (req, res) => {
//     Definition.create(req.body).then(def => Word.findOne({_id:req.params.WordId}).populate('definitions').then(W => {
//         W.definitions.push(def._id)
//         W.save()
//         res.json(W)
//     }))
// }

//reference
// const create = (req, res) => {
//     Section.create(req.body).then(sect => Presentation.findOne({_id:req.params.presId}).then(pres => {
//         pres.sections.push(sect._id)
//         pres.save()
//         res.json(pres)
//     }))
// }
//----------------


module.exports = {
    getAll,
   create,
   getByName,
    update,
    removeWord,
    AddByDef,
    removeDef
}