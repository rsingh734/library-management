interface Member {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  membershipType: string;
  borrowedBooks: number[];
  contactPreferences: string;
}

let members: Member[] = [];
let nextId = 1;

export const MembersRepository = {
  getAll: () => members,
  getById: (id: string) => members.find(member => member.id === id),
  create: (member: Omit<Member, 'id'>) => {
    const newMember = { ...member, id: nextId.toString() };
    nextId++;
    members.push(newMember);
    return newMember;
  },
  update: (id: string, member: Partial<Member>) => {
    const index = members.findIndex(m => m.id === id);
    if (index === -1) return null;
    members[index] = { ...members[index], ...member };
    return members[index];
  },
  delete: (id: string) => {
    const index = members.findIndex(m => m.id === id);
    if (index === -1) return null;
    return members.splice(index, 1)[0];
  },
};
