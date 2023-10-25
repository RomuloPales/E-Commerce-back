import { NextFunction, Request, Response } from "express";
import {  ObjectSchema } from "joi";


export function validateBody<T>(schema: ObjectSchema<T>): validationMiddleware {
  return validateSchema(schema, 'body');                  
}

function validateSchema(schema:ObjectSchema, type: 'body' | 'params' ) {
  return (req:Request, res:Response, next:NextFunction) => {
    const { error } = schema.validate(req[type], { abortEarly: false });
    if (error) {
      return res
        .status(422)
        .send(error.details.map((detail) => detail.message));
    }
    
    next();
  };
}








type validationMiddleware =(req:Request, res:Response, next:NextFunction) => void;