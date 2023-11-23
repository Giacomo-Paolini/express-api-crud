const express = require('express');
const router = express.Router();

router.post('/', postsController.store);
router.get('/:slug', postsController.show);
router.get('/', postsController.index);
router.put('/:slug', postsController.update);
router.delete('/:slug', postsController.destroy);