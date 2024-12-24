import { Conversation, Message, User } from '@prisma/client';

export type FullMessageType = Message & {
    sender: User;
    seen: User[];
};

// populate the users and messages
export type FullConversationType = Conversation & {
    users: User[],
    messages: FullMessageType[],
};