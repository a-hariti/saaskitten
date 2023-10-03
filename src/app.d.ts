/// <reference types="lucia" />
declare global {
  namespace Lucia {
    type Auth = import("$lib/server/lucia").Auth;
    type DatabaseUserAttributes = {
      email: string;
      email_verified: boolean;
    };
    type DatabaseSessionAttributes = Record<string, never>;
  }
  namespace App {
    interface Locals {
      auth: import("lucia").AuthRequest;
    }
  }
}

// THIS IS IMPORTANT!!!
export {};
