import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  const { category, id } = router.query; // Получаем параметры из URL

  // Пример данных о проекте
  const projectData = {
    title: "Sample Project Title",
    description: "This is a detailed description of the project.",
    owner: "John Doe",
    raised: "10 ETH",
    backers: 25,
  };

  if (!category || !id) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{projectData.title}</h1>
      <p className="text-lg mb-2 text-gray-600">{projectData.description}</p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Project ID:</strong> {id}
      </p>
      <p>
        <strong>Owner:</strong> {projectData.owner}
      </p>
      <p>
        <strong>Raised:</strong> {projectData.raised}
      </p>
      <p>
        <strong>Backers:</strong> {projectData.backers}
      </p>
    </div>
  );
};

export default ProjectPage;
