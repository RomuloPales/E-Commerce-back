import joi from 'joi';

export const authSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).required(),
    userImage: joi.string().required(),
});