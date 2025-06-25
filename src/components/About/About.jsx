
export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://media.istockphoto.com/id/513320180/photo/word-react-on-wood-planks.webp?a=1&b=1&s=612x612&w=0&k=20&c=QuIWK4rSvs7Idvbu5ZC2ZROyPCBd9g2Q1eb3HK-YETI="
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          React developers who craft modern, high-performance web applications.
                          A React Developer builds reusable components, manages state effectively, and integrates APIs to deliver seamless user experience. Using technologies like React Router, Redux,  Hooks, and modern JavaScript, they create scalable frontends that adapt to various screen sizes and platforms.
                          Their focus is on writing clean code, optimizing performance, and continuously improving UI/UX for real-world users.
                      </p>
                      <p className="mt-4 text-gray-600">
                          Building tomorrow's user interfaces — one reusable component at a time. ⚛️
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}