import {Router} from 'express';
import {
    createUserController,
    getUsersController,
    loginUserController,
    deleteUserController,
    getProfileController,
    updateUserController
} from '../controllers';
import { validateSchema, authUser, adminValidate } from '../middlewares';
import { userRegiterShape, userLoginShape, updateShape } from '../schemas';



const router = Router();

router.get('',authUser, adminValidate, getUsersController)
router.get('/profile', authUser, getProfileController)
router.post('', validateSchema(userRegiterShape), createUserController)
router.post('/login', validateSchema(userLoginShape), loginUserController)
router.delete('/delete/:uuid', authUser, adminValidate, deleteUserController)
router.patch('/:uuid', authUser, adminValidate, validateSchema(updateShape), updateUserController)

export default router;