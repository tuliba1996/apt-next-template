import * as grpcWeb from 'grpc-web';

import * as test_pb from './test_pb';


export class ChatServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  join(
    request: test_pb.User,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: test_pb.JoinResponse) => void
  ): grpcWeb.ClientReadableStream<test_pb.JoinResponse>;

  sendMsg(
    request: test_pb.ChatMessage,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: test_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<test_pb.Empty>;

  receiveMsg(
    request: test_pb.ReceiveMsgRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<test_pb.ChatMessage>;

  getAllUsers(
    request: test_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: test_pb.UserList) => void
  ): grpcWeb.ClientReadableStream<test_pb.UserList>;

}

export class ChatServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  join(
    request: test_pb.User,
    metadata?: grpcWeb.Metadata
  ): Promise<test_pb.JoinResponse>;

  sendMsg(
    request: test_pb.ChatMessage,
    metadata?: grpcWeb.Metadata
  ): Promise<test_pb.Empty>;

  receiveMsg(
    request: test_pb.ReceiveMsgRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<test_pb.ChatMessage>;

  getAllUsers(
    request: test_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<test_pb.UserList>;

}

