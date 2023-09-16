import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import instance from '../config/axios.config';

class OperatorController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ service: 'ROOT', active: true });
    } catch (error) {
      next(error);
    }
  }

  async sum(request: Request, response: Response, next: NextFunction) {
    try {
      const { first_operand, second_operand } = request.body;

      const path = `${process.env.SUM_API_URL}/sum`;
      const serverResponse = await instance.post(path, {
        first_operand,
        second_operand,
      });

      return response.json(serverResponse.data);
    } catch (error) {
      next(error);
    }
  }

  async subtraction(request: Request, response: Response, next: NextFunction) {
    try {
      const { first_operand, second_operand } = request.body;

      const path = `${process.env.SUBTRACTION_API_URL}/subtraction`;
      const serverResponse = await instance.post(path, {
        first_operand,
        second_operand,
      });

      return response.json(serverResponse.data);
    } catch (error) {
      next(error);
    }
  }

  async multiplication(request: Request, response: Response, next: NextFunction) {
    try {
      const { first_operand, second_operand } = request.body;

      const path = `${process.env.MULTIPLICATION_API_URL}/multiplication`;
      const serverResponse = await instance.post(path, {
        first_operand,
        second_operand,
      });

      return response.json(serverResponse.data);
    } catch (error) {
      next(error);
    }
  }

  async division(request: Request, response: Response, next: NextFunction) {
    try {
      const { first_operand, second_operand } = request.body;

      const path = `${process.env.DIVISION_API_URL}/division`;
      const serverResponse = await instance.post(path, {
        first_operand,
        second_operand,
      });

      return response.json(serverResponse.data);
    } catch (error) {
      next(error);
    }
  }
}

export default new OperatorController();
