export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-4-md mx-auto mb-4 text-center">
        <h1 className="text-6xl font-bold">Jamie's Portfolio</h1>

        <h2 className="text-4xl font-bold mt-4">About Me:</h2>
        <p className="text-xl">
          Welcome to my portfolio. I am a computing student currently studying
          at TUD Blanchardstown. I am a passionate developer with a keen
          interest in web development and software development. I am currently
          learning React and Next.js and have a good understanding of HTML, CSS,
          and JavaScript. I am also learning Java and Python. I am interested in
          learning more about cloud computing and cyber security. I am a
          hardworking and dedicated individual who is always looking to learn
          and improve my skills. I am always looking for new opportunities and
          challenges to help me grow as a developer.
        </p>
      </div>

      <div className="max-4-md mx-auto mb-4">
        <h2 className="text-4xl font-bold ">Skills:</h2>
        <p>
          HTML, CSS, JavaScript, React, Next.js Java, Python, php, Git, GitHub
        </p>
        <p>
          Agile, Scrum Microsoft Office TroubleShooting, Problem Solving, UML
        </p>
      </div>

      <h2 className="text-4xl font-bold">Education</h2>
      <h3>Computer Science - TUD Blanchardstown</h3>
      <div className="max-w-md mx-auto">
        <p className="text-lg font-bold mt-4">
          Modules Completed so far include:
        </p>
        <ul className="list-disc pl-5">
          <li>Computer Systems</li>
          <li>Operating Systems</li>
          <li>GUI Programming with Java Swing</li>
          <li>Software Engineering and Testing</li>
          <li>Database Management</li>
          <li>Object Oriented Analysis and Design</li>
          <li>Web Development</li>
          <li>Rich Web Application Development</li>
          <li>Interactive Multimedia</li>
          <li>Data Structures and Algorithms</li>
          <li>Object Oriented Design Patterns</li>
          <li>Paraell Computing</li>
        </ul>
      </div>
    </main>
  );
}
