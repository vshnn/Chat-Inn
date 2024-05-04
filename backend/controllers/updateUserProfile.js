import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


export const updateUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const { fullName, username, password } = req.body;

        console.log("userId: ", userId);
        console.log("fullName: ", fullName);
        console.log("username: ", username);
        console.log("password: ", password);

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if(password == ""){
            console.log("Password is empty");
            user.fullName = fullName; 
            user.username = username;
            user.password = user.password;
        }else{
            user.fullName = fullName; 
            user.username = username;
            user.password = await bcrypt.hash(password, 12);
        }

        console.log("User: ", user);

        await user.save();

        res.status(200).json({ message: "Profile updated successfully" });
    }
    catch (error) {
        console.error("Error in updateUserProfile: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}