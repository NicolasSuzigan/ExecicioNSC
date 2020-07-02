/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { validate } from 'gerador-validador-cpf';
import * as EmailValidator from 'email-validator';
import User from '../models/User';

class UserController {
  // Criação de um novo usuário
  public async store(req: Request, res: Response): Promise<Response> {
    const user = (req.body);
    if (validate(req.body.cpf)) {
      if (EmailValidator.validate(req.body.email)) {
        await User.create(req.body);
      } else { res.json({ message: 'E-mail invalido' }); }
    } else { res.json({ message: 'CPF invalido!' }); }

    return res.json(user);
  }

  // Exclusao de usuario por ID
  public async Delete(req: Request, res: Response): Promise<Response> {
    const userId = req.params.id;

    await User.findByIdAndDelete(userId);
    return res.json({ message: 'Usuario deletado!' });
  }

  // Updated de usuario por ID
  public async Updated(req: Request, res: Response): Promise<Response> {
    const userId = req.params.id;
    const updated = req.body;

    await User.findByIdAndUpdate(userId, updated);

    return res.json({ message: 'Usuario Alterado!' });
  }

  // Retorno de um usuário existente pelo ID
  public async indexId(req: Request, res: Response): Promise<Response> {
    const userId = req.params.id;

    const users = await User.findById(userId);
    return res.json(users);
  }

  // Retorno de um usuário existente pelo CPF
  public async indexCPF(req: Request, res: Response): Promise<Response> {
    const userCPF = req.params;

    const users = await User.findOne(userCPF);

    return res.json(users);
  }

  // Retorno de todos os usuários cadastrados
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }
}

export default new UserController();
