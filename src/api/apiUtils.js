export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("No network response!");
}

export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("Failed to establish API call." + error);
  throw error;
}
