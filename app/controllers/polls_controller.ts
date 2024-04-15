import type { HttpContext } from '@adonisjs/core/http'

export default class PollsController {
  async index({}: HttpContext) {
    return [
      {
        title: 'First pol',
      },
    ]
  }
}
