import Joi, { exist } from "joi";
import customErrorHandler from '../../services/customErrorHandler';
import connection from "../../lib/db";
const userController = {
    // register method
    register(req,res,next){

        const userSchema = Joi.object({
            name:Joi.string().min(3).max(30).required(),
            email:Joi.string().email(),
            password:Joi.string().min(6).max(10),
            confirm_password: Joi.ref('password'),
        });

        const {error} = userSchema.validate(req.body);
        if(error){
            return next(error);
        }
        res.json({'data' : 'hello from express'});
    },

    // Login function
    login(req,res,next){
      try{
        let query = "SELECT * FROM users where  email = "+"'"+ req.body.email+"'"+"";
        let items;
        console.log(query);
        connection.query(query, (err, result) => {
          if (err) throw err;
          items = result
          // console.log(result);
        })

        // console.log(items);
        if(items.length != 0 ){
            return next(customErrorHandler.alreadyExist('This is already taken in database'))
        }
      }catch(err){
        return next(err);
      }
      res.json({data:items});
    }
}


export default userController;