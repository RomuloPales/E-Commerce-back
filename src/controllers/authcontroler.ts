import bcrypt from "bcrypt"
import { NextFunction, Request, Response } from "express";
import createUser from "../services/userService";
import { UserCreate } from "@/interfaces/UserCreate";
import autheticationService from "../services/userService";

 export async function  registerUser(req:Request, res:Response, next:NextFunction) {

    const { name, email, password, userImage } = req.body as UserCreate;
    try {
      const result = await autheticationService.createUser( {name, email, password, userImage} );
    
    } catch (err) {
      console.log(err)
      return res.status(400).json({ errors: [err.message] });
    }
  }

