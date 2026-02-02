/**
 * Retry utility for handling transient database connection errors
 * Particularly useful for Supabase connection pool issues
 */

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1500; // 1 second

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function withRetry<T>(
  operation: () => Promise<T>,
  retries: number = MAX_RETRIES
): Promise<T> {
  let lastError: any;

  for (let i = 0; i < retries; i++) {
    try {
      return await operation();
    } catch (error: any) {
      lastError = error;

      // Only retry on specific connection errors
      const isConnectionError =
        error?.code === "P1001" || // Can't reach database server
        error?.code === "P1017" || // Server closed connection
        error?.message?.includes("Can't reach database") ||
        error?.message?.includes("Connection terminated");

      if (!isConnectionError || i === retries - 1) {
        // Not a connection error or last retry - throw immediately
        throw error;
      }

      // Log retry attempt
      console.warn(
        `⚠️  Database connection error (attempt ${i + 1}/${retries}):`,
        error.code || error.message
      );

      // Wait before retrying (exponential backoff)
      const delay = RETRY_DELAY_MS * Math.pow(2, i);
      await sleep(delay);
    }
  }

  throw lastError;
}
