import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUsersService from '../services/ListUsersService';
import ResetPasswordService from '../services/ResetPasswordService';
import SendForgotPasswordEmailService from '../services/SendForgotPasswordEmailService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPasswordService = new ResetPasswordService();

    await resetPasswordService.execute({ password, token });

    return response.status(204).json();
  }
}
