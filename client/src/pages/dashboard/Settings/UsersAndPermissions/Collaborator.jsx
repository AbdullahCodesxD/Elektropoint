import CollaboratorForm from "./CollaboratorForm";

export default function Collaborator() {
  return (
    <div className="bg-white p-4 rounded-xl w-full mt-4">
      <h4 className="font-semibold text-lg">Collaborator</h4>
      <p className="text-[15px]">
        Give external designer, developer and marketer access to your shopify
        domain
      </p>

      <CollaboratorForm />
    </div>
  );
}
