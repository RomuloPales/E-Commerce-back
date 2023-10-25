
import { registerUser } from '@/controllers/authcontroler';
import { validateBody } from '@/middleware/schemaValidationMiddleware';

import { authSchema } from '@/schemas/authschema';
import {Router} from 'express'

export const authRouter = Router();


authRouter.post('/signup', validateBody(authSchema), registerUser );
// authRouter.post('/signin');


