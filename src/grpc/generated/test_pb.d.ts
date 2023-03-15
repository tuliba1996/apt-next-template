import * as jspb from 'google-protobuf'



export class ChatMessage extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): ChatMessage;

  getMsg(): string;
  setMsg(value: string): ChatMessage;

  getTime(): string;
  setTime(value: string): ChatMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    from: string,
    msg: string,
    time: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getName(): string;
  setName(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class UserList extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): UserList;
  clearUsersList(): UserList;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserList.AsObject;
  static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
  static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserList;
  static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class JoinResponse extends jspb.Message {
  getError(): number;
  setError(value: number): JoinResponse;

  getMsg(): string;
  setMsg(value: string): JoinResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinResponse): JoinResponse.AsObject;
  static serializeBinaryToWriter(message: JoinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinResponse;
  static deserializeBinaryFromReader(message: JoinResponse, reader: jspb.BinaryReader): JoinResponse;
}

export namespace JoinResponse {
  export type AsObject = {
    error: number,
    msg: string,
  }
}

export class ReceiveMsgRequest extends jspb.Message {
  getUser(): string;
  setUser(value: string): ReceiveMsgRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveMsgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveMsgRequest): ReceiveMsgRequest.AsObject;
  static serializeBinaryToWriter(message: ReceiveMsgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveMsgRequest;
  static deserializeBinaryFromReader(message: ReceiveMsgRequest, reader: jspb.BinaryReader): ReceiveMsgRequest;
}

export namespace ReceiveMsgRequest {
  export type AsObject = {
    user: string,
  }
}

