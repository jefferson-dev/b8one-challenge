export default interface IBcryptJS {
  hash(password: string): Promise<string>;
}
