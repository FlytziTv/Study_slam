import { Button } from "../ui/Button";
import { GithubIcon } from "../icons/github";
import { Input } from "../ui/Input";

export default function SignIn1() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-medium text-sm text-white">
          Email
        </label>
        <Input type="email" placeholder="prenom.nom@exemple.com" />
      </div>
      <Button variant="form">Créez votre compte</Button>
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
      <Button
        variant="form"
        className="bg-black text-white border border-[#262626] "
      >
        <GithubIcon size={18} />
        S&apos;inscrire avec Github
      </Button>
    </form>
  );
}
