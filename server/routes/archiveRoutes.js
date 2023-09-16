
import express from 'express';

const router = express.Router();

import { addUser, addTranslation, getUserTranslations }  from "../Handlers/archiveHandlers.js"

router.post('/api/post-user', addUser);
router.post('/api/post-translation', addTranslation);

router.get('/api/get-translations/:user', getUserTranslations)

export default router;