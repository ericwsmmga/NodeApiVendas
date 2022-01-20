import { StringMap } from "ts-jest/dist/types"

export interface IHashProvider {
  generateHash(payload: string): Promise<string>
  compareHash(payload: string, hashed: string): Promise<boolean>

}
