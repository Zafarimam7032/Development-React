const Projects = () => {
  const projectData = [
    {
      title: "Citi Bank",
      duration: "14 Months",
      details: [
        "Developed notification microservices",
        "Built RESTful APIs",
        "Worked on RedHat cloud integrations",
      ],
    },
    {
      title: "Truist Bank",
      duration: "24 Months",
      details: [
        "Assigned credit cards to users",
        "Company onboarding processes",
        "Handled pending and posted transactions",
        "Created and maintained test cases",
        "Resolved defects & supported training module",
      ],
    },
    {
      title: "Global Banking Platform",
      duration: "24 Months",
      details: [
        "Built banking management services with Hibernate, JWT, and Oracle",
        "Deployed to OpenShift cloud infrastructure",
        "Developed microservices: Account Opening, Bank Locator, Address & Personal Detail Updates, Logging",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 text-gray-800">
      <h2 className="text-2xl font-bold mb-6">Project Experience</h2>
      <div className="space-y-6">
        {projectData.map((project, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold text-blue-600">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{project.duration}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
