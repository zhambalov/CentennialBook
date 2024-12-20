const clubSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    members: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      role: {
        type: String,
        enum: ['member', 'moderator', 'admin'],
        default: 'member'
      }
    }],
    events: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event'
    }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const Event = mongoose.model('Event', eventSchema);
  const Club = mongoose.model('Club', clubSchema);
  
  module.exports = { Event, Club };