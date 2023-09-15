
import express from 'express';

const router = express.Router();

import { addUser, addTranslation }  from "../Handlers/archiveHandlers.js"

router.post('/api/post-user', addUser);
router.post('/api/post-translation', addTranslation);

export default router;