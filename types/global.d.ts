import type mongoose from "mongoose";

declare global {
  let _mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}
