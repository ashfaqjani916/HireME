import {Request, Response} from "express"
import { User } from "../../models/User";
import axios from "axios";


export const createUser = async( req :Request, res: Response)=>{

  console.log("/createUser route is called ")
  console.log(req.body);
  const newUser = new User({
    username: req.body.name,
    email: req.body.email,
  });
  
  await newUser.save();
  res.send(newUser)
}

export const checkUser = async (req: Request, res: Response) => {
  console.log("/checkUser route is called");
  console.log(req.body);
  const { email} = req.body;

  try {
    console.log(email);
    const user = await User.findOne({ email });

    if (user) {
      res.send(user);
    } else {
        axios.post(`${process.env.BACKEND_URL}/createUser`, req.body )
    }
  }
  catch (error) {
    console.error("Error checking user:", error);
    res.status(500).json({ error: "Could not check user" });
  }

}
