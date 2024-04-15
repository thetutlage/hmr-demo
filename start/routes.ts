/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const PollsController = () => import('#controllers/polls_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [PollsController, 'index'])
