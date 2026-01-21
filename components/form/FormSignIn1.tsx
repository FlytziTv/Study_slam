import { GithubIcon } from "../icons/github";

export default function SignIn1() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-medium text-sm text-white">
          Email
        </label>
        <input
          type="email"
          placeholder="prenom.nom@exemple.com"
          className="text-base text-white px-4 py-2 bg-[#262626]/40 border border-[#262626] rounded-lg"
        />
      </div>
      <button className="px-4 py-2 bg-white rounded-lg w-full font-medium text-black text-sm">
        Créez votre compte
      </button>
      <div className="flex flex-row gap-4 w-full items-center justify-center">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(217, 217, 217, 0%) 0%, #A1A1A1 100%)",
          }}
        />
        <p>or</p>
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, #A1A1A1 0%, rgba(217, 217, 217, 0%) 100%)",
          }}
        />
      </div>
      <button className="px-4 py-2 bg-black rounded-lg border border-[#262626] w-full font-medium text-white text-sm flex items-center justify-center gap-2">
        <GithubIcon size={18} />
        S&apos;inscrire avec Github
      </button>
    </form>
  );
}
