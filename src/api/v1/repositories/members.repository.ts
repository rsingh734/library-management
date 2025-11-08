interface Member {
  memberId: string;
  name: string;
  joinDate: string;
  membershipType: string;
  borrowedBooks: number[];
  contactPreferences: string;
}

let members: Member[] = [];

export const MembersRepository = {
  getAll: () => members,
  getById: (id: number) => members[id],
  create: (member: Member) => {
    members.push(member);
    return member;
  },
  update: (id: number, member: Member) => {
    members[id] = member;
    return members[id];
  },
  delete: (id: number) => members.splice(id, 1)[0],
};
