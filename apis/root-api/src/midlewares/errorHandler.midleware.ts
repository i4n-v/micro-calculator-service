/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import axios from 'axios';

function errorHandlerMidleWare(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (axios.isAxiosError(error) && error.response) {
    return response.status(error.response.status).json(error.response.data);
  }

  console.log('❗ ERROR HANDLER: ', error);
  response.status(500).json({ message: 'Erro interno do servidor root.' });
}

export default errorHandlerMidleWare;
