export default function Portfolio() {
  const slides = [
    {
      title: 'Welcome',
      content: (
        <div className="flex flex-col items-center justify-center text-center h-full">
          <img
            src="/nipesh.jpeg"
            alt="Nipesh Kumar Sisodia"
            className="w-64 h-64 rounded-3xl object-cover border-4 border-blue-500 shadow-2xl mb-8"
          />
          <h1 className="text-5xl font-bold mb-4 text-white">
            Nipesh Kumar Sisodia
          </h1>
          <p className="text-xl text-blue-300 mb-3">
            B.Sc. (Hons.) Anthropology Student
          </p>
          <p className="text-gray-300 max-w-2xl leading-8 text-lg">
            Passionate about social research, fieldwork, data analysis, and
            community engagement.
          </p>
        </div>
      ),
    },
    {
      title: 'About Me',
      content: (
        <div>
          <h2 className="text-4xl font-bold text-blue-400 mb-8">About Me</h2>
          <p className="text-gray-300 text-xl leading-10">
            I am a motivated Anthropology student at Hansraj College,
            University of Delhi. I have a strong interest in understanding
            cultures, communities, and social issues through fieldwork and
            research-based learning. I enjoy teamwork, communication, and
            participating in activities that create social awareness and
            positive impact.
          </p>
        </div>
      ),
    },
    {
      title: 'Education',
      content: (
        <div>
          <h2 className="text-4xl font-bold text-blue-400 mb-10">Education</h2>
          <div className="space-y-8 text-lg">
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                B.Sc. (Hons.) Anthropology
              </h3>
              <p className="text-gray-300">
                Hansraj College, University of Delhi
              </p>
              <p className="text-blue-300">2025 – Present</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Class XII (CBSE)
              </h3>
              <p className="text-gray-300">Sarang Convent School</p>
              <p className="text-blue-300">82%</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Class X (CBSE)
              </h3>
              <p className="text-gray-300">
                Shikhar Shishu Sadan Sr. Sec. School
              </p>
              <p className="text-blue-300">82.2%</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Skills',
      content: (
        <div>
          <h2 className="text-4xl font-bold text-blue-400 mb-10">Skills</h2>
          <div className="grid md:grid-cols-2 gap-5 text-lg">
            {[
              'Research & Fieldwork',
              'Survey Methods',
              'Data Collection',
              'Social Analysis',
              'IBM SPSS (Basic)',
              'MS Excel',
              'MS Word & PowerPoint',
              'Canva',
              'Communication Skills',
              'Teamwork & Collaboration',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Experience',
      content: (
        <div>
          <h2 className="text-4xl font-bold text-blue-400 mb-10">
            Experience & Activities
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                NSS, Hansraj College
              </h3>
              <p className="text-blue-300 mb-3">Member | Sept 2025 – Present</p>
              <p className="text-gray-300 leading-8 text-lg">
                Participating in awareness drives, social service activities,
                and community engagement initiatives.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Udaan – The Motivational Society
              </h3>
              <p className="text-blue-300 mb-3">Member | Sept 2025 – Present</p>
              <p className="text-gray-300 leading-8 text-lg">
                Contributing to student development activities while improving
                communication and teamwork skills.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Contact',
      content: (
        <div className="flex flex-col items-center justify-center text-center h-full">
          <h2 className="text-5xl font-bold text-blue-400 mb-8">Contact</h2>

          <div className="space-y-5 text-xl text-gray-300">
            <p>📞 +91-7668518844</p>
            <p>📧 sisodianipesh578@gmail.com</p>
            <p>🔗 linkedin.com/in/nipeshsisodia</p>
          </div>

          <p className="mt-12 text-gray-500 text-lg">
            Thank You For Viewing My Portfolio
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-black min-h-screen p-8 space-y-10">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-blue-950 rounded-[40px] border border-gray-800 shadow-2xl p-10 flex flex-col justify-center"
        >
          <div className="mb-6 text-sm text-gray-500 tracking-widest uppercase">
            Slide {index + 1}
          </div>

          {slide.content}
        </div>
      ))}
    </div>
  );
}

