import MembersCard from "@/components/card/MembersCard";
import Header from "@/components/navbar/Header";
import { users } from "@/data/test";

export default function Members() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <main className="flex min-h-screen w-full flex-col items-start p-10 gap-4 pt-25">
        <h1 className="font-bold text-2xl text-white ">Liste de nos membres</h1>
        {/* Grid des membres */}
        <div className="grid grid-cols-4 gap-4 w-full">
          {users.map((user) => (
            <MembersCard
              key={user.id}
              ImageUser={user.avatarUrl}
              UserName={user.name}
              UserStats={user.stats}
              UserFavoritesMedia={user.favoritesMedia}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
