
import express from 'express';

const router = express.Router();

import { addUser }  from "../Handlers/archiveHandlers.js"

router.post('/api/post-user', addUser);

export default router;