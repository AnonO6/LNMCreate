const useFilter = (Type, projectData) => {
  if (Type == "ALL") {
    return projectData;
  }
  const data = projectData.filter((project) => project.type == Type);
  return data;
};
export default useFilter;
