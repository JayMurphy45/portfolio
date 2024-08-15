export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-4-md mx-auto mb-4 text-center">
        <h1 className="text-4xl font-bold mt-4">Projects</h1>
        <p className="text-xl">
          Here are some of the projects I have worked on so far.
        </p>

        <div className="max-4-md mx-auto mb-4 mt-4">
          <h2 className="text-4xl">Project 1: Zoldier</h2>
          <p>
            This was a video game i made in unity using c# it is a top down
            shooter It was a group project with 1 other student It was made in 3
            weeks alot of bugs but alot of concepts learned
          </p>

          <a
            href="https://github.com/JayMurphy45/Zoldier_Final-submission"
            className="text-blue-400"
          >
            GitHub Link
          </a>
        </div>

        <div className="max-4-md mx-auto mb-4 mt-4">
          <h2 className="text-4xl">
            Project 2: Wildfire Simulation using PThreads
          </h2>
          <p>
            In My Parallel Programming Module We were asked to make a program
            that makes a simulation of a wildfire using Burnt,Fuel, Non fuel and
            Burning Variables. I made this on a mageia 8 linux machine in C with
            PThreads
          </p>
          <a href="" className="text-blue-400">
            GitHub Link
          </a>
        </div>

        <div className="max-4-md mx-auto mb-4 mt-4">
          <h2 className="text-4xl">Project 3: Hotel Booking App</h2>
          <p>
            This was a project i made as a team in my web development module
            using HTML, CSS and PHP. It was a group project with 2 other
            students. It was made in 3 weeks. It was a hotel booking app with
            login and register functionality
          </p>
          <a
            href="https://github.com/JayMurphy45/Hotel_Booking"
            className="text-blue-400"
          >
            GitHub Link
          </a>
        </div>

        <div className="max-4-md mx-auto mb-4 mt-4">
          <h2 className="text-4xl">Project 4: Krispy creme</h2>
          <p>
            This was a project i made in my Rich Web development module using
            Next.js ,React, MongoDB. It was a individual. It was made in 3
            weeks. It was a website for krispy creme donuts with login and
            register functionality, a shopping cart we also learned how to
            Deploy the website using Vercel Server{" "}
          </p>
          <a
            href="https://github.com/JayMurphy45/krispy-creme"
            className="text-blue-400"
          >
            GitHub Link
          </a>
        </div>

        <div className="max-4-md mx-auto mb-4 mt-4">
          <h2 className="text-4xl">Project 5: MyCyberCàfe</h2>
          <p>
            This was a Major group project in my third year of college the idea
            was to make a webapp that manages screentime it took the epoc time
            and displayed it into a graph using the open source library called
            chart.js
          </p>
          <a
            href="https://github.com/JayMurphy45/krispy-creme"
            className="text-blue-400"
          >
            GitHub Link
          </a>
        </div>
        <div className="max-4-md mx-auto mb-4 mt-4">
          <h2 className="text-4xl">Project 6: Flutter chat application</h2>
          <p>
            To gain more experience with flutter i made a chat application that
            connects to a api to load images that can be sent in a chat
            application. I got this tutorial from a LinkedIn learning course
            called Flutter Essential Training from pooja bhaumik.
          </p>
          <a
            href="https://github.com/JayMurphy45/FlutterChatApp"
            className="text-blue-400"
          >
            GitHub Link
          </a>
        </div>
      </div>
    </main>
  );
}
