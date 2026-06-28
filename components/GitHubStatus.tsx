export default async function GitHubStatus() {
  try {
    const res = await fetch("https://api.github.com/users/wrufay", {
      next: { revalidate: 300 },
    });

    const json = await res.json();
    const bio = json?.bio;
    if (!bio) return null;

    return (
      <p className="flex flex-row gap-1 sm:gap-2 items-center mb-2">
        <span className="border-b border-gray-600">
          {bio}
        </span>
      </p>
    );
  } catch {
    return null;
  }
}
