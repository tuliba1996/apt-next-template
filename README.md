# APT TEMPLATE CODE NEXTJS

## Description
 - Next 13
 - Typescript
 - Auth0
 - React Query
 - React Hook Form
 - Yup
 - GRPC web
 - buf


## Getting Started

### Create project

```bash
npx create-next-app --example https://github.com/tuliba1996/apt-next-template <project-name>
```

## Ecosystem

### Code Generator Plugin:
You can download the `protoc-gen-grpc-web` protoc plugin from our
[release](https://github.com/grpc/grpc-web/releases) page:

If you don't already have `protoc` installed, you will have to download it
first from [here](https://github.com/protocolbuffers/protobuf-javascript/releases).

> **NOTE:** Javascript output is no longer supported by `protocolbuffers/protobuf` package as it previously did. Please use the releases from [protocolbuffers/protobuf-javascript](https://github.com/protocolbuffers/protobuf-javascript/releases) instead.

Make sure they are both executable and are discoverable from your PATH.

For example, in MacOS, you can do:

```
$ sudo mv ~/Downloads/protoc-gen-grpc-web-1.4.2-darwin-x86_64 \
    /usr/local/bin/protoc-gen-grpc-web
$ chmod +x /usr/local/bin/protoc-gen-grpc-web
```

### Client Configuration Options

Typically, you will run the following command to generate the proto messages
and the service client stub from your `.proto` definitions:

```sh
$ protoc -I=$DIR test.proto \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

You can then use Browserify, Webpack, Closure Compiler, etc. to resolve imports
at compile time.

#### Generated Code with buf

Install buf

```bash
# install buf
brew install bufbuild/buf/buf

# check version buf
buf version
```

```bash
cd src/grpc
buf generate
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
