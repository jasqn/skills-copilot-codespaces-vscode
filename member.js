function skillMembers() {
  return {
    name: 'skillMembers',
    members: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'age',
        type: 'number',
      },
      {
        name: 'skills',
        type: 'skillMembers',
        isArray: true,
      },
    ],
  };
}