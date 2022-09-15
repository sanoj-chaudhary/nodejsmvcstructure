
class customErrorHandler extends Error {
    constructor(status, msg){
        super();
        this.status = status;
        this.message = msg;
    }

    static alreadyExist(message){

        return new customErrorHandler(409, message);
    }
}

export default customErrorHandler;