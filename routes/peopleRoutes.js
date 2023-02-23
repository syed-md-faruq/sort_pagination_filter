const express = require('express');
const router = express.Router();
const people_controller = require("../controllers/peoplecontroller");

router.get("/people_get_custom",people_controller.people_get_custom);
router.get("/people_get_all",people_controller.people_get_all);
router.get('/people/:id',people_controller.people_get)
router.post("/people_post",people_controller.people_post);
router.put("/people_put/:id",people_controller.people_put);
router.delete("/people_delete/:id",people_controller.people_delete);
module.exports = router;
