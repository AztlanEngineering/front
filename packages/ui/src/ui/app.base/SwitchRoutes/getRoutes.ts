type RelativePaths = {
  [key: string]:string;
}

interface Paths {
  absolute:Record<string, string>;
  all     :string[];
  relative:RelativePaths;
  base    :string;
}

export default function getPaths(
  basePath: string,
  relativePaths: RelativePaths,
): Paths {
  const result = Object.keys(relativePaths).reduce(
    (
      acc: { absolute: Record<string, string>; all: string[] }, key: string,
    ) => {
      const absolutePath = basePath + relativePaths[key]
      acc.absolute[key] = absolutePath // Store the absolute path
      acc.all.push(absolutePath) // Collect all absolute paths
      return acc
    },
    {
      absolute:{},
      all     :[],
    },
  )

  // Return the result along with the original relativePaths
  return {
    base    :basePath,
    relative:relativePaths,
    ...result,
  }
}
