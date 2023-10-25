import bcrypt  from 'bcrypt';
import { UserCreate } from "@/interfaces/UserCreate";
import userRepository from '@/repository/userRepository';


async function createUser({name, email, password, userImage }:UserCreate){

    await validateEmail(email);

    const passwordHash:string = await bcrypt.hash(password, 10);

    console.log("chegguei aqui")
}

async function validateEmail(email:string){
   const userWithThisEmail =  await userRepository.findEmail(email);

   if (userWithThisEmail)
   throw new Error("Email already exists");

}





const autheticationService = {
    createUser
  }
  export default autheticationService;