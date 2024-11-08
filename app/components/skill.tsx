export default function SkillsSection() {
    const skills = [
      { name: "Bermain Game", level: 90 },
      { name: "Microsoft Office", level: 70 },
      { name: "Sepak bola", level: 80 },
      { name: "Ngoding", level: 65 },

    ];
  
    return (
      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-yellow-800 font-bold text-2xl mb-5">Skills</h2>
        <div className="flex flex-col items-center space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="w-1/2">
              <div className="flex justify-between mb-1">
                <span className="text--700 font-medium">{skill.name}</span>
                <span className="text-yellow-700 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-yellow-600 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }