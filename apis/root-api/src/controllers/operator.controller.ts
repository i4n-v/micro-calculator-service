import { NextFunction, Request, Response } from 'express';

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
      return response.json({ result: 'SUM' });
    } catch (error) {
      next(error);
    }
  }

  async subtraction(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ result: 'SUBTRACTION' });
    } catch (error) {
      next(error);
    }
  }

  async multiplication(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ result: 'MULTIPLICATION' });
    } catch (error) {
      next(error);
    }
  }

  async divisition(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ result: 'DIVISION' });
    } catch (error) {
      next(error);
    }
  }
}

export default new OperatorController();
