'use strict'

const Pessoa = use('App/Models/Pessoa')

class PessoasController {
  async index ({response}) {
    let pessoas = await Pessoa.all()

    return response.json(pessoas)
  }

  async show ({params, response}) {
    const pessoa = await Pessoa.findOrFail(params.id)

    return response.json(pessoa)
  }

  async store({ request, response }) {
    const pessoa = this._persist(new Pessoa(), request)

    return response.status(201).json(pessoa)
  }

  async update ({params, request, response}) {
    const pessoa = this._persist(await Pessoa.findOrFail(params.id), request)

    return response.status(200).json(pessoa)
  }

  async _persist(pessoa, request) {
    pessoa.nome = request.input('nome')
    pessoa.sobrenome = request.input('sobrenome')
    pessoa.sexo = request.input('sexo')
    pessoa.profissao = request.input('profissao')
    pessoa.formacao = request.input('formacao')
    pessoa.email = request.input('email')
    pessoa.cidade = request.input('cidade')
    pessoa.estado = request.input('estado')

    await pessoa.save()

    return pessoa;
  }

  async destroy ({params, response}) {
    const pessoa = await Pessoa.findOrFail(params.id)

    await pessoa.delete()

    return response.status(204).json(null)
  }
}

module.exports = PessoasController
