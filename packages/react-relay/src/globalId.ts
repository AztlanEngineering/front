export function decodeGlobalId(globalId: string): { typeName: string; id: string } {
  // Decode the Base64 string for browser environments
  const decodedString = atob(globalId)

  // Split the decoded string into typeName and id
  const [
    typeName,
    id,
  ] = decodedString.split(':')

  return {
    typeName,
    id,
  }
}

export function encodeGlobalId(
  typeName: string, id: string,
): string {
  // Join the typeName and id with a colon
  const joinedString = `${typeName}:${id}`

  // Encode the joined string to Base64
  return btoa(joinedString)
}
