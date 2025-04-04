const Experience = () => {
  const experiences = [
    {
      title: "ASSOCIATE SOFTWARE ENGINEER",
      company: "Prolincur Technologies.",
      duration: "May 2023 - Sept 2024",
    },
  ];

  return (
    <div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-gray-800 text-white p-6 rounded-xl w-full max-w-md mb-6 shadow-lg"
        >
          <p className="text-green-400 text-sm mb-2">({exp.duration})</p>
          <h2 className="text-xl font-bold">{exp.title}</h2>
          <p className="text-gray-400">{exp.company}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
