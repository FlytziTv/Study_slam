export default function SignIn2() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-medium text-sm text-white">
          Name
        </label>
        <input
          type="text"
          placeholder="Votre nom"
          className="text-base text-white px-4 py-2 bg-[#262626]/40 border border-[#262626] rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-medium text-sm text-white">
          Pseudo
        </label>
        <input
          type="text"
          placeholder="Votre pseudo (ex: Gamer123)"
          className="text-base text-white px-4 py-2 bg-[#262626]/40 border border-[#262626] rounded-lg"
        />
        <p className="text-sm text-[#A1A1A1]">
          ce pseudo sera utilisé pour vous identifier sur la plateforme
        </p>
      </div>
      <button className="px-4 py-2 bg-white rounded-lg w-full font-medium text-black text-sm">
        Créez votre compte
      </button>
    </form>
  );
}
