import { NextFunction, Request, Response } from 'express';

class DivisionController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ service: 'DIVISION', active: true });
    } catch (error) {
      next(error);
    }
  }

  async division(request: Request, response: Response, next: NextFunction) {
    const { first_operand, second_operand } = request.body;

    if (second_operand === 0) {
      throw new Error('Não é possível dividir por zero');
    }

    try {
      if (!first_operand || !second_operand) {
        return response.status(400).json({ message: 'Os operandos são obrigatórios.' });
      }

      const result = first_operand / second_operand;

      return response.json({ first_operand, second_operand, result });
    } catch (error) {
      next(error);
    }
  }
}

export default new DivisionController();
