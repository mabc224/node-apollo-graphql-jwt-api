import { SchemaDirectiveVisitor, ForbiddenError } from 'apollo-server-express';
import { defaultFieldResolver } from 'graphql';

class isAuthenticatedDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = function (...args) { // parent, args, context
      const { user } = args[2];
      if ((Object.keys(user || {}).length === 0)) {
        throw new ForbiddenError('Not authenticated as user.');
      }

      return resolve.apply(this, args);
    };
  }
}

export default isAuthenticatedDirective;
