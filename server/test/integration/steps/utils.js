export function getValidPayload(payloadType) {
  const payloadTypeLowerCase = payloadType.toLowerCase();
  switch(payloadTypeLowerCase) {
    case 'create user': 
      return {
        username: 'test1',
        firstName: 'test',
        lastName: 'one',
        email: 'test@one.com',
        password: 'testpw'
      };
  }
}

