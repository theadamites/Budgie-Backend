const express = require ('express')
const router = express. Router ( )
const schemas= require('../schemas')

router.get ('/', (req, res) => {

    const profile=[
        ]
    res.send(profile)

})



// pulls all of the saved Profiles
// Update the route to fetch profiles from the database
router.get('/profiles', async (req, res) => {
    try {
      const profiles = await schemas.Profiles.find();
      res.json(profiles);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Saves A new profile to the Data Base
router.post('/newProfile', async(req, res) => {
    // const email = req. body. email
    // const website = req. body. website
    const {FirstName, LastName, Occupation, Age, Income, UserName, Password, Email, AccountBalance, Expense, BudgetAllocations, SavingsGoal ,admin} =  req. body
    const ProfileData = {
        FirstName: FirstName, 
        LastName: LastName, 
        Occupation: Occupation,
        Age: Age, 
        Income: Income, 
        UserName: UserName, 
        Password: Password, 
        Email:Email,
        AccountBalance:AccountBalance,
        Expense:Expense,
        BudgetAllocations:BudgetAllocations,
        SavingsGoal:SavingsGoal,
        admin:admin,
    }
    const newProfile = new schemas.Profiles(ProfileData)
    const saveContact = await newProfile.save ()
    console.log("User Saved Successfully")
    res.send ( 'Message sent. Thank you.')
    })



// Finds a specific profile to Log in
    router.post('/login', async (req, res) => {
        const { username, password } = req.body;
      
        try {
          // Check if the user exists in the database
          const user = await schemas.Profiles.findOne({ UserName: username, Password: password });
      
          if (user) {
            res.json(user);
          } else {
            res.status(404).json({ message: 'User not found' });
          }
        } catch (error) {
          console.error('Error authenticating user:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        } 
      });





      router.post('/update', async (req, res) => {
        const editedUser = req.body; // Assuming the edited user data is sent in the request body
        console.log(editedUser)
        try {
          // Find the user with the same username and password
          const filter = { UserName: editedUser.UserName, Password: editedUser.Password };
          const updatedUser = await schemas.Profiles.findOneAndUpdate(filter, editedUser, { new: true });
      
          if (updatedUser) {
            res.json(updatedUser);
            console.log("daddy")
          } else {
            res.status(404).json({ message: 'User not found' });
          }
        } catch (error) {
          console.error('Error updating user profile:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
      


      router.post('/delete', async (req, res) => {
        const userToDelete = req.body; // Assuming the user's information is sent in the request body
        console.log(userToDelete);
      
        try {
          // Find the user with the same username and password
          const filter = { UserName: userToDelete.UserName, Password: userToDelete.Password };
          const deletedUser = await schemas.Profiles.findOneAndDelete(filter);
      
          if (deletedUser) {
            res.json(deletedUser);
            console.log("Deleted")
          } else {
            res.status(404).json({ message: 'User not found' });
          }
        } catch (error) {
          console.error('Error deleting user profile:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
      
      





module.exports = router