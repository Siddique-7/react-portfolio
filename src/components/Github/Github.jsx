import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Siddique-7');
        const json = await response.json();
        console.log("📦 GitHub API Data:", json);
        setData(json);
        setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching GitHub data:", err);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (loading) return <div className="text-center text-white py-6">Loading GitHub data...</div>;
  if (!data) return <div className="text-center text-red-500 py-6">Failed to load data.</div>;

  return (
    <div className="flex justify-center bg-gray-700 text-white p-6 rounded-lg mx-auto my-10 w-[90%] sm:w-[80%] md:w-[60%] shadow-lg min-h-[300px]">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
        />

        {/* Info */}
        <div className="text-center sm:text-left space-y-2">
          <h2 className="text-2xl font-bold">👨‍💻 {data.name}</h2>
          <p className="text-lg">👥 Followers: <span className="font-semibold">{data.followers}</span></p>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-medium"
          >
            🔗 View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github;
