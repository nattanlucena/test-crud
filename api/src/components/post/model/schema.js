/*
 * Module dependencies
 */
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import * as bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

let Schema = mongoose.Schema;

let PostDBModel = new Schema({
		title: {
				type: String
		},
		content: {
				type: String
		},
		category: {
				type: Array
		},
		tags: {
				type: Array
		},
		created_at: {
				type: Date,
				default: Date.now
		},
		updated_at: {
				type: Date
		}
});

PostDBModel = mongoose.model('posts', PostDBModel);

export default PostDBModel;
