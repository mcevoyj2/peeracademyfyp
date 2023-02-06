const User = require('../model/userModel');
const bcrypt = require('bcrypt');

module.exports.register = async (req,res,next) => {
    try{
    const { username,studentnumber,email,password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
    return res.json({ msg: "Username already exists", status: false});
    const studentnumberCheck = await User.findOne({ studentnumber });
    if (studentnumberCheck)
    return res.json({ msg: "Student number already in use", status: false});
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
    return res.json({ msg: "Email already registered", status: false});
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        email,
        username,
        studentnumber,
        password: hashedPassword,
    });
    delete user.password;
    return res.json ({status:true,user});
} catch(ex) {
    next(ex);
}
};

module.exports.login = async (req,res,next) => {
    try{
    const { username,password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
    return res.json({ msg: "Username or password incorrect", status: false});
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) 
    return res.json({ msg: "Username or password incorrect", status: false});
    delete user.password;
    return res.json ({status:true,user});
} catch(ex) {
    next(ex);
}
};