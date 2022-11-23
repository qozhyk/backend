const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

/* GET ALL PRODUCTS */
router.get('/', function (req, res) {
    database.table('b_user as u')
        // .join([
        //     {
        //         table: "b_file as f",
        //         on: `f.id = u.personal_photo`
        //     }
        // ])
        .getAll().then((list) => {
        if (list.length > 0) {
            res.json({users: list});
        } else {
            res.json({message: 'NO USER FOUND'});
        }
    }).catch(err => res.json(err));
});

module.exports = router;
