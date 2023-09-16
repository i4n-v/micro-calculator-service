import { NextFunction, Request, Response } from 'express';

class SumController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ service: 'SUBTRACTION', active: true });
    } catch (error) {
      next(error);
    }
  }

  async subtraction(request: Request, response: Response, next: NextFunction) {
    try {
      const { first_operand, second_operand } = request.body;

      if (!first_operand || !second_operand) {
        return response.status(400).json({ message: 'Os operandos são obrigatórios.' });
      }

      const result = first_operand - second_operand;

      return response.json({ first_operand, second_operand, result });
    } catch (error) {
      next(error);
    }
  }
}

export default new SumController();
