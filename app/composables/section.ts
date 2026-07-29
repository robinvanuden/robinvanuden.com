export const useSection = async (path: string) =>
  useAsyncData(path, () => queryCollection("section").path(path).first());
