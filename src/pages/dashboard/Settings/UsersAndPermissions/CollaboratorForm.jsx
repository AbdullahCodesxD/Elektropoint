export default function CollaboratorForm() {
  return (
    <form className="mt-3">
      <div className="mb-2">
        <input
          type="radio"
          name="collaborator"
          id="collaborator-anyone"
          defaultChecked
          className="appearance-none h-[12px] cursor-pointer aspect-square rounded-full checked:border checked:border-transparent checked:bg-[#99D913] ring-1 ring-black ring-offset-2  checked:ring-offset-white"
        />
        <label
          htmlFor="collaborator-anyone"
          className="ml-2 cursor-pointer text-black/90 text-[15px]"
        >
          Anyone can send a collaborator request
        </label>
      </div>

      <div className="mb-3">
        <input
          type="radio"
          name="collaborator"
          id="collaborator-code"
          className="appearance-none h-[12px] cursor-pointer aspect-square rounded-full checked:border checked:border-transparent checked:bg-[#99D913] ring-1 ring-black ring-offset-2  checked:ring-offset-white"
        />
        <label
          htmlFor="collaborator-code"
          className="ml-2 cursor-pointer text-black/90 text-[15px]"
        >
          Only people with a collaborator request code can send a collaborator
          request
        </label>
      </div>

      <div className="mt-3">
        <h4 className="font-semibold text-lg">Collaborator request code</h4>
        <input
          maxLength={10}
          type="text"
          className="w-full rounded-md outline-none border text-[14px] border-black/30 p-3 caret-red"
        />
        <p className="text-[15px] text-black/70 mt-1 ml-0.5">
          Share this code to allow someone to send you a collaborator request.
          You’ll still need to review and approved their request.
        </p>
      </div>
    </form>
  );
}
