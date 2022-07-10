import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        first_name: 'String',
        last_name: 'String',
        age: 'String',
        rank: 'String',
      },
    },
    two: {
      data: {
        first_name: 'String',
        last_name: 'String',
        age: 'String',
        rank: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
