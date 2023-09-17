// @ts-nocheck
import { buildASTSchema } from 'graphql'

const schemaAST = {
  kind: 'Document',
  definitions: [
    {
      kind: 'SchemaDefinition',
      operationTypes: [
        {
          kind: 'OperationTypeDefinition',
          operation: 'query',
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Query',
            },
          },
        },
        {
          kind: 'OperationTypeDefinition',
          operation: 'subscription',
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Subscription',
            },
          },
        },
      ],
      directives: [],
    },
    {
      kind: 'DirectiveDefinition',
      description: {
        kind: 'StringValue',
        value:
          'Marks the GraphQL type as indexable entity.  Each type that should be an entity is required to be annotated with this directive.',
      },
      name: {
        kind: 'Name',
        value: 'entity',
      },
      arguments: [],
      repeatable: false,
      locations: [
        {
          kind: 'Name',
          value: 'OBJECT',
        },
      ],
    },
    {
      kind: 'DirectiveDefinition',
      description: {
        kind: 'StringValue',
        value: 'Defined a Subgraph ID for an object type',
      },
      name: {
        kind: 'Name',
        value: 'subgraphId',
      },
      arguments: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
      ],
      repeatable: false,
      locations: [
        {
          kind: 'Name',
          value: 'OBJECT',
        },
      ],
    },
    {
      kind: 'DirectiveDefinition',
      description: {
        kind: 'StringValue',
        value:
          'creates a virtual field on the entity that may be queried but cannot be set manually through the mappings API.',
      },
      name: {
        kind: 'Name',
        value: 'derivedFrom',
      },
      arguments: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'field',
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
      ],
      repeatable: false,
      locations: [
        {
          kind: 'Name',
          value: 'FIELD_DEFINITION',
        },
      ],
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'BigDecimal',
      },
      directives: [],
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'BigInt',
      },
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'BlockChangedFilter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'number_gte',
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Block_height',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hash',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'number',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'number_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Bytes',
      },
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Certificate',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'course',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Course',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledUsers',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User',
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Certificate_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Course_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledUsers',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledUsers_not',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledUsers_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledUsers_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledUsers_not_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledUsers_not_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledUsers_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'and',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Certificate_filter',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'or',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Certificate_filter',
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Certificate_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__creatorId',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__courseId',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__address',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__name',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__symbol',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__courseURI',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__resourceAddress',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__certificateAddress',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__mintModule',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateBaseURI',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateName',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateSymbol',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledUsers',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Course',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creatorId',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'courseId',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'address',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'symbol',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'resources',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Resource_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Resource_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Resource',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'educator',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Educator',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'certificate',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Certificate',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Course_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'creatorId',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'creatorId_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'creatorId_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'creatorId_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'creatorId_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'creatorId_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'creatorId_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'creatorId_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseId',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseId_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseId_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseId_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseId_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseId_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseId_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseId_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resources_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Resource_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Educator_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Certificate_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'and',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Course_filter',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'or',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Course_filter',
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Course_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'creatorId',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseId',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'address',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'courseURI',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceAddress',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificateAddress',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'resources',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator__id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator__address',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator__educatorId',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'educator__username',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate__id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate__certificateAddress',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate__certificateBaseURI',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate__certificateName',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'certificate__certificateSymbol',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'mintModule',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Educator',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'address',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'educatorId',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'username',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'courses',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Course_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Course_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Course',
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Educator_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educatorId',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educatorId_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educatorId_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educatorId_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educatorId_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educatorId_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educatorId_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'educatorId_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'courses_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Course_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'and',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Educator_filter',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'or',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Educator_filter',
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Educator_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'address',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'educatorId',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'username',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'courses',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ScalarTypeDefinition',
      description: {
        kind: 'StringValue',
        value: '8 bytes signed integer\n',
        block: true,
      },
      name: {
        kind: 'Name',
        value: 'Int8',
      },
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      description: {
        kind: 'StringValue',
        value: 'Defines the order direction, either ascending or descending',
        block: true,
      },
      name: {
        kind: 'Name',
        value: 'OrderDirection',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'asc',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'desc',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Query',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'course',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Course',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'courses',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Course_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Course_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Course',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'resource',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Resource',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'resources',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Resource_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Resource_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Resource',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'certificate',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Certificate',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'certificates',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Certificate_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Certificate_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Certificate',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'educator',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Educator',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'educators',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Educator_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Educator_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Educator',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'users',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'User',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'Access to subgraph metadata',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_meta',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: '_Meta_',
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Resource',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'course',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Course',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'resourceId',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Resource_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'course_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Course_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceId',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceId_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceId_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceId_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceId_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceId_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceId_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceId_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'and',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Resource_filter',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'or',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Resource_filter',
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Resource_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__creatorId',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__courseId',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__address',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__name',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__symbol',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__courseURI',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__resourceAddress',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__certificateAddress',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'course__mintModule',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceURI',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'resourceId',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Subscription',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'course',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Course',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'courses',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Course_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Course_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Course',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'resource',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Resource',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'resources',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Resource_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Resource_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Resource',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'certificate',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Certificate',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'certificates',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Certificate_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Certificate_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Certificate',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'educator',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Educator',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'educators',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Educator_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Educator_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Educator',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'users',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'User',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'Access to subgraph metadata',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_meta',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: '_Meta_',
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'User',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'address',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'owlId',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'username',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledCourses',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Course_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Course_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Course',
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'User_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'address_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'owlId',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'owlId_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'owlId_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'owlId_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'owlId_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'owlId_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'owlId_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'owlId_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'username_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledCourses',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledCourses_not',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledCourses_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledCourses_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledCourses_not_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledCourses_not_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledCourses_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Course_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'and',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User_filter',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'or',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User_filter',
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'User_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'address',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'owlId',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'username',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'enrolledCourses',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: '_Block_',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'The hash of the block',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'hash',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'The block number',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'number',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'Integer representation of the timestamp stored in blocks for the chain',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value: 'The type for the top-level _meta field',
        block: true,
      },
      name: {
        kind: 'Name',
        value: '_Meta_',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'Information about a specific subgraph block. The hash of the block\nwill be null if the _meta field has a block constraint that asks for\na block number. It will be filled if the _meta field has no block constraint\nand therefore asks for the latest  block\n',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'block',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: '_Block_',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'The deployment ID',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'deployment',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'If `true`, the subgraph encountered indexing errors at some past block',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'hasIndexingErrors',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: '_SubgraphErrorPolicy_',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          description: {
            kind: 'StringValue',
            value:
              'Data will be returned even if the subgraph has indexing errors',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'allow',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          description: {
            kind: 'StringValue',
            value:
              'If the subgraph has indexing errors, data will be omitted. The default.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'deny',
          },
          directives: [],
        },
      ],
      directives: [],
    },
  ],
}

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true,
})
