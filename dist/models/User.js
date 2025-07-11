import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
// Uncomment and modify the following if you need password hashing or additional methods
// UserSchema.pre('save', function (next) {
//   const user = this;
//   if (!user.isModified('password')) return next();
//   user.password = bcrypt.hashSync(user.password, 10);
//   next();
// });
// UserSchema.statics.findByEmail = function (email: string) {
//   return this.findOne({ email });
// };
// UserSchema.methods.validatePassword = async function (password: string) {
//   return bcrypt.compare(password, this.password);
// };
export const User = mongoose.models.User || mongoose.model("User", UserSchema);
//# sourceMappingURL=User.js.map