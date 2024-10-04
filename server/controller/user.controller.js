import User from '../model/user.model.js';

export const createUser = async(req, res)=>{
    try{
        const newUser = new User(req.body);
        const {email} = newUser;

        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({message: "User already exists."})
        }
        const saveData = await newUser.save();
        // res.status(200).json(saveData);
        res.status(200).json({message:"User Created Successfully"});
    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}

export const getAllUser = async(req, res)=>{
    try{
        const userData = await User.find();

        if(!userData || userData.length === 0){
            return res.status(404).json({message: "Users not Found"})
        }
        res.status(200).json(userData);
    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}

export const getUserById = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({message: "Users not Found"})
        }
        res.status(200).json(userExist);
    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}


export const updateUser = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({message: "Users not Found"})
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body,{
            new:true
        })
        res.status(200).json(updatedData);
        // res.status(200).json({message:"User Updated Successfully"});
    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}

export const deleteUser = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({message: "Users not Found"})
        }
        const deletedData = await User.findByIdAndDelete(id)
        // res.status(200).json(deletedData);
        res.status(200).json({message:"User Deleted Successfully"});
    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}