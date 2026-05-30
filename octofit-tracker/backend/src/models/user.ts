import { Schema, model, Document } from 'mongoose'

export interface User extends Document {
  name: string
  email: string
}

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
)

export default model<User>('User', userSchema)
