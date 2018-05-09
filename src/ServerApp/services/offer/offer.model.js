import UniversalSchema from 'lego-starter-kit/utils/UniversalSchema';

export function getSchema(ctx, module) {
  const schema = new UniversalSchema({
    userId: {
      type: ctx.db.Schema.Types.ObjectId,
      ref: 'User',
      index: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    about: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    },
    language: {
      type: String,
      default: null,
    },
    info: {
      type: Object,
      default: {},
    },
  });

  schema.virtual('user', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id',
    justOne: true,
  });

  return schema;
}

export default (ctx, module) => (
  ctx.db.model('Offer', getSchema(ctx, module).getMongooseSchema(), 'offers');
);
