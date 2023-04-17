import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillsSchema = new Schema({
  skill: String,
  hasSkill: Boolean,
})

const Skill = mongoose.model('Skill', skillsSchema)

export {
  Skill,
}