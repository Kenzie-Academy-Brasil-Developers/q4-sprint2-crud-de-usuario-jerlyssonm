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

router.get('/users',authUser, adminValidate, getUsersController)
router.get('/users/profile', authUser, getProfileController)
router.post('/users', validateSchema(userRegiterShape), createUserController)
router.post('/login/', validateSchema(userLoginShape), loginUserController)
router.delete('/users/:uuid', authUser, adminValidate, deleteUserController)
router.patch('/users/:uuid', authUser, adminValidate, validateSchema(updateShape), updateUserController)

export default router;