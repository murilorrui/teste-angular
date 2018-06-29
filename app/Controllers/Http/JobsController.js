'use strict'

const Job = use('App/Models/Job')

class JobsController {
  async index ({response}) {
    let profissoes = await Job.all()

    return response.json(profissoes)
  }

  async show ({params, response}) {
    const profissao = await Job.findOrFail(params.id)

    return response.json(profissao)
  }

  async store({ request, response }) {
    const profissao = this._persist(new Job(), request)

    return response.status(201).json(profissao)
  }

  async update ({params, request, response}) {
    const profissao = this._persist(await Job.findOrFail(params.id), request)

    return response.status(200).json(profissao)
  }

  async _persist(profissao, request) {
    profissao.nome = request.input('nome')

    await profissao.save()

    return profissao;
  }

  async destroy ({params, response}) {
    const profissao = await Job.findOrFail(params.id)

    await profissao.delete()

    return response.status(204).json(null)
  }
}

module.exports = JobsController
