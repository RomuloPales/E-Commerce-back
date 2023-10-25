import db from "@/config/database";

async function findEmail(email:string) {

    const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
    return user.rows[0];
    
}

export default { findEmail };