import express from 'express'
import controller  from '../controllers/Team.js'

const router = express.Router();

router.get('/create', controller.createTeam)

export default router;