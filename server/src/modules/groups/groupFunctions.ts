import { Request, Response } from "express";
import { Group } from "../../models/Group";
import {generateCode} from '../../utils/generateCode'
import { User } from "../../models/User";
const uuid = require('uuid');



export const createGroup = async (req: Request, res: Response) => {
  console.log("/createGroup route is called");
  
  const { userId, name } = req.body;

  try {
    const newGroup = new Group({
      groupID: uuid.v4(),
      name,
      joinCode: generateCode(), // Generate a unique join code
      createdBy: userId,
      members: [userId],  // Add creator to the members list
    });

    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (error) {
    console.error("Error creating group:", error);
    res.status(500).json({ error: "Could not create group" });
  }
};


export const getUserGroups = async (req: Request, res: Response) => {
  console.log("/getUserGroups route is called");
  const { email } = req.params;

  try {
    // Find the user by email
    const user = await User.findOne({ email: email as string });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find all groups where the user is a member
    const groups = await Group.find({ members: user._id });

    res.json({ groups });
  } catch (error) {
    console.error('Error fetching user groups:', error);
    res.status(500).json({ error: 'An error occurred while fetching groups' });
  }
};


export const joinGroup = async (req: Request, res: Response) => {
  const { email, code } = req.body;

  try {
    // Check if the team with the given code exists
    const team = await Group.findOne({ joinCode: code });

    if (!team) {
      return res.status(404).json({ error: 'Invalid code. Team not found.' });
    }

    // Find the existing user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found. Please register first.' });
    }

    // Check if user is already part of the team
    if (team.members.includes(user._id)) {
      return res.status(400).json({ error: 'User is already a member of this team.' });
    }

    // Add user to the team's members array
    team.members.push(user._id);
    await team.save();

    res.json({ message: `User ${user.username} joined team: ${team.name}`, teamCode: code });
  } catch (error) {
    console.error('Error joining team:', error);
    res.status(500).json({ error: 'An error occurred while joining the team.' });
  }
};


export const deleteGroup = async (req: Request, res: Response) => {
  console.log("/deleteGroup route is called");
  const { groupId } = req.params;
  const { userId } = req.body;

  try {
    const group = await Group.findById(groupId);

    // Check if the group exists
    if (!group) {
    return res.status(404).json({ error: "Group not found" });
  }

    if (group.createdBy?.toString() !== userId) {
      return res.status(403).json({ error: "Unauthorized to delete this group" });
    }

    await Group.findByIdAndDelete(groupId);
    res.status(200).json({ message: "Group deleted successfully" });
  } catch (error) {
    console.error("Error deleting group:", error);
    res.status(500).json({ error: "Could not delete group" });
  }
};
