class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went Wrong",
        errors = [],
        statck = ""
    ){
        supper(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = errors


        if(statck){
            this.statck= statck

        }else{
            Error.captureStackTrace(this, this.constructor)           
        }

    }
}


export {ApiError}