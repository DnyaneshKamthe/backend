import { asyncHandler } from "../utils/asyncHandler.js"


const registerUSer = asyncHandler(async (req,res) =>{
    res.status(200).json({
        message:"ok"
    })
})



export { registerUSer }