import mongoose from "mongoose";
// import bcrypt from 'bcryptjs'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
// userSchema.pre('save', function (next: any) {
//   // eslint-disable-next-line no-invalid-this
//   const user = this
//   // only hash the password if it has been modified (or is new)
//   if (!user.isModified('password')) return next()
//   user.password = bcrypt.hashSync(user.password, 10)
//   next()
// })
// // userSchema.pre('findOneAndUpdate', async function (next) {
// //   // Hash the user's password before updating the user in the database.
// //   if (this._update.password) {
// //     this._update.password = await bcrypt.hash(this._update.password, 10)
// //   }
// //   next()
// // })
// userSchema.statics.findByEmail = function (email: string) {
//   return this.findOne({ email })
// }
// userSchema.methods.validatePassword = async function (password: string) {
//   return bcrypt.compare(password, this.password)
// }
const User = mongoose.model("User", userSchema);
export default User;
