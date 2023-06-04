declare module "uuid" {
  export function v4(): string;
}

declare module "uuid" {
  export type UUID = ReturnType<typeof uuidv4>;
}
