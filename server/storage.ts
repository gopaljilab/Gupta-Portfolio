import { db } from "./db";
import { contactMessages, type CreateContactMessageRequest, type ContactMessageResponse } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: CreateContactMessageRequest): Promise<ContactMessageResponse>;
  getContactMessages(): Promise<ContactMessageResponse[]>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: CreateContactMessageRequest): Promise<ContactMessageResponse> {
    const [result] = await db.insert(contactMessages).values(message).returning();
    return result;
  }

  async getContactMessages(): Promise<ContactMessageResponse[]> {
    return await db.select().from(contactMessages);
  }
}

export const storage = new DatabaseStorage();
